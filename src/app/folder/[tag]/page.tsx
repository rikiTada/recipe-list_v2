import DataTable from "@/components/data-table";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { FolderOpen } from "lucide-react";
import Link from "next/link";

export default function Page({ params: { tag } }: { params: { tag: string } }) {
  return (
    <>
      <Header title={`./ ${tag}`} icon={<FolderOpen />} />

      <DataTable tag={tag} />

      <div className="container">
        <Button variant="outline" asChild>
          <Link href="/folder">戻る</Link>
        </Button>
      </div>
    </>
  );
}
