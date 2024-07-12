import { ReviewCreateNestedManyWithoutAiToolsInput } from "./ReviewCreateNestedManyWithoutAiToolsInput";

export type AiToolCreateInput = {
  name?: string | null;
  description?: string | null;
  category?: string | null;
  url?: string | null;
  price?: number | null;
  reviews?: ReviewCreateNestedManyWithoutAiToolsInput;
};
