import { VolunteerWhereUniqueInput } from "../volunteer/VolunteerWhereUniqueInput";
import { FundraiserWhereUniqueInput } from "../fundraiser/FundraiserWhereUniqueInput";

export type DonationUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  volunteer?: VolunteerWhereUniqueInput | null;
  fundraiser?: FundraiserWhereUniqueInput | null;
};
