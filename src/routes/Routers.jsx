import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Collection, Blog } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default Routers;
