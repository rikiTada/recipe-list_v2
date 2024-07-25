import { ModeToggle } from "@/components/layout/mode-toggle";
import { Slot } from "@radix-ui/react-slot";
import { LucideIcon } from "lucide-react";

export default function Header({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  const IconSlot = Slot as LucideIcon;

  return (
    <header className="container border-b border-zinc-400/10 mx-auto flex h-16 items-center justify-between">
      <div className="flex items-center text-primary gap-4">
        <IconSlot size={40} className="hidden md:block">
          {icon}
        </IconSlot>
        <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      </div>
      <ModeToggle />
    </header>
  );
}
