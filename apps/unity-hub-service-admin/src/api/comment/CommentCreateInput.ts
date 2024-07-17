import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";
import { VolunteerWhereUniqueInput } from "../volunteer/VolunteerWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  story?: StoryWhereUniqueInput | null;
  volunteer?: VolunteerWhereUniqueInput | null;
};
