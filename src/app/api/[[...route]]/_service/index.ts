import {
  createUser,
  getAllUser,
} from "@/app/api/[[...route]]/_service/userService";
import {
  createShoppingList,
  getAllShoppingList,
} from "@/app/api/[[...route]]/_service/shoppingListService";

export const db = {
  user: { getAllUser, createUser },
  shoppingList: { createShoppingList, getAllShoppingList },
};
