import React from "react";
import { useEffect } from "react";

function Gpt(props) {
  let data = [];
  const API_KEY = "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";
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
            content: `elaborate chapter wise takeaways from the book ${props.name}enclosed in an  js array`,
          },
        ],
      }),
    });
    data = await response.json();
    console.log(data);
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <h1>{props.name} from gpt</h1>
      {/* data?<p>{data.choices[0].message.content}</p>:<p>not yet</p> */}
    </div>
  );
}

export default Gpt;
