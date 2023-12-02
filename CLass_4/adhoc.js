import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";


const Body = () => {
const [listOfRestaurants, setlistOfRestaurants] = useState([]);
const [filterList, setfilterList] = useState([]);


  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />

        <button
          onClick={() => {
            const newList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(val.toLowerCase())
            );
          setfilterList(newList);
          }}
        >Search
        </button>

        <button
          className="button"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setfilterList(filteredList);
          }}
        >Rating 4.0+
        </button>

      </div>

      <div className="res_container ">
        {filterList.map((res) => (
          <RestaurantCard key={res.info.id} data={res} />
        ))}
      </div>
    </div>
  );
};


