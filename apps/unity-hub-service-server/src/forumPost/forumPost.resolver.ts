import * as graphql from "@nestjs/graphql";
import { ForumPostResolverBase } from "./base/forumPost.resolver.base";
import { ForumPost } from "./base/ForumPost";
import { ForumPostService } from "./forumPost.service";

@graphql.Resolver(() => ForumPost)
export class ForumPostResolver extends ForumPostResolverBase {
  constructor(protected readonly service: ForumPostService) {
    super(service);
  }
}
