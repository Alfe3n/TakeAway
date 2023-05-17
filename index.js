const PORT = process.env.PORT || 3000
import express from 'express'
import axios from 'axios'
import { config as dotenvConfig } from 'dotenv'
const { API_KEY } = process.env.REACT_APP_API_KEY
dotenvConfig()
const app = express()
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
  console.log(`API_KEY is ${API_KEY}.`)
})
