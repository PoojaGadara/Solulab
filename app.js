const express = require('express')
const app = express();
const errmiddleware = require('./middleware/error')
app.use(express.json())

//route imports
const product = require('./routes/productRoute')
const category = require('./routes/categoryRoute')

//Path of routes
app.use('/api/v1',product)
app.use('/api/v1',category)

//middleware for error
app.use(errmiddleware)

module.exports = app;