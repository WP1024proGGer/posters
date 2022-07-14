import { MinLength } from "class-validator";


export class CreatePostDto {
  author: string;

  title: string;

  @MinLength(10, {
    message: 'Твой текст слишком короткий!'
  })
  message: string;


}



