import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateChargeDto {
  @IsString()
  @IsNotEmpty()
  paymentMethod?: string = 'pm_card_visa';

  @IsNumber()
  amount: number;
}
