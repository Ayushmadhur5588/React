import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setbtn] = useState("Login");
  const os = useOnlineStatus();

  return (
    <div className="mx-8 h-22 flex justify-between rounded-lg bg-gray-50">
     <div className="ml-8 py-1 overflow-hidden transition-transform hover:scale-105">
     <img
        className="w-20 h-20 rounded-full "
        src={LOGO_URL}
        alt="Logo"
      />
      </div>
      <div className="flex items-center mr-6">
        <ul className="flex text-base font-medium text-gray-900 ">
          <li className="px-6  hover:text-orange-400 transition-transform hover:scale-110">OnlineStatus : {os ? "✅" : "❌"}</li>
          <li className="px-6  hover:text-orange-400 overflow-hidden transition-transform hover:scale-110">
            <Link to="/">Home</Link>
          </li>
          <li className="px-6  hover:text-orange-400 transition-transform hover:scale-110">
            <Link to="/about">About</Link>
          </li>

          <li className="px-6 hover:text-orange-400 transition-transform hover:scale-110">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4  hover:text-orange-400 transition-transform hover:scale-110">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="signIn px-6  hover:text-orange-400 transition-transform hover:scale-110"
            onClick={() => {
              btn === "Login" ? setbtn("LogOut") : setbtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
