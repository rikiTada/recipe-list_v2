import Header from "@/components/layout/header";
import RecipePage from "@/components/page/recipePage";
import { Button } from "@/components/ui/button";
import { FolderOpen } from "lucide-react";
import Link from "next/link";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <Header title={`Folder /`} icon={<FolderOpen />} />
      <div className="container">
        <RecipePage id={id} />

        <Button variant="outline" asChild>
          <Link href="/folder">戻る</Link>
        </Button>
      </div>
    </>
  );
}
