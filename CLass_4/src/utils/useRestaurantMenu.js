import { Menu_Api } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [resinfo, setresinfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(Menu_Api + id);
    const json = await data.json();
    setresinfo(json.data);
  };
   return resinfo;
};

export default useRestaurantMenu;
