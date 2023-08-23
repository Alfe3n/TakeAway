import React from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import Search from "./search";
export function Page1() {
  return (
    <div className="mb-20 ">
      <Navbar />
      <Search />
      {/* <Footer /> */}
    </div>
  );
}
