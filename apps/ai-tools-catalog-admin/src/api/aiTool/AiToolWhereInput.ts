import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type AiToolWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  category?: StringNullableFilter;
  url?: StringNullableFilter;
  price?: FloatNullableFilter;
  reviews?: ReviewListRelationFilter;
};
