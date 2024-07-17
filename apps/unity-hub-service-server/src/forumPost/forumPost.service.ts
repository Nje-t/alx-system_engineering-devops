import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ForumPostServiceBase } from "./base/forumPost.service.base";

@Injectable()
export class ForumPostService extends ForumPostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
