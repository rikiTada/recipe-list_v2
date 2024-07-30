"use client";
import Header from "@/components/layout/header";
import ListPage from "@/components/page/shopping-list/listPage";
import { ShoppingCart } from "lucide-react";

export default function Page({ type }: { type: string }) {
  return (
    <div>
      <Header title="買い物リスト" icon={<ShoppingCart />} />
      <ListPage type={type} />
    </div>
  );
}
