import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { VolunteerWhereUniqueInput } from "../volunteer/VolunteerWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type StoryWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  image?: JsonFilter;
  category?: CategoryWhereUniqueInput;
  volunteer?: VolunteerWhereUniqueInput;
  comments?: CommentListRelationFilter;
};
