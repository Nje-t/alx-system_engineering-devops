import { InputJsonValue } from "../../types";
import { StoryUpdateManyWithoutVolunteersInput } from "./StoryUpdateManyWithoutVolunteersInput";
import { DonationUpdateManyWithoutVolunteersInput } from "./DonationUpdateManyWithoutVolunteersInput";
import { CommentUpdateManyWithoutVolunteersInput } from "./CommentUpdateManyWithoutVolunteersInput";

export type VolunteerUpdateInput = {
  profilePicture?: InputJsonValue;
  bio?: string | null;
  name?: string | null;
  email?: string | null;
  stories?: StoryUpdateManyWithoutVolunteersInput;
  donations?: DonationUpdateManyWithoutVolunteersInput;
  comments?: CommentUpdateManyWithoutVolunteersInput;
};
