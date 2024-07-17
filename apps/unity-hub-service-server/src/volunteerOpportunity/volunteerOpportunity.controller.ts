import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VolunteerOpportunityService } from "./volunteerOpportunity.service";
import { VolunteerOpportunityControllerBase } from "./base/volunteerOpportunity.controller.base";

@swagger.ApiTags("volunteerOpportunities")
@common.Controller("volunteerOpportunities")
export class VolunteerOpportunityController extends VolunteerOpportunityControllerBase {
  constructor(protected readonly service: VolunteerOpportunityService) {
    super(service);
  }
}
