import React from "react";
import { Link, useNavigate } from "react-router-dom";
function results(props) {
  const results = props.books;
  const navigate = useNavigate();
  function setBook(bookparameter) {
    navigate("/book", { state: bookparameter });
  }
  return (
    <div className="flex flex-col items-center w-3/4 gap-2 min-h-fit lg:items-start md:gap-4 md:mt-4 lg:flex-row lg:justify-between items">
      {results.slice(0, 4).map((book) => {
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
              className="flex items-center py-2 px-3 w-60 h-48 sm:h-full bg-[#F1F6F4] gap-y-2 gap-x-4 rounded-lg lg:flex-col lg:gap-y-2"
            >
              <img
                className="object-center w-20 h-20 lg:h-40 lg:w-40"
                src={thumbnail}
                onClick={() => {
                  setBook(book);
                }}
              />
              <div className="flex flex-col ">
                <h1 className="font-bold text-darkblue">
                  {book.volumeInfo.title}
                </h1>
                <p>{book.volumeInfo.authors}</p>
              </div>
            </div>
          );
      })}
    </div>
  );
}

export default results;
