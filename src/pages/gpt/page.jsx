import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Gpt from "./gptSummary";
import Navbar from "../common/navbar";
export function Page() {
  const location = useLocation();
  let bookName = location.state;
  console.log(bookName);
  console.log("kkk");
  return (
    <div>
      {/* <h1>{bookName}</h1> */}
      <Navbar />
      <Gpt name={bookName} />
    </div>
  );
}
