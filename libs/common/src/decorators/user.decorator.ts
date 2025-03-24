import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserDocument } from '../models/user.schema';

export const User = createParamDecorator((data: string, ctx: ExecutionContext): UserDocument => {
  const request = ctx.switchToHttp().getRequest();
  const user = request.user;
  return data ? user?.[data] : user;
});
