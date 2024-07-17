import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FundraiserService } from "./fundraiser.service";
import { FundraiserControllerBase } from "./base/fundraiser.controller.base";

@swagger.ApiTags("fundraisers")
@common.Controller("fundraisers")
export class FundraiserController extends FundraiserControllerBase {
  constructor(protected readonly service: FundraiserService) {
    super(service);
  }
}
