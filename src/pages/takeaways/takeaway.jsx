import React, { useEffect } from "react";
import "./takeaway.css";
import { useLocation } from "react-router-dom";

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
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
  return (
    <div className="takeaway-page-container">
      <div className="left-container">
        <p> HELLO WORLD</p>

        <h1>{book.volumeInfo.title}</h1>
        <h2>{book.volumeInfo.authors[0]}</h2>
        <h3>What is it about?</h3>
        <p>{book.volumeInfo.description}</p>
        <h3>Categories</h3>
        <p>{book.volumeInfo.categories}</p>
      </div>
      <div className="right-container">
        <img src={thumbnail}></img>
      </div>
      {/* <div className="takeaway-container">
        <p>{data.choices[0].message.content}</p>
      </div> */}
    </div>
  );
}
