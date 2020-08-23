const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
require('dotenv').config()

const expenses = require('./routes/api/expenses.js')

const app = express()
app.use(bodyparser.json())

const db = process.env.mongo_URI

mongoose.connect(db).then(() => console.log("MongoDB connected")).catch(err => console.log(err))

app.use('/api/expenses', expenses)
const port = process.env.port || 5000

app.listen(port, () => console.log(`Server started on port: ${port}`))