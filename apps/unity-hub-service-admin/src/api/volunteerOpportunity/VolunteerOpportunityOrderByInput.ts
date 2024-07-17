import { SortOrder } from "../../util/SortOrder";

export type VolunteerOpportunityOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  location?: SortOrder;
  eventDate?: SortOrder;
};
