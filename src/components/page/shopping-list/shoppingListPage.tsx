"use client";

import {
  createShoppingList,
  useGetAllShoppingList,
} from "@/hooks/swr/shoppingList";
import { Input } from "@/components/ui/input";
import ListItem from "./listItem";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ShoppingListPage() {
  const { data, error, isLoading, mutate } = useGetAllShoppingList();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="container">
      <div className="my-4 flex gap-4">
        {/* TODO
        - input focus時にどのタブへ追加するか選択できるようにする

      */}
        <Input
          placeholder="リストを追加"
          type="text"
          ref={inputRef}
          className="h-8 bg-stone-100 border-0 focus-visible:bg-background placeholder:text-stone-300"
        />
        <div>
          <Button
            onClick={() => {
              if (!inputRef.current?.value) return; //TODO: toastでエラー表示
              createShoppingList({ title: inputRef.current?.value });
              mutate();
            }}
            variant="outline"
            size="icon"
            className="size-8 bg-orange-400 "
          >
            <Plus size={24} className="text-primary-foreground" />
          </Button>
        </div>
      </div>
      {/* TODO
        - listTypeデータからリストを取得して表示する
        - リストクリックで詳細画面に遷移
        - View Transitions API

      */}
      {["スーパー", "日用品", "100均", "その他"].map((name) => (
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{name}</AccordionTrigger>
            <AccordionContent className="h-40 overflow-auto">
              {data?.data.map((item) => (
                <div key={item.id}>
                  <ListItem {...item} />
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
