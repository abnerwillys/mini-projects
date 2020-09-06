const cors    = require('cors')
const axios   = require('axios')
const express = require('express')
const app     = express()

app.use(cors())

app.get('/', async(req, res) => {
  try {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')
    
    return res.json(data)

  } catch (error) {
    console.log(error)
  }
})

app.listen('4567')