import { Module } from "@nestjs/common";
import { FundraiserModuleBase } from "./base/fundraiser.module.base";
import { FundraiserService } from "./fundraiser.service";
import { FundraiserController } from "./fundraiser.controller";
import { FundraiserResolver } from "./fundraiser.resolver";

@Module({
  imports: [FundraiserModuleBase],
  controllers: [FundraiserController],
  providers: [FundraiserService, FundraiserResolver],
  exports: [FundraiserService],
})
export class FundraiserModule {}
