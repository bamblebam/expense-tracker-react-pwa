const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.json())