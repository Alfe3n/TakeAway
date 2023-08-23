import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { BiLibrary } from "react-icons/bi";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div className="flex items-center text-white bg-[#F1F6F4] justify-between pr-4">
      <Link to="/">
        <p className="p-4 text-2xl font-bold md:p-4 text-darkblue md:text-3xl ">
          TakeAway
        </p>
      </Link>

      {/* <div className="flex justify-between text-2xl gap-x-4 md:gap-x-8 text-darkblue ">
        <BiLibrary />
        <BiBookmark />
        <BiUserCircle />
      </div> */}
    </div>
  );
}

export default navbar;
