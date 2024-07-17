import { VolunteerOpportunity as TVolunteerOpportunity } from "../api/volunteerOpportunity/VolunteerOpportunity";

export const VOLUNTEEROPPORTUNITY_TITLE_FIELD = "title";

export const VolunteerOpportunityTitle = (
  record: TVolunteerOpportunity
): string => {
  return record.title?.toString() || String(record.id);
};
