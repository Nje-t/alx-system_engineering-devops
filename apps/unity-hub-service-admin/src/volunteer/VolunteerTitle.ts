import { Volunteer as TVolunteer } from "../api/volunteer/Volunteer";

export const VOLUNTEER_TITLE_FIELD = "name";

export const VolunteerTitle = (record: TVolunteer): string => {
  return record.name?.toString() || String(record.id);
};
