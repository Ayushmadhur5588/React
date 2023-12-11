import { fssai_logo } from "../utils/constants";

const RestaurantFooter = ({data}) => {
const [idx1, idx2] = data;

console.log(data);
    return (
        <div className="w-7/12 h-96 mx-auto bg-gray-100 text-center">
         <div className="flex mx-6 py-4 border-b border-gray-600 text-gray-600">
          <img className="w-16 h-10" src={fssai_logo}
          alt="FSSAI"/>
          <p className="p-4 font-light text-sm text-gray-600">{idx1.card.card.text}</p>
         </div>
         <div className="text-left mx-6 mt-2">
         <p className="font-semibold text-gray-500">{idx2.card.card.name}</p>
         <p className="text-gray-500 font-normal">(Outlet:{idx2.card.card.area})</p>
         <p className="mt-2 font-light text-gray-400 text-sm">📍{idx2.card.card.completeAddress}</p>
         </div>
        </div>
    )
}

export default RestaurantFooter;