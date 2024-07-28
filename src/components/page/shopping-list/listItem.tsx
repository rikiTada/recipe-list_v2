import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

import { ShoppingList } from "@prisma/client";
import { useState } from "react";

export default function ListItem(item: ShoppingList) {
  const { width, height } = useWindowSize();
  const [isChecked, setIsChecked] = useState(item.isPurchased);

  return (
    <div
      key={item.id}
      className="flex items-center p-2.5 gap-2.5 border-b border-gray-200"
    >
      {isChecked && <Confetti width={width} height={height} recycle={false} />}

      <Checkbox
        id={item.id}
        className="data-[state=checked]:bg-orange-500 border-gray-400"
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
      />
      <label
        htmlFor={item.id}
        className={`text-sm ${!isChecked ? "" : "text-zinc-400 line-through"}`}
      >
        {item.title}
      </label>
    </div>
  );
}
