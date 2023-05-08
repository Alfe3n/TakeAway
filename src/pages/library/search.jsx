import React from "react";
import axios from "axios";
import { useState } from "react";
import Categories from "./categories";
import Results from "./results";
function search() {
  console.log("render");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  function searchResults(e) {
    setSearch(e.target.value);
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          "alchemist" +
          "&key=AIzaSyAfZq-DetHnW0deGAA6pdhwriqPYNDBTmw"
      )
      .then((res) => setResults(res.data.items))
      .catch((err) => console.log(err));
  }
  return (
    <div className="flex flex-col items-center justify-center h-5/6">
      <div className="flex justify-center w-full mb-5 align-middle search-container">
        <div className="flex justify-between w-2/3 p-3 border-2 border-solid rounded-full md:p-5">
          <input
            className="text-sm text-gray-700 outline-none md:text-lg"
            type="text"
            placeholder="Search.."
            name="search"
            value={search}
            onChange={searchResults}
          />

          <button
            className="relative z-[2] flex b items-center rounded-r  text-xs font-medium uppercase leading-tight text-black "
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
      </div>
      {search === "" ? <Categories /> : null}
      <Results books={results} />
    </div>
  );
}

export default search;
