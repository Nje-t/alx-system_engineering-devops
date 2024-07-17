import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";
import { VolunteerWhereUniqueInput } from "../volunteer/VolunteerWhereUniqueInput";

export type CommentWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  story?: StoryWhereUniqueInput;
  volunteer?: VolunteerWhereUniqueInput;
};
