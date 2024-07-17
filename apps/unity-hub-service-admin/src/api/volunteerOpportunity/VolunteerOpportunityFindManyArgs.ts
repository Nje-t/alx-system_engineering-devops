import { VolunteerOpportunityWhereInput } from "./VolunteerOpportunityWhereInput";
import { VolunteerOpportunityOrderByInput } from "./VolunteerOpportunityOrderByInput";

export type VolunteerOpportunityFindManyArgs = {
  where?: VolunteerOpportunityWhereInput;
  orderBy?: Array<VolunteerOpportunityOrderByInput>;
  skip?: number;
  take?: number;
};
