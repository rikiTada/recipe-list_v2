import { getSaveItems, refName } from "@/lib";
import { RecipeList } from "@/types";
import { create } from "zustand";

type recipeStore = {
  recipeData: RecipeList[];
  loading: boolean;
  getRecipeData: () => void;
};

export const useRecipeStore = create<recipeStore>((set, get) => ({
  recipeData: [],
  loading: false,
  getRecipeData: async () => {
    const items = await getSaveItems(refName);
    set({ recipeData: items });
  },
}));
