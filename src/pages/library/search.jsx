import React from "react";
import "./search.css";
import axios from "axios";
import { useState } from "react";
function search() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  function searchResults() {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyAfZq-DetHnW0deGAA6pdhwriqPYNDBTmw"
      )
      //   .then((res) => console.log(res.data.items))
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err));
  }
  console.log(search);
  return (
    <div className="container bg-black2">
      <div className="search-container h-96">
        <input
          className="w-1/2 h-20"
          type="text"
          placeholder="Search.."
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchResults} className="h-20 bg-white">
          Search
        </button>
      </div>
      <div className="flex">
        {books.map((book) => {
          let thumbnail =
            book.volumeInfo.imageLinks &&
            book.volumeInfo.imageLinks.smallThumbnail;
          console.log(thumbnail);
          if (typeof thumbnail !== "undefined")
            return (
              <div className="p-5 card">
                <a href="/book">
                  <img className="thumbails" src={thumbnail} />
                </a>
                <h1>{book.volumeInfo.title}</h1>
                <p>{book.volumeInfo.authors}</p>
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default search;
