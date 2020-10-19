const express = require('express')
const mongoose = require('mongoose')
const path = require("path")
require('dotenv').config()

const expenses = require('./routes/api/expenses.js')
const users = require('./routes/api/users.js')

const app = express()
app.use(express.json())

const db = process.env.mongo_URI

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
}).then(() => console.log("MongoDB connected")).catch(err => console.log(err))

app.use('/api/expenses', expenses)
app.use('/api/users', users)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}
const port = process.env.port || 5000

app.listen(port, () => console.log(`Server started on port: ${port}`))