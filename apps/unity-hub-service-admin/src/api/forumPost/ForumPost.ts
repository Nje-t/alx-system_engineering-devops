export type ForumPost = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  title: string | null;
  content: string | null;
  postedBy: string | null;
};
