import { JsonValue } from "type-fest";
import { Category } from "../category/Category";
import { Volunteer } from "../volunteer/Volunteer";
import { Comment } from "../comment/Comment";

export type Story = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  image: JsonValue;
  category?: Category | null;
  volunteer?: Volunteer | null;
  comments?: Array<Comment>;
};
