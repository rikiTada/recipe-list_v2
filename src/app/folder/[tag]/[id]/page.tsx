import Header from "@/components/layout/header";
import RecipePage from "@/components/page/recipePage";
import { Button } from "@/components/ui/button";
import { FolderOpen } from "lucide-react";
import Link from "next/link";

export default function Page({
  params: { tag, id },
}: {
  params: { tag: string; id: string };
}) {
  console.log(tag, id);
  return (
    <>
      <Header title={`./ ${tag}/ ...`} icon={<FolderOpen />} />
      <div className="container">
        <RecipePage id={id} />

        <Button variant="outline" asChild>
          <Link href={`/folder/${tag}`}>戻る</Link>
        </Button>
      </div>
    </>
  );
}
