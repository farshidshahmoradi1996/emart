import { ApiProperty } from '@nestjs/swagger';
import { Matches } from 'class-validator';
import { IRAN_PHONE_REGEX } from 'src/config/constants';

export class AuthenticateUserDto {
  @ApiProperty()
  @Matches(IRAN_PHONE_REGEX, { message: 'phone number is not valid' })
  phone: string;
}
