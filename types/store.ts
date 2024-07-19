import { RecipeList } from "@/types/recipe";

export type RecipeStore = {
  recipeData: RecipeList[];
  loading: boolean;
  getRecipeData: () => void;
  getRecipeDataById: (id: string) => RecipeList | undefined;
  getTags: () => string[];
  getRecipeDataByTag: (tag: string) => RecipeList[];
};
