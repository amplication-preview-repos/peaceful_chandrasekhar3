import { AiTool } from "../aiTool/AiTool";
import { Comment } from "../comment/Comment";

export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  rating: number | null;
  aiTool?: AiTool | null;
  comments?: Array<Comment>;
};
