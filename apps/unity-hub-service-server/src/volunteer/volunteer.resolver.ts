import * as graphql from "@nestjs/graphql";
import { VolunteerResolverBase } from "./base/volunteer.resolver.base";
import { Volunteer } from "./base/Volunteer";
import { VolunteerService } from "./volunteer.service";

@graphql.Resolver(() => Volunteer)
export class VolunteerResolver extends VolunteerResolverBase {
  constructor(protected readonly service: VolunteerService) {
    super(service);
  }
}
