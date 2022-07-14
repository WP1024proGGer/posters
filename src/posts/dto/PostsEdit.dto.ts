import { IsOptional } from "class-validator";


export class PostsEditDto {
  @IsOptional()
  author: string;

  @IsOptional()
  title: string;

  @IsOptional()
  message: string;
}