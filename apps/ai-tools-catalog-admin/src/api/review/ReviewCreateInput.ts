import { AiToolWhereUniqueInput } from "../aiTool/AiToolWhereUniqueInput";
import { CommentCreateNestedManyWithoutReviewsInput } from "./CommentCreateNestedManyWithoutReviewsInput";

export type ReviewCreateInput = {
  title?: string | null;
  content?: string | null;
  rating?: number | null;
  aiTool?: AiToolWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutReviewsInput;
};
