import * as graphql from "@nestjs/graphql";
import { FundraiserResolverBase } from "./base/fundraiser.resolver.base";
import { Fundraiser } from "./base/Fundraiser";
import { FundraiserService } from "./fundraiser.service";

@graphql.Resolver(() => Fundraiser)
export class FundraiserResolver extends FundraiserResolverBase {
  constructor(protected readonly service: FundraiserService) {
    super(service);
  }
}
