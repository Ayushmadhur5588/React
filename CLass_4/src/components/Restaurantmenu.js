import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Restaurantmenu = () => {

  const p = useParams();
  const resinfo = useRestaurantMenu(p.id);
  
  if (resinfo === null) return <Shimmer />;

  const { name } = resinfo.cards[0].card.card.info;

  const { itemCards } =
    resinfo.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <h3>Recommended</h3>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurantmenu;
