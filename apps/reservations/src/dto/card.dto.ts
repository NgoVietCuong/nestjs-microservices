import { IsNotEmpty, IsString } from "class-validator";

export default CardDto {
  @IsString()
  @IsNotEmpty()
  cvc: string;

  
  exp_month?: number;

  exp_year?: number;


  number?: string;

  token?: string;
}