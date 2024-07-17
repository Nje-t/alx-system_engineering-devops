import { VolunteerWhereInput } from "./VolunteerWhereInput";
import { VolunteerOrderByInput } from "./VolunteerOrderByInput";

export type VolunteerFindManyArgs = {
  where?: VolunteerWhereInput;
  orderBy?: Array<VolunteerOrderByInput>;
  skip?: number;
  take?: number;
};
