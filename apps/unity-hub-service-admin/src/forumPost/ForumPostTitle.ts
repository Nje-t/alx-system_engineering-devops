import { ForumPost as TForumPost } from "../api/forumPost/ForumPost";

export const FORUMPOST_TITLE_FIELD = "title";

export const ForumPostTitle = (record: TForumPost): string => {
  return record.title?.toString() || String(record.id);
};
