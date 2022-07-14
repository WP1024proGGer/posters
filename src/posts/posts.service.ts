import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Posts, PostsDocument } from "./schemas/posts.shema";
import { CreatePostDto } from "./dto/CreatePost.dto";
import { PostsEditDto } from "./dto/PostsEdit.dto";
import { Users } from "../users/schemas/users.schema";

@Injectable()
export class PostsService {
  constructor(@InjectModel(Posts.name) private postsModel: Model<PostsDocument>) {}
  async getAll(): Promise<Array<Posts>> {
    const posts = await this.postsModel.find();
    return posts;
  }

  async postsCreate(PostData: CreatePostDto): Promise<Posts> {
    const post = await new this.postsModel({ ...PostData });
    await post.save();
    return post;
  }

  // async postsEdit(postsData: PostsEditDto): Promise<Posts> {
  //   const post = await this.postsModel.update({author: postsData.author}, {author: postsData.author, title: postsData.title, message: postsData.message });
  //   return post;
  // }
  // db.users.updateOne({name : "Tom"}, {$pullAll: {languages: ["english", "german", "french"]}})

  // async findByName(name: string): Promise<Users> {
  //   const user = await this.usersModel.findOne({ name });
  //   return user;
  // }


}
