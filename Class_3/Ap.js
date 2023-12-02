import React from "react";
import ReactDOM from "react-dom/client";

const Header = (
  <div className="title">
    <header className="h">
      <img src="logo.jpeg" id="img" />

      <input type="text" placeholder="Search Resturant" />
      <button>Search</button>

      <img src="icon.png" />
    </header>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Header);
