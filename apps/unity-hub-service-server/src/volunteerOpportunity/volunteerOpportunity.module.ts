import { Module } from "@nestjs/common";
import { VolunteerOpportunityModuleBase } from "./base/volunteerOpportunity.module.base";
import { VolunteerOpportunityService } from "./volunteerOpportunity.service";
import { VolunteerOpportunityController } from "./volunteerOpportunity.controller";
import { VolunteerOpportunityResolver } from "./volunteerOpportunity.resolver";

@Module({
  imports: [VolunteerOpportunityModuleBase],
  controllers: [VolunteerOpportunityController],
  providers: [VolunteerOpportunityService, VolunteerOpportunityResolver],
  exports: [VolunteerOpportunityService],
})
export class VolunteerOpportunityModule {}
