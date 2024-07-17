import { DonationUpdateManyWithoutFundraisersInput } from "./DonationUpdateManyWithoutFundraisersInput";

export type FundraiserUpdateInput = {
  title?: string | null;
  description?: string | null;
  goalAmount?: number | null;
  currentAmount?: number | null;
  organization?: string | null;
  donations?: DonationUpdateManyWithoutFundraisersInput;
};
