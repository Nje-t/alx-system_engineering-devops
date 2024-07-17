import { StoryUpdateManyWithoutCategoriesInput } from "./StoryUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  description?: string | null;
  stories?: StoryUpdateManyWithoutCategoriesInput;
};
