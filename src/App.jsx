import React from "react";
import { Routes, Route } from "react-router-dom";
import { Resume } from "./components/MenuItems/Resume";
import { Portfolio } from "./components/MenuItems/Portfolio.jsx";
import { Contacts } from "./components/MenuItems/Contacts";
import { Home } from "./components/MenuItems/Home";
import { Layout } from "./components/Layout";
import "./components/style.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="resume" element={<Resume />}></Route>
        <Route path="portfolio" element={<Portfolio />}></Route>
        <Route path="contacts" element={<Contacts />}></Route>
      </Route>
    </Routes>
  );
};
export default App;
