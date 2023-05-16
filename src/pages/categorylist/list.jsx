import React, { useState, useEffect } from 'react'

import { biography } from '../../data/biography'
import { philosophy } from '../../data/philosophy'
import { entrepreneurship } from '../../data/entrepreneurship'
import { productivity } from '../../data/productivity'
import { money } from '../../data/money'
import { communication } from '../../data/communication'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function list(props) {
  const navigate = useNavigate()
  let i = 0
  let data = []
  const [bookData, setBookData] = useState([])
  // const [ISBN, setISBN] = useState('')
  let category = props.category
  function setData() {
    if (category == 'Biography') {
      data = biography
    } else if (category == 'Philosophy') {
      data = philosophy
    } else if (category == 'Entrepreneurship') {
      data = entrepreneurship
    } else if (category == 'Productivity') {
      data = productivity
    } else if (category == 'Money') {
      data = money
    } else {
      data = communication
    }
  }
  // useEffect(() => {
  //   setData()
  // }, [])
  setData()
  // console.log(data)
  // function setBook(bookparameter) {
  //   navigate('/book', { state: bookparameter })
  // }
  let dummy = []
  function searchbook(isbn) {
    // setISBN(isbn)
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=+isbn:' + isbn + '&key=AIzaSyAfZq-DetHnW0deGAA6pdhwriqPYNDBTmw')
      .then((res) => setBookData(res.data.items))
      // .then((res) => (dummy = res.data.items))
      .catch((err) => console.log(err))
    console.log(bookData)
    if (bookData !== undefined)
      if (bookData.length != 0) {
        navigate('/book', { state: bookData[0] })
      }
  }

  return (
    <div className="ml-6 mr-6">
      <h1 className=" text-[#03314B] mt-8 mb-8 text-xl font-bold md:text-4xl md:mt">{`Top 50 in ${category}`}</h1>
      <div className="flex flex-wrap justify-start h-auto mb-10 gap-x-5 gap-y-2 md:gap-y-8">
        {data.map((book) => {
          i = i + 1
          return (
            <div className="h-auto hover:bg-[#F1F6F4] border- rounded-lg border-solid" key={i}>
              <p
                onClick={() => {
                  searchbook(book.ISBN)
                }}
                className="p-2 text-sm text-[#03314B] md:text-lg md:p-3">
                {book.title}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default list
