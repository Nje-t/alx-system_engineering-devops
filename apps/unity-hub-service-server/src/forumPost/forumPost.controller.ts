import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ForumPostService } from "./forumPost.service";
import { ForumPostControllerBase } from "./base/forumPost.controller.base";

@swagger.ApiTags("forumPosts")
@common.Controller("forumPosts")
export class ForumPostController extends ForumPostControllerBase {
  constructor(protected readonly service: ForumPostService) {
    super(service);
  }
}
