import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AiToolService } from "./aiTool.service";
import { AiToolControllerBase } from "./base/aiTool.controller.base";

@swagger.ApiTags("aiTools")
@common.Controller("aiTools")
export class AiToolController extends AiToolControllerBase {
  constructor(protected readonly service: AiToolService) {
    super(service);
  }
}
