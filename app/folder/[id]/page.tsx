import DataTable from "@/components/data-table";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { FolderOpen } from "lucide-react";
import Link from "next/link";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <Header title={`/${id}`} icon={<FolderOpen />} />

      <DataTable tag={id} />

      <div className="container">
        <Button variant="outline" asChild>
          <Link href="/folder">戻る</Link>
        </Button>
      </div>
    </>
  );
}
