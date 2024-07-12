import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type CommentWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  review?: ReviewWhereUniqueInput;
};
