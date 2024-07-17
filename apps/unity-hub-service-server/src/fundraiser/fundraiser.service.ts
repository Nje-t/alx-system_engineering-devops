import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FundraiserServiceBase } from "./base/fundraiser.service.base";

@Injectable()
export class FundraiserService extends FundraiserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
