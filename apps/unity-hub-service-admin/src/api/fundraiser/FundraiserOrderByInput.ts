import { SortOrder } from "../../util/SortOrder";

export type FundraiserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  goalAmount?: SortOrder;
  currentAmount?: SortOrder;
  organization?: SortOrder;
};
