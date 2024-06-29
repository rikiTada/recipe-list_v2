import { RecipeList } from "@/types";

export type RecipeStore = {
  recipeData: RecipeList[];
  loading: boolean;
  getRecipeData: () => void;
  getRecipeDataById: (id: string) => RecipeList | undefined;
};
