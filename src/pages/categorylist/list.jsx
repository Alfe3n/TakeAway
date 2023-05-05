import React from "react";

import { biography } from "../../data/biography";
function list(props) {
  console.log(biography);

  return (
    <>
      <h1 className="mt-12 text-4xl font-bold">
        Top 50 in Biography and Memoir
      </h1>
      <div className="flex flex-wrap justify-center h-screen my-10">
        {biography.map((book) => {
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
