import { MinLength } from "class-validator";



export class LoginDto {
  @MinLength(3, {
    message: 'Твое имя слишшком короткое!',
  })
  name: string;

  @MinLength(8, {
    message: 'Твой пароль слишком короткий!'
  })
  password: string;
}