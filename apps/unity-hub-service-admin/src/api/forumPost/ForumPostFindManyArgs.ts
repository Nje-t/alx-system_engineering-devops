import { ForumPostWhereInput } from "./ForumPostWhereInput";
import { ForumPostOrderByInput } from "./ForumPostOrderByInput";

export type ForumPostFindManyArgs = {
  where?: ForumPostWhereInput;
  orderBy?: Array<ForumPostOrderByInput>;
  skip?: number;
  take?: number;
};
