import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Gpt from './gptSummary'
import './../../../env.js'
export function Page() {
  const location = useLocation()
  let bookName = location.state
  console.log(bookName)
  console.log('kkk')
  return (
    <div>
      {/* <h1>{bookName}</h1> */}
      <Gpt name={bookName} />
    </div>
  )
}
