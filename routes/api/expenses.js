const express = require('express')
const router = express.Router()
const Expenses = require('../../models/Expenses.js')

router.get('/', (req, res) => {
    Expenses.find().sort({ date: -1 }).then(expenses => res.json(expenses))
})

module.exports = router