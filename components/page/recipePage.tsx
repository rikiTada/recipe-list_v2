"use client";

import { useRecipeStore } from "@/store/recipeStore";
import { useEffect } from "react";

export default function RecipePage({ id }: { id: string }) {
  const { recipeData, getRecipeData, getRecipeDataById } = useRecipeStore();

  useEffect(() => {
    if (!recipeData || recipeData.length === 0) {
      getRecipeData();
    }
  }, [recipeData, getRecipeData]);

  const data = getRecipeDataById(id);

  return (
    <div className="container my-8">
      <h1>{data?.title}</h1>
      <p>{data?.timeStamp}</p>
      <p>{data?.tag}</p>
    </div>
  );
}
