const express = require('express')
const router = express.Router()

//login handle

router.get('/login',(req,res) =>{
    res.render('login')
})

router.get('/register',(req,res) =>{
    res.render('register')
})

//Register handle
router.post('/register')

module.exports = router