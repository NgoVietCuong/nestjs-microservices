import { Inject, Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { NotifyEmailDto } from "./dto/notify-email.dto";
import { ConfigService, ConfigType } from '@nestjs/config';
import mailConfiguration from '../config/mail.config';

@Injectable()
export class NotificationsService {
  constructor(
    @Inject(mailConfiguration.KEY) private readonly mailConfig: ConfigType<typeof mailConfiguration>
  ) {}

  private readonly transporter= nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: this.mailConfig.user,
      clientId: this.mailConfig.clientId,
      clientSecret: this.mailConfig.clientSecret,
      refreshToken: this.mailConfig.refreshToken,
    }
  });

  async notifyEmail({ email, text }: NotifyEmailDto) {
    const mailData = {
      from: this.mailConfig.user,
      to: email,
      subject: 'Notification',
      text,
    };

    await this.transporter.sendMail(mailData);
  }
}
