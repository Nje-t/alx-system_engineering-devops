import { SortOrder } from "../../util/SortOrder";

export type VolunteerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  profilePicture?: SortOrder;
  bio?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
};
