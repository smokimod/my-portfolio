import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuItemsStyles/PortfolioStyles.css";
export const Portfolio = () => {
  const projects = [1, 2, 3, 4, 5, 6].map((_, i) => {
    return (
      <div className="portfolio_cont_item" key={i}>
        <div>
          <img
            className="img_logo"
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
            alt="logo"
          ></img>
        </div>

        <div className="portfolio_cont_itemInside">
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut
          </p>
          <NavLink>Live Demo</NavLink>
        </div>
      </div>
    );
  });
  return (
    <div className="portfolio_bg">
      <div className="portfolio_content">
        <div className="portfolio_spread_items">{projects}</div>
      </div>
    </div>
  );
};
