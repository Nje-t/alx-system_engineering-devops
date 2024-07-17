export type Role = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  permissions?: "Option1" | null;
};
