import React from "react";
import axios from "axios";
import { useState } from "react";
import Categories from "./categories";
import Results from "./results";
import { BiSearch } from "react-icons/bi";
function search() {
  console.log("render");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  function searchResults(e) {
    setSearch(e.target.value);
    // if (search === "") {
    //   setResults([]);
    // } else {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyAfZq-DetHnW0deGAA6pdhwriqPYNDBTmw"
      )
      .then((res) => setResults(res.data.items))
      .catch((err) => console.log(err));
    // }
  }
  return (
    <div className="flex flex-col items-center justify-center mt-40 mb-20">
      <div className="flex justify-center w-full mb-5 align-middle search-container">
        <div className="flex items-center justify-between w-2/3 p-1 border-2 border-solid rounded-full md:p-3">
          <div className="pr-2 text-xl text-black">{<BiSearch />}</div>

          <input
            className="w-full text-sm text-gray-700 outline-none md:text-lg caret-darkblue cursor-text"
            type="text"
            placeholder={BiSearch}
            name="search"
            value={search}
            onChange={searchResults}
          />
          {/* BiSearch */}
        </div>
      </div>
      {search === "" ? <Categories /> : null}
      {search === "" ? null : <Results books={results} />}
    </div>
  );
}

export default search;
