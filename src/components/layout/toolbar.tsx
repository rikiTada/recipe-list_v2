import { Folders, Home, Search, Settings } from "lucide-react";
import ToolbarButton from "@/components/layout/toolbar-button";

export default function Toolbar() {
  const menuItem = [
    {
      title: "Home",
      icon: <Home />,
      href: "/",
    },
    {
      title: "Folders",
      icon: <Folders />,
      href: "/folder",
    },
    {
      title: "Search",
      icon: <Search />,
      href: "/search",
    },
    {
      title: "Settings",
      icon: <Settings />,
      href: "/settings",
    },
  ];
  return (
    <div className="fixed max-w-[calc(100vw-32px)] bottom-8 flex gap-2 overflow-auto p-2 z-50 left-1/2 -translate-x-1/2 shadow-lg rounded-full bg-muted/70 backdrop-blur border">
      {menuItem.map((item, index) => (
        <ToolbarButton
          key={index}
          href={item.href}
          icon={item.icon}
          title={item.title}
        />
      ))}
    </div>
  );
}
