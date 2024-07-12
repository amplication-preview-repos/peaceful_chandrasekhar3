import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  user?: UserWhereUniqueInput | null;
  review?: ReviewWhereUniqueInput | null;
};
