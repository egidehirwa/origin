import express from ('express')
const router = express.Router()

//login page

router.get('/', (req,res) =>{
    res.render('welcome')
})

//register page

router.get('/register', (req,res) =>{
    res.render('register')
})

export default router