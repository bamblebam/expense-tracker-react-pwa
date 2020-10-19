const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../../models/User.js')

router.post('/', (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        return res.status(400).json({ msg: "Incorrect data provided" })
    }
    User.findOne({ email }).then(user => {
        if (user) {
            return res.status(400).json({ msg: "User already exsists" })
        }
        const newUser = new User({
            username,
            email,
            password
        })
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err
                newUser.password = hash
                newUser.save().then(user => {
                    jwt.sign(
                        { id: user.id },
                        process.env.jwtSecret,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    username: user.username,
                                    email: user.email
                                }
                            })
                        }
                    )
                })
            })
        })
    })
})

router.post('/login', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ msg: "Incorrect data provided" })
    }
    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(400).json({ msg: "User does not exsist" })
        }
        bcrypt.compare(password, user.password).then(isMatch => {
            if (!isMatch) {
                return res.status(404).json({ msg: "email or password not correct" })
            }
            jwt.sign(
                { id: user.id },
                process.env.jwtSecret,
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            username: user.username,
                            email: user.email
                        }
                    })
                }
            )
        })
    })
})

module.exports = router