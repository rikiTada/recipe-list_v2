import { useMemo } from "react";
import { useRecipeStore } from "@/store/recipeStore";
import { getSaveItems, refName } from "@/lib";

export const useRecipeData = async () => {
  const { recipeData, setRecipeData } = useRecipeStore();
  useMemo(async () => {
    if (recipeData?.length === 0) {
      const items = await getSaveItems(refName);
      setRecipeData(items);
    }
  }, [recipeData, setRecipeData]);
};
