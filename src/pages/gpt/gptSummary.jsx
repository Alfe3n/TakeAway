import React from "react";
import { useEffect, useState } from "react";

function Gpt(props) {
  let data = [];
  // let summary = "";
  const [summary, setSummary] = useState("");

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
            content: `elaborate chapter wise summaries from the book ${props.name}enclosed in an  js array as plain text where each chapter name is a key and its summary as its value`,
          },
        ],
      }),
    });
    data = await response.json();
    setSummary(data.choices[0].message.content);
    console.log(summary);
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <h1>{props.name} from gpt</h1>
      {summary != "" ? <p>{summary}</p> : <p>not yet</p>}
    </div>
  );
}

export default Gpt;
