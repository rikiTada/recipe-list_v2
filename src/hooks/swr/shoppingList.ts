import { Prisma, ShoppingList } from "@prisma/client";
import useSWR from "swr";

const getAllShoppingList = async (
  key: string
): Promise<{ data: ShoppingList[] }> => {
  return await fetch(key).then((res) => res.json());
};

export const createShoppingList = async (
  data: Prisma.ShoppingListCreateInput
): Promise<{ data: ShoppingList }> => {
  return await fetch("/api/shopping-list", {
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const useGetAllShoppingList = () => {
  const { data, error, isLoading, mutate } = useSWR<{ data: ShoppingList[] }>(
    "/api/shopping-list",
    getAllShoppingList
  );

  return { data, error, isLoading, mutate };
};
