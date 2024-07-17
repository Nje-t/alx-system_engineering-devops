import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StoryService } from "./story.service";
import { StoryControllerBase } from "./base/story.controller.base";

@swagger.ApiTags("stories")
@common.Controller("stories")
export class StoryController extends StoryControllerBase {
  constructor(protected readonly service: StoryService) {
    super(service);
  }
}
