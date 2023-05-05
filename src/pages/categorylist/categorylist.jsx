import React from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import List from "./list";
import { useLocation } from "react-router-dom";

export function Categorylist() {
  const location = useLocation();
  let cat = location.state;
  console.log(cat);
  return (
    <div>
      <Navbar />
      <List category={cat[0]} />
      <Footer />
    </div>
  );
}
