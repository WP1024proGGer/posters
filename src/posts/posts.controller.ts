import { Body, Controller, Get, Post } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/CreatePost.dto";

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  async getAll() {
    const posts = await this.getAll()
    return posts;
  }

  @Post('new')
  async createPost(@Body() postData: CreatePostDto) {
    const post = await this.postsService.postsCreate(postData);
    return post;
  }

}


