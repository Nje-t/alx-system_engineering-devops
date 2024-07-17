import { Story } from "../story/Story";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  stories?: Array<Story>;
};
