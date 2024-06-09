import { RecipeList } from "@/types";
import { create } from "zustand";

type recipeStore = {
  recipeData: RecipeList[];
  setRecipeData: (data: RecipeList[]) => void;
};

export const useRecipeStore = create<recipeStore>((set, get) => ({
  recipeData: [],
  setRecipeData: (data) => set({ recipeData: data }),
}));
