"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ToolbarButton({
  href,
  icon,
  title,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
}) {
  const pathname = usePathname();
  const IconSlot = Slot as LucideIcon;

  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      className={
        (cn("rounded-full"),
        href === pathname
          ? "ring-1 ring-orange-300 rounded-full"
          : "rounded-full")
      }
      asChild
    >
      <Link href={href}>
        <IconSlot size={10}>{icon}</IconSlot>
        <span className="sr-only">{title}</span>
      </Link>
    </Button>
  );
}
