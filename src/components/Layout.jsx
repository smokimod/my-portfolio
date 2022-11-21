import React, { useState } from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import "./style.css";

export const Layout = () => {
  const [modalActive, setModalActive] = useState(true);
  return (
    <main>
      <Header active={modalActive} setActive={setModalActive} />
      <div className="outlet-container ">
        <Outlet />
      </div>
    </main>
  );
};
