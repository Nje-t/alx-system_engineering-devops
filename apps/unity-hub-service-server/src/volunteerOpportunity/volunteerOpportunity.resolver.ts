import * as graphql from "@nestjs/graphql";
import { VolunteerOpportunityResolverBase } from "./base/volunteerOpportunity.resolver.base";
import { VolunteerOpportunity } from "./base/VolunteerOpportunity";
import { VolunteerOpportunityService } from "./volunteerOpportunity.service";

@graphql.Resolver(() => VolunteerOpportunity)
export class VolunteerOpportunityResolver extends VolunteerOpportunityResolverBase {
  constructor(protected readonly service: VolunteerOpportunityService) {
    super(service);
  }
}
