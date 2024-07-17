import { Module } from "@nestjs/common";
import { ForumPostModuleBase } from "./base/forumPost.module.base";
import { ForumPostService } from "./forumPost.service";
import { ForumPostController } from "./forumPost.controller";
import { ForumPostResolver } from "./forumPost.resolver";

@Module({
  imports: [ForumPostModuleBase],
  controllers: [ForumPostController],
  providers: [ForumPostService, ForumPostResolver],
  exports: [ForumPostService],
})
export class ForumPostModule {}
