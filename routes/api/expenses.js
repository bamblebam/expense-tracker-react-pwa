const express = require('express')
const router = express.Router()
const Expenses = require('../../models/Expenses.js')

router.get('/', (req, res) => {
    Expenses.find().sort({ date: -1 }).then(expenses => res.json(expenses))
})

router.post('/add', (req, res) => {
    const newExpense = new Expenses({
        name: req.body.name,
        price: req.body.price
    })
    newExpense.save().then(expense => res.json(expense))
})

router.delete('/delete/:id', (req, res) => {
    Expenses.findById(req.params.id).then(expense => expense.remove().then(() => res.json({ success: true }))).catch(err => res.status(404).json({ success: false }))
})


module.exports = router