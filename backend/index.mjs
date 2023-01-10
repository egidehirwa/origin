const PORT = 5000
const { profile } = require('console');
const express = require('express');
const app = express()
require('./auth');
const passport = require('passport');
const session = require('express-session')

//middleware fonction

function isLoggedIn(req,res, next){
    req.user? next() : res.sendStatus(401)
}
app.use(session({secret: "cats"}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req,res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>')
})


app.get('/auth/google',
   passport.authenticate('google',{ scope: ['email', 'profile']})
)

app.get('/google/callback',
passport.authenticate('google',{
    successRedirect: '/protected',
    failureRedirect: '/auth/failure',
})
);

app.get('/auth/failure', (req,res) => {
    res.send('We have a problem')
})


app.get('/protected', isLoggedIn, (req, res) =>{
    res.send(`YEAH YEAH YEAH ${req.user.displayName}`)
})
/*middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())*/





app.get('/logout',(req,res) =>{
    req.logout();
    res.send('Goodbye');
}
)


//listening to server connection
app.listen(5000, () => {
    console.log('Everything is good on port ' + PORT +'!')
})
