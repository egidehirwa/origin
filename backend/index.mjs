
import express from 'express'
import passport from 'passport'
import { Strategy as FacebookStrategy } from 'passport-facebook';
import session from 'express-session'
import * as dotenv from 'dotenv'
import client from './src/db/connect.mjs'
const app = express() 
dotenv.config()

passport.use(new FacebookStrategy({
    clientID : process.env.FACEBOOK_APP_ID,
    clientSecret : process.env.FACEBOOK_APP_SECRET, 
    callbackURL : 'http://localhost:3000/auth/facebook/callback'
},
async function(accessToken, refreshToken, profile, done) {

    try {
        let user_profile  = await client.query(`SELECT * FROM profile WHERE facebook_id = '${profile.id}'`)
        console.log(profile.id)
        console.log(user_profile.length);
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


app.listen(3000, () => {
    console.log('Origin app listening on port 3000!');
});

