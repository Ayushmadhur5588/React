import Restaurantmenu_items from "./Restaurantmenu_items";

const Restaurantmenu_child = ({data , showItems, setshowIndex}) => {
  const { itemCards, title } = data;

  return (
    <div>
      <div className="w-7/12 mx-auto mt-4 p-3 border-b-8 border-gray-100">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => {
           setshowIndex();
          }}
        >
          <span className="font-arial font-bold">
            {title} ({itemCards.length})
          </span>
          <span className="font-semibold text-2xl">{showItems ? 'v' : '^'}</span>
        </div>
        {showItems && (<Restaurantmenu_items item={itemCards} />)}
      </div>
    </div>
  );
};

export default Restaurantmenu_child;