import Restaurantmenu_items from "./Restaurantmenu_items";
import { useState } from "react";

const Restaurantmenu_child = (props) => {
  const { itemCards, title } = props?.data;
  const [itemCard, setitemCard] = useState(itemCards);
  let flag = true;

  return (
    <div>
      <div className="w-7/12 mx-auto mt-4 p-3 border-b-8 border-gray-100">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => {
            if (itemCard.length > 0) {
              setitemCard([]);
            } else {
              setitemCard(itemCards);
            }
          }}
        >
          <span className="font-arial font-bold">
            {title} ({itemCards.length})
          </span>
          <span className="font-semibold text-2xl">^</span>
        </div>
        <Restaurantmenu_items item={itemCard} />
      </div>
    </div>
  );
};

export default Restaurantmenu_child;
