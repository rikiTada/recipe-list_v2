"use client";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { useRecipeData } from "@/hooks";
import { useRecipeStore } from "@/store/recipeStore";
import { FolderOpen } from "lucide-react";
import Link from "next/link";

export default function Page({ params: { id } }: { params: { id: string } }) {
  const { recipeData } = useRecipeStore();
  useRecipeData();

  const data = recipeData.filter((item) => item.id === id)[0];

  return (
    <>
      <Header title={`Folder / ${data?.title}`} icon={<FolderOpen />} />
      <div className="container my-8">
        <h1>{data?.title}</h1>

        <Button variant="outline" asChild>
          <Link href="/folder">戻る</Link>
        </Button>
      </div>
    </>
  );
}
