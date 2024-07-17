import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DonationListRelationFilter } from "../donation/DonationListRelationFilter";

export type FundraiserWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  goalAmount?: FloatNullableFilter;
  currentAmount?: FloatNullableFilter;
  organization?: StringNullableFilter;
  donations?: DonationListRelationFilter;
};
