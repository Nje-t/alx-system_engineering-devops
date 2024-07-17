import { StoryCreateNestedManyWithoutCategoriesInput } from "./StoryCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  description?: string | null;
  stories?: StoryCreateNestedManyWithoutCategoriesInput;
};
