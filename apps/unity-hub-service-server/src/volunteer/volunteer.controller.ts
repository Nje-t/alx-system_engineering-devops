import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VolunteerService } from "./volunteer.service";
import { VolunteerControllerBase } from "./base/volunteer.controller.base";

@swagger.ApiTags("volunteers")
@common.Controller("volunteers")
export class VolunteerController extends VolunteerControllerBase {
  constructor(protected readonly service: VolunteerService) {
    super(service);
  }
}
