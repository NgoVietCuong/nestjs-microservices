import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { UserDocument } from './users/models/user.schema';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(user: UserDocument, response: Response) {
    const tokenPayload = {
      userId: user._id.toHexString()
    }
  }
}
