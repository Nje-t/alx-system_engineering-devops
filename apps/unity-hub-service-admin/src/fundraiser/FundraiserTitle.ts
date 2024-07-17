import { Fundraiser as TFundraiser } from "../api/fundraiser/Fundraiser";

export const FUNDRAISER_TITLE_FIELD = "title";

export const FundraiserTitle = (record: TFundraiser): string => {
  return record.title?.toString() || String(record.id);
};
