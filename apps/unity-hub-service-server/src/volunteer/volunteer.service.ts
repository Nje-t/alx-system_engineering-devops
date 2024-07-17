import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VolunteerServiceBase } from "./base/volunteer.service.base";

@Injectable()
export class VolunteerService extends VolunteerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
