import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../common/navbar";
export function Takeaways() {
  const location = useLocation();
  let book = location.state;
  let data = {};
  const API_KEY = "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";
  // const systemMessage = {
  //   role: "system",
  //   content: "Act like you are a librarian",
  // };
  async function fetchdata() {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",

      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `elaborate chapter wise takeaways from the book ${book.volumeInfo.title}enclosed in an  js array`,
          },
        ],
      }),
    });
    data = await response.json();
    console.log(data);
  }
  // useEffect(() => {
  //   fetchdata();
  // }, []);
  // let { id } = useParams();
  // console.log(book);
  console.log("page2");
  console.log(location.state);
  let thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail;
  return (
    <div className="flex-col w-full page-container">
      <Navbar />
      <div className="flex-col m-5 text-darkblue content-container">
        <div className="flex items-center justify-center mb-6 md:flex-row-reverse md:justify-around image-container">
          <img src={thumbnail} className="md:w-52"></img>
          <div className="hidden md:flex md:flex-col md:gap-y-4 ">
            <h1 className="text-4xl font-bold lg:text-6xl">
              {book.volumeInfo.title}
            </h1>
            <h2 className="text-2xl lg:text-3xl lg:font-semibold">
              {book.volumeInfo.authors[0]}
            </h2>
            {/* <p className="text-xl">Rating:{book.volumeInfo.averageRating}</p> */}
          </div>
        </div>
        <div className="flex flex-col gap-y-4 details-container">
          <div className="md:hidden">
            <h1 className="text-2xl font-bold">{book.volumeInfo.title}</h1>
            <h2 className="text-lg font-semibold ">
              {book.volumeInfo.authors[0]}
            </h2>
          </div>
          <div>
            <button className="p-2 mb-10 font-semibold rounded-lg bg-lightgrey md:text-2xl md:p-4">
              {book.volumeInfo.categories}
            </button>
            <h3 className="text-lg font-semibold tracking-wider lg:leading-loose md:text-2xl">
              What is it about?
            </h3>
            <p className="leading-relaxed tracking-wide md:text-2xl md:tracking-wide md:leading-normal">
              {book.volumeInfo.description}
            </p>
          </div>
          <div></div>
          <div>
            <h3 className="text-lg font-semibold md:text-2xl">Rating</h3>
            <p className="md:text-2xl">{book.volumeInfo.averageRating}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold md:text-2xl">
              Date of Publish
            </h3>
            <p className="md:text-2xl">{book.volumeInfo.publishedDate}</p>
          </div>
        </div>

        {/* <div className="takeaway-container">
        <p>{data.choices[0].message.content}</p>
      </div> */}
      </div>
    </div>
  );
}
