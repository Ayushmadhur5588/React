import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {


  const [btn, setbtn] = useState("Login");

  useEffect(() => {}, []);

  const os = useOnlineStatus();

  return (
    <div className="flex justify-between bg-gray-100 shadow-lg rounded-lg">
      <img className="py-1 w-36 h-36 rounded-full" src={LOGO_URL} alt="Logo" />
      <div className="flex items-center">
        <ul className="flex  text-lg">
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
