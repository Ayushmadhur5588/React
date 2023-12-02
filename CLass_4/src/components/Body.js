import RestaurantCard, { withPromoted } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filterList, setfilterList] = useState([]);
  const [val, setVal] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.627981&lng=77.3648567&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setlistOfRestaurants(
      json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilterList(
      json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(
      json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const RestaurantCardPromoted = withPromoted(RestaurantCard);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Internet Connection Lost, Please Check</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="border border-solid border-gray-400 rounded-lg font-light pl-1 m-2"
          placeholder="Search Restaurant..."
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />

        <button
          className="px-2 m-2 shadow-lg bg-blue-500 rounded-md text-white font-light"
          onClick={() => {
            const newList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(val.toLowerCase())
            );
            setfilterList(newList);
          }}
        >
          Search
        </button>

        <button
          className="px-2 m-2 shadow-lg bg-blue-500 rounded-md text-white font-light"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setfilterList(filteredList);
          }}
        >
          Rating 4.0+
        </button>
      </div>

      <div className="flex flex-wrap border-sky-800">
        {filterList.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            {res.info.promoted? (
              <RestaurantCardPromoted data={res} />
            ) : (
              <RestaurantCard data={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
