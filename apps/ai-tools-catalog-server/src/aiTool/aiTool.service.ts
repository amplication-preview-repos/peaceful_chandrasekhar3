import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiToolServiceBase } from "./base/aiTool.service.base";

@Injectable()
export class AiToolService extends AiToolServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
