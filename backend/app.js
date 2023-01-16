const PORT = 5000
const db = require('pg')
const { profile } = require('console');
const express = require('express');
const app = express()
require('./src/api/auth/google');
const passport = require('passport');
const session = require('express-session')
const router = express.Router()
const expressEjsLayout = require('express-ejs-layouts')
const cors = require('cors')


//Connect database
require("./configs/dotenv");
const client = require("./configs/database");

client.connect((err) =>{

    if(err){

        console.log(err);
    }

    else{
        console.log("Data logging initiated")
    }
})

const user = require("./routes/user");

app.use("/user", user); //Routes for /user endpoint of API

app.post("/user/login", (req,res)=>{
    res.status(200).send('LOGIN')
})


//middleware fonction

function isLoggedIn(req,res, next){
    req.user? next() : res.sendStatus(401)
}
app.use(session({secret: "cats"}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/',(req,res) =>{
    res.send('<h1>Origin Homepage</h1>')
})

//GOOGLE AUTHENTIFICATION
app.get('/google', (req,res) => {
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

//APPLE AUTHENTIFICATION 
// I HAVE TO FIND A WAY TO GET THE API FROM APPLE
app.get('/auth/change/apple',
   passport.authenticate('google',{ scope: ['email', 'profile']})
)

app.get('/sign/apple',(req,res,next) =>{
    res.send('<a href="/auth/apple">Authenticate with Apple</a>')
    passport.authenticate('apple', function(err, user, info) {
		if (err) {
			if (err == "AuthorizationError") {
				res.send("Oops! Looks like you didn't allow the app to proceed. Please sign in again! <br /> \
				<a href=\"/login\">Sign in with Apple</a>");
			} else if (err == "TokenError") {
				res.send("Oops! Couldn't get a valid token from Apple's servers! <br /> \
				<a href=\"/login\">Sign in with Apple</a>");
			} else {
				res.send(err);
			}
		} else {
			if (req.body.user) {
				// Get the profile info (name and email) if the person is registering
				res.json({
					user: req.body.user,
					idToken: user
				});
			} else {
				res.json(user);
			}			
		}
	})(req, res, next);
});
		
app.get('/auth/failed', (req,res) => {
    res.send('Retry to sign up')
})






app.get('/logout',(req,res) =>{
    req.logout();
    res.send('Goodbye');
}
)

app.use('/',require('./src/api/index'))

/*I HAVE TO FIX THIS
app.use('/users',require('/',require('./src/api/auth/user.js')))*/

//listening to server connection
app.listen(5000, () => {
    console.log('Everything is good on port ' + PORT +'!')
})
