import { Volunteer } from "../volunteer/Volunteer";
import { Fundraiser } from "../fundraiser/Fundraiser";

export type Donation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  date: Date | null;
  volunteer?: Volunteer | null;
  fundraiser?: Fundraiser | null;
};
