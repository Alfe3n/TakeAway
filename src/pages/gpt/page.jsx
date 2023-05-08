import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Gpt from "./gptSummary";
export function Page() {
  const location = useLocation();
  let bookName = location.state;
  console.log(bookName);
  return (
    <div>
      {/* <h1>{bookName}</h1> */}
      <Gpt name={bookName} />
    </div>
  );
}
