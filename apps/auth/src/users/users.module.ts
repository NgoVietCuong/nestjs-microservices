import { Module } from '@nestjs/common';
import { DatabaseModule, LoggerModule } from '@app/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { UserDocument, UserSchema } from './models/user.schema';

@Module({
  imports: [LoggerModule, DatabaseModule, DatabaseModule.forFeature([{ name: UserDocument.name, schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
