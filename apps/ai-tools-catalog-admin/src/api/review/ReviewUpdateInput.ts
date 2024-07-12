import { AiToolWhereUniqueInput } from "../aiTool/AiToolWhereUniqueInput";
import { CommentUpdateManyWithoutReviewsInput } from "./CommentUpdateManyWithoutReviewsInput";

export type ReviewUpdateInput = {
  title?: string | null;
  content?: string | null;
  rating?: number | null;
  aiTool?: AiToolWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutReviewsInput;
};
