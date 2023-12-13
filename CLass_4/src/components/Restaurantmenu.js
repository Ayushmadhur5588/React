import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Restaurantmenu_child from "./Restaurantmenu_child";
import RestaurantFooter from "./RestaurantFooter";
import { useState } from "react";

const Restaurantmenu = () => {
  const [showIndex, setshowIndex] = useState(0);
  const p = useParams();
  const resinfo = useRestaurantMenu(p.id);

  if (resinfo === null) return <Shimmer />;
  const { name } = resinfo?.cards[0]?.card?.card?.info;

  const category =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const footer_data =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress" ||
        item?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
 
        {category.map((item, index) => (
          <Restaurantmenu_child 
          key={item?.card?.card?.title} 
          data={item?.card?.card} 
          showItems={index == showIndex? (true) : (false)}
          setshowIndex={() => {
            setshowIndex((prevIndex) =>
              prevIndex === index ? null : index
            );
          }}
          />
        ))}
     
      <div>
      <RestaurantFooter data={footer_data}/>
      </div>
    </div>
  );
};

export default Restaurantmenu;
