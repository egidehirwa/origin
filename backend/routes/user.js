const express = require('express')
const router = express.Router()

const {register} = require("../controller/register")
router.post('/register', register)

const {login} = require("../controller/login")
router.post('/login',login)

module.exports = router;
