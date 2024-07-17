export type VolunteerOpportunity = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  location: string | null;
  eventDate: Date | null;
};
