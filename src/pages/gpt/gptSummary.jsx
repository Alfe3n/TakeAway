import React from 'react'
import { useEffect, useState } from 'react'
import { Conversation } from 'gpt-turbo'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// import API_KEY from '../../../apikey.js'
function Gpt(props) {
  let data = []
  // let summary = "";
  const [summary, setSummary] = useState('')

  // const API_KEY = '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'
  // async function fetchdata() {
  //   const response = await fetch('https://api.openai.com/v1/chat/completions', {
  //     method: 'POST',

  //     headers: {
  //       Authorization: `Bearer ${API_KEY}`,
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       model: 'gpt-3.5-turbo',
  //       messages: [
  //         {
  //           role: 'user',
  //           content: `elaborate chapter wise summaries from the book ${props.name} where each chapter summaru is a paragraph `
  //         }
  //       ]
  //     })
  //   })
  //   data = await response.json()
  //   setSummary(data.choices[0].message.content)
  //   console.log(data)
  // }
  async function fetchdata() {
    const conversation = new Conversation({
      apiKey: process.env.REACT_APP_API_KEY
      // apiKey: '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'
    })

    const response = await conversation.prompt(`elaborate chapter wise summaries from the book ${props.name} where each chapter summary is a paragraph `)
    // console.log(`Response: ${response.content}`)
    setSummary(response.content)
  }
  const paragraphs = summary.split('\n')
  console.log(summary)

  let i = 0
  i + 1
  // fetchdata();
  useEffect(() => {
    fetchdata()
  }, [i])
  return (
    <div className="mx-64 my-10 gptContainer">
      <h1 className="mb-10 text-5xl font-bold text-center text-black">{props.name}</h1>
      {summary != '' ? (
        <>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed tracking-wide text-darkblue md:text-2xl md:tracking-wide md:leading-normal">
              {paragraph}
              <br></br>
            </p>
          ))}
        </>
      ) : (
        <div>
          {/* <h1>Loading..</h1> */}
          <Skeleton count={10} />
        </div>
      )}
      {/* <p>{summary}</p>*/}
    </div>
  )
}

export default Gpt
// `give chapter wise summaries from the book ${props.name}enclosed in an  js array as plain text where each chapter name is a key and its summary as its value`
