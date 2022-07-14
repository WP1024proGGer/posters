import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CoModule } from './s/co/co.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://alibe:f4ds561fds23@37.79.251.86:27017/?authMechanism=DEFAULT&authSource=alibe',
      { dbName: 'alibe' },
    ),
    UsersModule,
    CoModule,
    PostsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
