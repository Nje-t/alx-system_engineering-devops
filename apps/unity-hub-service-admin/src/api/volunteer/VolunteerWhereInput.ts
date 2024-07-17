import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StoryListRelationFilter } from "../story/StoryListRelationFilter";
import { DonationListRelationFilter } from "../donation/DonationListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type VolunteerWhereInput = {
  id?: StringFilter;
  profilePicture?: JsonFilter;
  bio?: StringNullableFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  stories?: StoryListRelationFilter;
  donations?: DonationListRelationFilter;
  comments?: CommentListRelationFilter;
};
