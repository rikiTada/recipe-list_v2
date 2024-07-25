import Header from "@/components/layout/header";
import { HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header title="今日の晩ごはん" icon={<HomeIcon />} />
      <div className="gradient-bg-primary h-screen">TODO: グラデーション</div>
    </>
  );
}
