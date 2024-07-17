import { InputJsonValue } from "../../types";
import { StoryCreateNestedManyWithoutVolunteersInput } from "./StoryCreateNestedManyWithoutVolunteersInput";
import { DonationCreateNestedManyWithoutVolunteersInput } from "./DonationCreateNestedManyWithoutVolunteersInput";
import { CommentCreateNestedManyWithoutVolunteersInput } from "./CommentCreateNestedManyWithoutVolunteersInput";

export type VolunteerCreateInput = {
  profilePicture?: InputJsonValue;
  bio?: string | null;
  name?: string | null;
  email?: string | null;
  stories?: StoryCreateNestedManyWithoutVolunteersInput;
  donations?: DonationCreateNestedManyWithoutVolunteersInput;
  comments?: CommentCreateNestedManyWithoutVolunteersInput;
};
