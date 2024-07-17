import { InputJsonValue } from "../../types";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { VolunteerWhereUniqueInput } from "../volunteer/VolunteerWhereUniqueInput";
import { CommentUpdateManyWithoutStoriesInput } from "./CommentUpdateManyWithoutStoriesInput";

export type StoryUpdateInput = {
  title?: string | null;
  content?: string | null;
  image?: InputJsonValue;
  category?: CategoryWhereUniqueInput | null;
  volunteer?: VolunteerWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutStoriesInput;
};
