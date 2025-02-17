const jwt = require('jsonwebtoken')
require('dotenv').config()

function auth(req, res, next) {
    const token = req.header('x-auth-token')
    if (!token) {
        return res.status(401).json({ msg: "No token" })
    }
    try {
        const decoded = jwt.verify(token, process.env.jwtSecret)
        req.user = decoded
        next();
    }
    catch (e) {
        res.status(400).json({ msg: "token is not valid" })
    }
}

module.exports = auth