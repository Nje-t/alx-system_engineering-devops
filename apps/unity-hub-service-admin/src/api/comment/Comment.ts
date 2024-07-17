import { Story } from "../story/Story";
import { Volunteer } from "../volunteer/Volunteer";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  story?: Story | null;
  volunteer?: Volunteer | null;
};
