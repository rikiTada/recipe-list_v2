"use client";

import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useRecipeStore } from "@/store/recipeStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function DataTable() {
  const { recipeData, getRecipeData } = useRecipeStore();

  useEffect(() => {
    if (!recipeData || recipeData.length === 0) {
      getRecipeData();
    }
  }, [recipeData, getRecipeData]);

  return (
    <div>
      <Table>
        <TableCaption>- レシピ 一覧 -</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">登録日</TableHead>
            <TableHead>タイトル</TableHead>
            <TableHead className="min-w-[100px]">イメージ</TableHead>
            <TableHead>タグ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recipeData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.timeStamp}</TableCell>
              <TableCell>
                <Link href={`/folder/${item.id}`}>{item.title}</Link>
              </TableCell>
              <TableCell>
                <Image
                  unoptimized
                  width={50}
                  height={50}
                  alt="recipe image"
                  src={item.imgPath}
                />
              </TableCell>
              <TableCell className="">
                {item.tag.map((tag) => (
                  <div key={tag}>{tag}</div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
