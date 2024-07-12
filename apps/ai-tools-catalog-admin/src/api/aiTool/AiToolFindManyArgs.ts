import { AiToolWhereInput } from "./AiToolWhereInput";
import { AiToolOrderByInput } from "./AiToolOrderByInput";

export type AiToolFindManyArgs = {
  where?: AiToolWhereInput;
  orderBy?: Array<AiToolOrderByInput>;
  skip?: number;
  take?: number;
};
