import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VolunteerOpportunityServiceBase } from "./base/volunteerOpportunity.service.base";

@Injectable()
export class VolunteerOpportunityService extends VolunteerOpportunityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
