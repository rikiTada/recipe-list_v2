import { Checkbox } from "@/components/ui/checkbox";

import { ShoppingList } from "@prisma/client";
import { useState } from "react";

export default function ListItem(item: ShoppingList) {
  const [isChecked, setIsChecked] = useState(item.isPurchased);

  return (
    <div
      key={item.id}
      className="flex items-center justify-between p-4 border-b border-gray-200"
    >
      <div className="flex gap-4 items-center">
        <Checkbox
          checked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
        />
        <p className="text-lg">{item.title}</p>
      </div>
    </div>
  );
}
