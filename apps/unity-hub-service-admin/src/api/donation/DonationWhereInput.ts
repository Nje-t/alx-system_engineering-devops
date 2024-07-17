import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { VolunteerWhereUniqueInput } from "../volunteer/VolunteerWhereUniqueInput";
import { FundraiserWhereUniqueInput } from "../fundraiser/FundraiserWhereUniqueInput";

export type DonationWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  volunteer?: VolunteerWhereUniqueInput;
  fundraiser?: FundraiserWhereUniqueInput;
};
