import {
  createUser,
  getAllUser,
} from "@/app/api/[[...route]]/_service/userService";

export const db = {
  user: { getAllUser, createUser },
};
