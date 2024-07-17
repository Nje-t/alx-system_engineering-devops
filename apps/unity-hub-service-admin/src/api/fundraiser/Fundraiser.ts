import { Donation } from "../donation/Donation";

export type Fundraiser = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  goalAmount: number | null;
  currentAmount: number | null;
  organization: string | null;
  donations?: Array<Donation>;
};
