import { useToggle } from "react-use";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
// import useWindowSize from "react-use/lib/useWindowSize";
import { useReward } from "react-rewards";
import { ShoppingList } from "@prisma/client";

export default function ListItem(item: ShoppingList) {
  // const { width, height } = useWindowSize();
  const { reward, isAnimating } = useReward(item.id, "emoji", {
    emoji: ["🐹", "✨", "🎀", "💩"],
  });

  const [on, toggle] = useToggle(item.isPurchased);

  const handleReward = () => {
    toggle();
    if (!on) reward();
  };

  return (
    <div
      key={item.id}
      className="flex items-center p-2.5 gap-2.5 border-b border-gray-200"
    >
      <Checkbox
        id={item.id}
        className="data-[state=checked]:bg-orange-500 border-gray-400"
        checked={on}
        disabled={isAnimating}
        onClick={handleReward}
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
      <span id={item.id} />
    </div>
  );
}
