import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AiToolWhereUniqueInput } from "../aiTool/AiToolWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type ReviewWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  rating?: FloatNullableFilter;
  aiTool?: AiToolWhereUniqueInput;
  comments?: CommentListRelationFilter;
};
