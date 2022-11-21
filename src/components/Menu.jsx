import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Menu = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <section
        className={active ? "modal_content active" : "modal_content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="menu_sector">
          <div>
            <img
              className="ui small circular image"
              src={require("../components/images/photo-output.png")}
              alt="img"
            />
            <hr />
          </div>
          <ul>
            <NavLink to="/" className="navLink">
              <i className="large home icon icon_space"></i>
              Home
            </NavLink>
            <NavLink to="/resume" className="navLink">
              <i className="large id badge outline icon icon_space"></i>
              Resume
            </NavLink>
            <NavLink to="portfolio" className="navLink">
              <i className="large keyboard outline icon icon_space"></i>
              Portfolio
            </NavLink>
            <NavLink to="/contacts" className="navLink">
              <i className="large address  card outline icon icon_space"></i>
              Contacts
            </NavLink>
          </ul>
          <footer>
            <a target="_blank" href="https://github.com/smokimod">
              <i className="github yellow big icon "></i>
            </a>
            <a target="_blank" href="https://t.me/smokimod">
              <i className="telegram yellow big icon"></i>
            </a>
            <a target="_blank" href="https://vk.com/id133848026">
              <i className="vk yellow big icon"></i>
            </a>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Menu;
