import { User } from "../user/User";
import { Review } from "../review/Review";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  user?: User | null;
  review?: Review | null;
};
