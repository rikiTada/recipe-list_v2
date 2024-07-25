"use client";

import { useRecipeStore } from "@/store/recipeStore";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function TagList() {
  const { recipeData, getRecipeData, getTags } = useRecipeStore();
  useEffect(() => {
    if (!recipeData || recipeData.length === 0) {
      getRecipeData();
    }
  }, [recipeData, getRecipeData]);

  const tags = getTags();

  return (
    <>
      <p>tag一覧</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>
            <Button asChild variant="outline">
              <Link href={`/folder/${tag}`}>{tag}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}
