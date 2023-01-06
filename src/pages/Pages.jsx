import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/contact" element={<Home />} />
      <Route path="/cuisine/:category" element={<Cuisine />} />
      <Route path="/searched/:query" element={<Searched />} />
    </Routes>
  );
}

export default Pages;
