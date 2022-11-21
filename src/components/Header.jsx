import React from "react";
import { useState } from "react";
import Menu from "./Menu";
import "./style.css";

export const Header = ({ setBackground }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <nav className="ui black inverted massive fixed menu">
        <header className="header item">
          <button
            className="ui button black"
            onClick={() => setModalActive(true)}
          >
            <i className="arrow circle left icon"></i>
            Profile
          </button>
        </header>
      </nav>
      <Menu
        active={modalActive}
        setActive={setModalActive}
        setBackground={setBackground}
      />
    </>
  );
};
