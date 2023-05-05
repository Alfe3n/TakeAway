import React from "react";

import { biography } from "../../data/biography";
import { philosophy } from "../../data/philosophy";
import { entrepreneurship } from "../../data/entrepreneurship";
import { productivity } from "../../data/productivity";
import { money } from "../../data/money";
import { communication } from "../../data/communication";
function list(props) {
  let category = props.category;
  let data = [];
  console.log(category);
  if (category == "Biography") {
    data = biography;
  } else if (category == "Philosophy") {
    data = philosophy;
  } else if (category == "Entrepreneurship") {
    data = entrepreneurship;
  } else if (category == "Productivity") {
    data = productivity;
  } else if (category == "Money") {
    data = money;
  } else {
    data = communication;
  }
  console.log(data);

  return (
    <>
      <h1 className="mt-12 text-4xl font-bold">{`Top 50 in ${category}`}</h1>
      <div className="flex flex-wrap justify-center h-screen my-10">
        {data.map((book) => {
          return (
            <div>
              <p className="p-4 m-2 text-lg rounded-lg bg-slate-300">
                {book.title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default list;
