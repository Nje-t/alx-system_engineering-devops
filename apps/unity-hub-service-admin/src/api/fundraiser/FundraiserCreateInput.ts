import { DonationCreateNestedManyWithoutFundraisersInput } from "./DonationCreateNestedManyWithoutFundraisersInput";

export type FundraiserCreateInput = {
  title?: string | null;
  description?: string | null;
  goalAmount?: number | null;
  currentAmount?: number | null;
  organization?: string | null;
  donations?: DonationCreateNestedManyWithoutFundraisersInput;
};
