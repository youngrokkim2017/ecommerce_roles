const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const db = require('../config/keys').mongoURI
require('dotenv').config();

// MODELS


// CONTROLLERS
const { createProduct } = require('./controllers/createProductController')
const { getProducts } = require('./controllers/getProductsController')
const { registerController } = require('./controllers/registerController')
const { loginController } = require('./controllers/loginController')

mongoose
    .connect(db, { useNewUrlParser: true }) // .connect returns a promise
    .then(() => console.log('connected to mongoDB'))
    .catch(err => console.log(err)); // catch any errors

app.use(express.json())
app.use(cors())

// API ROUTE ENDPOINTS
app.post('/products', createProduct)
app.get('/products', getProducts)
app.post('/register', registerController)
app.post('/login', loginController)

app.listen(5000)