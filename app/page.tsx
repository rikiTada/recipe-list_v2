import Header from "@/components/layout/header";
import { refName, getSaveItems } from "@/lib";
import { HomeIcon } from "lucide-react";

export default async function Home() {
  return (
    <>
      <Header title="今日の晩ごはん" icon={<HomeIcon />} />
    </>
  );
}
