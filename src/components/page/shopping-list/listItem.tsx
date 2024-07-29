import { useToggle } from "react-use";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

import { ShoppingList } from "@prisma/client";

export default function ListItem(item: ShoppingList) {
  const { width, height } = useWindowSize();
  const [on, toggle] = useToggle(item.isPurchased);

  return (
    <div
      key={item.id}
      className="flex items-center p-2.5 gap-2.5 border-b border-gray-200"
    >
      <Checkbox
        id={item.id}
        className="data-[state=checked]:bg-orange-500 border-gray-400"
        checked={on}
        onClick={toggle}
      />
      <label
        htmlFor={item.id}
        className={`text-sm ${!on ? "" : "text-zinc-400 line-through"}`}
      >
        {item.title}
      </label>
      {/* TODO
        - react-rewardsを使ってみる(https://github.com/thedevelobear/react-rewards)
          - https://zenn.dev/taigakiyokawa/articles/20221201-react-rewards-interval
      */}
      {on && (
        <Confetti width={width} height={height} gravity={0.4} recycle={false} />
      )}
    </div>
  );
}
