import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



export type PostsDocument = Posts & Document;

@Schema()
export class Posts {
  @Prop()
  title: string;

  @Prop()
  message: string;

  @Prop()
  author: string;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);