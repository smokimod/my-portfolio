import React from "react";
import "./MenuItemsStyles/HomeStyles.css";

export const Home = () => {
  return (
    <div className="background home_bg">
      <div className="home_content">
        <div className="home_logo">
          <img
            className="ui small circular image"
            src={require("../images/photo-output.png")}
            alt="img"
          />
        </div>
        <div className="home_dev_profile">
          <span>Arseni Shaikov</span>
          <h2>Front-end developer</h2>
        </div>
      </div>
    </div>
  );
};
