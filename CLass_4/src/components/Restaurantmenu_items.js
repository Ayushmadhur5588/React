import { veg_logo, Item_Image, non_veg_logo } from "../utils/constants";

const Restaurantmenu_items = ({ item }) => {

  return (
    <div>
      {item?.map((i, index) => (
        <div key={i.card.info.id}>
          <div className="flex justify-between">
            <div className="text-left w-10/12">
              <div className="h-4 w-4 mt-6">
                {i?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                  <img src={veg_logo} alt="veg_logo" />
                ) : (
                  <img src={non_veg_logo} alt="veg_logo" />
                )}
              </div>

              <div>
                <span>{i.card.info.name}</span>
              </div>

              <div>
                <span className="font-light">
                  ₹{i.card.info.price / 100 || i.card.info.defaultPrice / 100}
                </span>
              </div>

              {index === item.length - 1 ? (
                <div className="mt-3 mb-12 font-extralight text-sm text-gray-500 ">
                  <span>{i.card.info.description}</span>
                </div>
              ) : (
                <div className="mt-3 font-extralight text-sm text-gray-500 ">
                  <span>{i.card.info.description}</span>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-col items-center">
              {i.card.info.imageId ? (
                <button
                  className="w-20 h-8 absolute mt-16 mx-auto rounded-lg 
               font-semibold text-sm bg-green-600 text-white hover:shadow-md hover:border-2 border-gray-300"
                >
                  ADD +
                </button>
              ) : (
                <button
                  className="w-20 h-8 mt-16 mx-3 rounded-lg 
               font-semibold text-sm bg-green-600 text-white hover:shadow-md hover:border-2 border-gray-300"
                >
                  ADD +
                </button>
              )}
              {i.card.info.imageId && (
                <img
                  className="w-28 h-24 rounded-md bg-none"
                  src={Item_Image + i.card.info.imageId}
                  alt="img"
                />
              )}
            </div>
          </div>
          {index < item.length - 1 && (
            <div className="border-b border-gray-200 mt-6"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Restaurantmenu_items;
