import { SortOrder } from "../../util/SortOrder";

export type ForumPostOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  postedBy?: SortOrder;
};
