import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ForumPostWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  postedBy?: StringNullableFilter;
};
