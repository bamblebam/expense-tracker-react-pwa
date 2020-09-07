const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const path = require("path")
require('dotenv').config()

const expenses = require('./routes/api/expenses.js')

const app = express()
app.use(bodyparser.json())

const db = process.env.mongo_URI

mongoose.connect(db).then(() => console.log("MongoDB connected")).catch(err => console.log(err))

app.use('/api/expenses', expenses)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}
const port = process.env.port || 5000

app.listen(port, () => console.log(`Server started on port: ${port}`))