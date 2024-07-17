import { Module } from "@nestjs/common";
import { VolunteerModuleBase } from "./base/volunteer.module.base";
import { VolunteerService } from "./volunteer.service";
import { VolunteerController } from "./volunteer.controller";
import { VolunteerResolver } from "./volunteer.resolver";

@Module({
  imports: [VolunteerModuleBase],
  controllers: [VolunteerController],
  providers: [VolunteerService, VolunteerResolver],
  exports: [VolunteerService],
})
export class VolunteerModule {}
