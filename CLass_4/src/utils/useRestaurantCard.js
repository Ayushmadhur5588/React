import { useState, useEffect } from "react";

const useRestaurantCard = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filterList, setfilterList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.627981&lng=77.3648567&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
  

    setlistOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const updatefilterList = (newList) => {
    setfilterList(newList);
  }
  
  return { listOfRestaurants, filterList , updatefilterList};
};

export default useRestaurantCard;
