import RestaurantCard, { withPromoted } from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantCard from "../utils/useRestaurantCard";

const Body = () => {
  const [val, setVal] = useState("");
  const { listOfRestaurants, filterList, updatefilterList } =
    useRestaurantCard();
  const RestaurantCardPromoted = withPromoted(RestaurantCard);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Internet Connection Lost, Please Check</h1>;
  }

  if (listOfRestaurants.length == 0) {
    return <Shimmer />;
  }
  return (
    <div className="">
      <div className="filter ">
        <input
          type="text"
          className="border border-solid border-gray-400 rounded-lg font-light pl-1 m-2 "
          placeholder="Search Restaurant..."
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />

        <button
          className="p-2 m-2 rounded-2xl font-normal text-sm border border-gray-300 text-gray-700 overflow-hidden transition-transform hover:scale-90"
          onClick={() => {
            const newList = listOfRestaurants.filter((res) =>
              res?.info?.name?.toLowerCase().includes(val.toLowerCase())
            );
            updatefilterList(newList);
          }}
        >
          Search
        </button>

        <button
          className="p-2 m-2 rounded-2xl font-normal text-sm border border-gray-300 text-gray-700 overflow-hidden transition-transform hover:scale-90"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4
            );
            updatefilterList(filteredList);
          }}
        >
          Ratings 4.O+
        </button>

        <button className="p-2 m-2 rounded-2xl  font-normal text-sm border border-gray-300 text-gray-700 overflow-hidden transition-transform hover:scale-90">
          Pure Veg
        </button>

        <button className="p-2 m-2 rounded-2xl  font-normal text-sm border border-gray-300 text-gray-700 overflow-hidden transition-transform hover:scale-90">
          Sort By 
        </button>

        <button className="p-2 m-2 rounded-2xl  font-normal text-sm border border-gray-300 text-gray-700 overflow-hidden transition-transform hover:scale-90">
          Offers
        </button>

      </div>

      <div className="flex flex-wrap border-sky-800">
        {filterList.map((res) => (
          <Link key={res?.info?.id} to={"/restaurant/" + res?.info?.id}>
            {res?.info?.promoted ? (
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
