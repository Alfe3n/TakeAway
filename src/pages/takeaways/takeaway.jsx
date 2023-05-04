import React from "react";
import { useLocation } from "react-router-dom";

export function Takeaways() {
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
            content:
              "write summary of atomic habits and briefly abouts it author as 2 elements of an array in the form [author,summary]",
          },
        ],
      }),
    });
    const data = await response.json();
    console.log(data);
  }
  // fetchdata();
  // let { id } = useParams();
  // console.log(book);
  const location = useLocation();
  console.log(location.state);
  return <div></div>;
}
