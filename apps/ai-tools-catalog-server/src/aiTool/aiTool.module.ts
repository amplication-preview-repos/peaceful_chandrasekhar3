import { Module } from "@nestjs/common";
import { AiToolModuleBase } from "./base/aiTool.module.base";
import { AiToolService } from "./aiTool.service";
import { AiToolController } from "./aiTool.controller";
import { AiToolResolver } from "./aiTool.resolver";

@Module({
  imports: [AiToolModuleBase],
  controllers: [AiToolController],
  providers: [AiToolService, AiToolResolver],
  exports: [AiToolService],
})
export class AiToolModule {}
