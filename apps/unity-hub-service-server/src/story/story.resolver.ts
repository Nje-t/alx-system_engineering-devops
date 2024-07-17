import * as graphql from "@nestjs/graphql";
import { StoryResolverBase } from "./base/story.resolver.base";
import { Story } from "./base/Story";
import { StoryService } from "./story.service";

@graphql.Resolver(() => Story)
export class StoryResolver extends StoryResolverBase {
  constructor(protected readonly service: StoryService) {
    super(service);
  }
}
