import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  user?: UserWhereUniqueInput | null;
  review?: ReviewWhereUniqueInput | null;
};
