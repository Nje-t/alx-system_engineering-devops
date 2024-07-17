import { SortOrder } from "../../util/SortOrder";

export type DonationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  date?: SortOrder;
  volunteerId?: SortOrder;
  fundraiserId?: SortOrder;
};
