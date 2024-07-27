"use client";

import {
  createShoppingList,
  useGetAllShoppingList,
} from "@/hooks/swr/shoppingList";
import { Input } from "@/components/ui/input";
import ListItem from "./listItem";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ShoppingListPage() {
  const { data, error, isLoading, mutate } = useGetAllShoppingList();
  const [InputValue, setInputValue] = useState<string>("");

  return (
    <>
      {data?.data.map((item) => (
        <div key={item.id}>
          <ListItem {...item} />
        </div>
      ))}
      <div className="container my-4 flex gap-4">
        <Input type="text" onChange={(e) => setInputValue(e.target.value)} />
        <Button
          onClick={() => {
            createShoppingList({ title: InputValue });
            mutate();
          }}
        >
          追加
        </Button>
      </div>
    </>
  );
}
