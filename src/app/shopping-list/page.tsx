"use client";
import Header from "@/components/layout/header";
import ShoppingListPage from "@/components/page/shopping-list/shoppingListPage";
import { ShoppingCart } from "lucide-react";

export default function Page() {
  return (
    <div>
      <Header title="買い物リスト" icon={<ShoppingCart />} />
      <ShoppingListPage />
    </div>
  );
}
