const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const db = require('../config/keys').mongoURI
require('dotenv').config();

mongoose
    .connect(db, { useNewUrlParser: true }) // .connect returns a promise
    .then(() => console.log('connected to mongoDB'))
    .catch(err => console.log(err)); // catch any errors

app.use(express.json())
app.use(cors())

app.get('/whatsup', (req, res) => {
    res.send('smells like up dog')
})

app.listen(5000)