import { registerAs } from '@nestjs/config';

export default registerAs('mail', () => ({
  user: process.env.STMP_USER,
  clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
  clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
  refreshToken: process.env.GOOGLE_OAUTH_REFRESH_TOKEN,
}));