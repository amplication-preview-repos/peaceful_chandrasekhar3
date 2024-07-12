import { ReviewUpdateManyWithoutAiToolsInput } from "./ReviewUpdateManyWithoutAiToolsInput";

export type AiToolUpdateInput = {
  name?: string | null;
  description?: string | null;
  category?: string | null;
  url?: string | null;
  price?: number | null;
  reviews?: ReviewUpdateManyWithoutAiToolsInput;
};
