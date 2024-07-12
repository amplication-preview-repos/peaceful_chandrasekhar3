import { InputJsonValue } from "../../types";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  comments?: CommentUpdateManyWithoutUsersInput;
};
