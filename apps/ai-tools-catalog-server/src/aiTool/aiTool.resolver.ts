import * as graphql from "@nestjs/graphql";
import { AiToolResolverBase } from "./base/aiTool.resolver.base";
import { AiTool } from "./base/AiTool";
import { AiToolService } from "./aiTool.service";

@graphql.Resolver(() => AiTool)
export class AiToolResolver extends AiToolResolverBase {
  constructor(protected readonly service: AiToolService) {
    super(service);
  }
}
