import React from "react";
import { Link, useNavigate } from "react-router-dom";
function results(props) {
  const results = props.books;
  const navigate = useNavigate();
  function setBook(bookparameter) {
    navigate("/book", { state: bookparameter });
  }
  return (
    <div className="flex flex-col w-2/3 gap-y-2 lg:flex-row lg:justify-between">
      {results.slice(0, 5).map((book) => {
        let thumbnail =
          book.volumeInfo.imageLinks &&
          book.volumeInfo.imageLinks.smallThumbnail;
        // console.log(book);
        // let link = `book/${book.volumeInfo.industryIdentifiers[1].identifier}`;
        // let link = `book/${book.items.id}`;
        if (typeof thumbnail !== "undefined")
          return (
            <div
              key={book.id}
              className="flex items-center p-2 border-2 border-solid gap-x-2 lg:flex-col lg:gap-y-2"
            >
              {/* <a href="/book"> */}
              <img
                className="object-center w-20 h-20 lg:h-40 lg:w-40"
                src={thumbnail}
                onClick={() => {
                  setBook(book);
                }}
              />
              {/* </a> */}
              <div>
                <h1>{book.volumeInfo.title}</h1>
                <p>{book.volumeInfo.authors}</p>
              </div>
            </div>
          );
      })}
    </div>
  );
}

export default results;
