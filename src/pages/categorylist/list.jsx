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
    <div className="ml-6">
      <h1 className=" text-[#03314B] mt-8 mb-8 text-xl font-bold md:text-4xl md:mt">{`Top 50 in ${category}`}</h1>
      <div className="flex flex-wrap justify-start h-auto mb-10  gap-x-5 gap-y-2 md:gap-y-8">
        {data.map((book) => {
          return (
            <div className="h-auto bg-[#F1F6F4] border-0 rounded-lg">
              <p className="p-2 text-sm text-[#03314B] md:text-lg">
                {book.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default list;
