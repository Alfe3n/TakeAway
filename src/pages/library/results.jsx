import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./search.css";
function results() {
  const navigate = useNavigate();
  function setBook(bookparameter) {
    navigate("/book", { state: bookparameter });
  }
  return (
    <div className="flex">
      {results.map((book) => {
        let thumbnail =
          book.volumeInfo.imageLinks &&
          book.volumeInfo.imageLinks.smallThumbnail;
        // console.log(book);
        // let link = `book/${book.volumeInfo.industryIdentifiers[1].identifier}`;
        // let link = `book/${book.items.id}`;
        if (typeof thumbnail !== "undefined")
          return (
            <div className="p-5 card" key={book.id}>
              {/* <a href="/book"> */}
              <img
                className="thumbails"
                src={thumbnail}
                onClick={() => {
                  setBook(book);
                }}
              />
              {/* </a> */}
              <h1>{book.volumeInfo.title}</h1>
              <p>{book.volumeInfo.authors}</p>
            </div>
          );
      })}
    </div>
  );
}

export default results;
