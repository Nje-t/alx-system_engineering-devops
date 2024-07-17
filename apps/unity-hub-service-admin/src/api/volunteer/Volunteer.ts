import { JsonValue } from "type-fest";
import { Story } from "../story/Story";
import { Donation } from "../donation/Donation";
import { Comment } from "../comment/Comment";

export type Volunteer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  profilePicture: JsonValue;
  bio: string | null;
  name: string | null;
  email: string | null;
  stories?: Array<Story>;
  donations?: Array<Donation>;
  comments?: Array<Comment>;
};
