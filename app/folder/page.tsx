import DataTable from "@/components/data-table";
import Header from "@/components/layout/header";
import { Folder } from "lucide-react";

export default function Page() {
  return (
    <>
      <Header title="レシピ一覧" icon={<Folder />} />
      <div className="container my-8">
        <DataTable />
        <div className="container h-16"></div>
      </div>
    </>
  );
}
