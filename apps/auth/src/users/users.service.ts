import { Injectable, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(body: CreateUserDto) {
    await this.validateCreateUserBody(body);
    return this.usersRepository.create({
      ...body,
      password: await bcrypt.hash(body.password, 10),
    });
  }

  async getUser(body: GetUserDto) {
    return this.usersRepository.findOne(body);
  }

  async verifyUser(email: string, password: string) {
    const user = await this.usersRepository.findOne({ email });
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new UnauthorizedException('Credentials not valid');
    }
    return user;
  }

  private async validateCreateUserBody(body: CreateUserDto) {
    try {
      await this.usersRepository.findOne({ email: body.email });
    } catch (error) {
      return;
    }
    
    throw new UnprocessableEntityException('Email already exists');
  }
}
