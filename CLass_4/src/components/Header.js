import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setbtn] = useState("Login");
  const os = useOnlineStatus();

  return (
    <div className="h-24 flex justify-between bg-gray-100 shadow-lg rounded-lg">
      <img className="ml-6 py-1 w-24 h-24 rounded-full" src={LOGO_URL} alt="Logo" />
      <div className="flex items-center mr-6">
        <ul className="flex text-lg font-medium">
          <li className="px-4">
            OnlineStatus : {os? "✅" : "❌"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="signIn pr-1"
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
