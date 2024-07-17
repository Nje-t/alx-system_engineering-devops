import { FundraiserWhereInput } from "./FundraiserWhereInput";
import { FundraiserOrderByInput } from "./FundraiserOrderByInput";

export type FundraiserFindManyArgs = {
  where?: FundraiserWhereInput;
  orderBy?: Array<FundraiserOrderByInput>;
  skip?: number;
  take?: number;
};
