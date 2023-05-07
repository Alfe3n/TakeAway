import React from "react";
import axios from "axios";
import { useState } from "react";
import "./search.css";
import Categories from "./categories";
function search() {
  console.log("render");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  function searchResults(e) {
    setSearch(e.target.value);
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyAfZq-DetHnW0deGAA6pdhwriqPYNDBTmw"
      )
      .then((res) => setResults(res.data.items))
      .catch((err) => console.log(err));
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black2">
      <div className="flex justify-center w-full align-middle search-container">
        <input
          className="w-1/2 h-20 text-lg text-gray-700 outline-none peer"
          type="text"
          placeholder="Search.."
          name="search"
          value={search}
          onChange={searchResults}
        />

        <button
          className="relative z-[2] flex items-center rounded-r bg-white px-6 py-2.5 text-xs font-medium uppercase leading-tight text-black "
          type="button"
          id="button-addon1"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <Categories />
    </div>
  );
}

export default search;
