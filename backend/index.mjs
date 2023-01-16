
import express from 'express'
import passport from 'passport'
import { Strategy as FacebookStrategy } from 'passport-facebook';
import session from 'express-session'
import * as dotenv from 'dotenv'
import client from './src/db/connect.mjs'
const app = express() 
dotenv.config()
const PORT = 3000
import('./src/api/auth/google');

const router = express.Router()


passport.use(new FacebookStrategy({
    clientID : process.env.FACEBOOK_APP_ID,
    clientSecret : process.env.FACEBOOK_APP_SECRET, 
    callbackURL : 'http://localhost:3000/auth/facebook/callback'
},
async function(accessToken, refreshToken, profile, done) {

    try {
        let user_profile  = await client.query(`SELECT * FROM profile WHERE facebook_id = '${profile.id}'`)
        console.log(profile.id)
        console.log(user_profile)
        console.log(user_profile.length)
        if (user_profile.length > 0) {
            return done(null, {redirect: `/profile/${user_profile[0].id}`})
        } else {
            return done(null, {redirect: '/create-profile'})
        }
    } catch (error) {
        console.log(error);
        return done(error);
    }
}
))

app.use(passport.initialize())


app.get('/auth/facebook', passport.authenticate('facebook'))

app.get('/auth/facebook/callback', 
passport.authenticate('facebook', { session : false }),
    function(req,res) {
    if(req.user.redirect){
        return res.redirect(req.user.redirect);
    }
    //successful authentication, redirect home.
    res.redirect('/');
})

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

import user from "../backend/routes/user.mjs";

app.use("/user", user); //Routes for /user endpoint of API

app.post("/user/login", (req,res)=>{
    res.status(200).send('LOGIN')
})



app.listen(3000, () => {
    console.log('Origin app listening on port 3000!');
});







