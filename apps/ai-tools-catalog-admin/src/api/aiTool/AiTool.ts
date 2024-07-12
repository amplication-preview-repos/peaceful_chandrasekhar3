import { Review } from "../review/Review";

export type AiTool = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  category: string | null;
  url: string | null;
  price: number | null;
  reviews?: Array<Review>;
};
