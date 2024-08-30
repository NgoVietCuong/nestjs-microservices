import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(body: CreateUserDto) {
    return this.usersRepository.create({
      ...body,
      password: await bcrypt.hash(body.password, 10),
    });
  }

  async verifyUser(email: string, password: string) {
    const user = await this.usersRepository.findOne({ email });
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new UnauthorizedException('Credentials not valid');
    }
    return user;
  }
}
