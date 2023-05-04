import React from "react";
import "./search.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function search() {
  const navigate = useNavigate();
  console.log("render");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  console.log(search);
  function setBook(bookparameter) {
    navigate("/book", { state: bookparameter });
  }
  async function searchResults() {
    // setSearch(e.target.value);

    const options = {
      method: "GET",
      url: "https://book-finder1.p.rapidapi.com/api/search",
      params: {
        title: search,
        // book_type: "",
        // results_per_page: "",
        // page: "",
      },
      headers: {
        "X-RapidAPI-Key": "3a14d7bd80msh1f3aee4724d1c8bp1468dbjsn02ca4be4960c",
        "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setResults(response.data);
      console.log(results);
    } catch (error) {
      console.error(error);
    }
  }
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
          // onChange={searchResults}
        />
        <button className="h-20 bg-white" onClick={searchResults}>
          Search
        </button>
      </div>
    </div>
  );
}

export default search;
