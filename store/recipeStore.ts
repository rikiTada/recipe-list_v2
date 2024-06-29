import { getSaveItems, refName } from "@/lib";
import { RecipeStore } from "@/types/store";
import { create } from "zustand";

export const useRecipeStore = create<RecipeStore>((set, get) => ({
  recipeData: [],
  loading: false,
  getRecipeData: async () => {
    const items = await getSaveItems(refName);
    set({ recipeData: items });
  },
}));
