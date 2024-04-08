import React from "react";
import reactDOM from "react-dom/client";

const root = reactDOM.createRoot(document.getElementById("root"));

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <a href="">Amma's Restaurant</a>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="Body">
      <div className="Search"></div>
      <div className="res-container"></div>
    </div>
  );
};

const AppComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Body />
    </div>
  );
};

root.render(<AppComponent />);
