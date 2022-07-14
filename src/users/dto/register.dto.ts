import {MinLength} from "class-validator";

export class RegisterDto {
  @MinLength(3, {
    message: 'Ваше имя слишком короткое!'
  })
  name: string;

  @MinLength(8, {
    message: 'Ваш пароль слишком короткий!'
  })
  password: string;
}
