import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { data } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    data?.info;

  return (
    <div className="m-4 p-1 max-w-[250px] hover:border-b-2 border-sky-500 transition duration-500">
      <img
        className="rounded-lg shadow-md"
        src={CDN_URL + cloudinaryImageId}
        alt="res_image"
      />

      <h4 className="font-serif text-2xl font-medium  my-2">{name}</h4>
      <h4 className="text-gray-500 font-light">{cuisines.join(", ")}</h4>
      <br />

      <div className="flex text-sm">
        <h4 className="text-gray-500 font-light mr-2">⭑{avgRating}</h4>
        <h4 className="text-gray-500 font-light mr-2">
          🕒 {sla?.deliveryTime}mins
        </h4>
        <h4 className="text-gray-500 font-light">◦{costForTwo}</h4>
      </div>
    </div>
  );
};

export const withPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-1 ml-4 bg-orange-400 text-white rounded-lg font-light">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
