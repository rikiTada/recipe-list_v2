import DataTable from "@/components/data-table";
import Header from "@/components/layout/header";
import TagList from "@/components/page/tagListPage";
import { Folder } from "lucide-react";

export default function Page() {
  return (
    <>
      <Header title="レシピ一覧" icon={<Folder />} />
      <div className="container my-8">
        <TagList />
        {/* <DataTable /> */}

        <div className="h-16"></div>
      </div>
    </>
  );
}
