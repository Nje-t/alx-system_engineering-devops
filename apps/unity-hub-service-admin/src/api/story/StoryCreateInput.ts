import { InputJsonValue } from "../../types";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { VolunteerWhereUniqueInput } from "../volunteer/VolunteerWhereUniqueInput";
import { CommentCreateNestedManyWithoutStoriesInput } from "./CommentCreateNestedManyWithoutStoriesInput";

export type StoryCreateInput = {
  title?: string | null;
  content?: string | null;
  image?: InputJsonValue;
  category?: CategoryWhereUniqueInput | null;
  volunteer?: VolunteerWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutStoriesInput;
};
