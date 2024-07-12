import { SortOrder } from "../../util/SortOrder";

export type AiToolOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  category?: SortOrder;
  url?: SortOrder;
  price?: SortOrder;
};
