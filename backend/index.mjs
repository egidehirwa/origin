/* // Facebook authentication 
import express from 'express'
import passport from 'passport'
import { Strategy as FacebookStrategy } from 'passport-facebook';
import session from 'express-session'
import * as dotenv from 'dotenv'
import client from './src/db/connect.mjs'
const app = express() 
dotenv.config()


passport.use(new FacebookStrategy({
    clientID : FACEBOOK_APP_ID,
    clientSecret : FACEBOOK_APP_SECRET, 
    callbackURL : 'http://localhost:3000/auth/facebook/callback'
},

    async function(accessToken, refreshToken, profile, cb) {
        // let user_profile = SELECT * FROM profiles WHERE facebook_id === profile.id
        // if user_profile.exists?
        // res.profile = user_profile
        // if user_profile.not.exists?
        // redirect user to create profile page
        // res.facebook_id = profile.id
        let user_profile  = await client.query(`SELECT * FROM profile WHERE facebook_id = ${profile.id}`)
            if (user_profile.length > 0) {
                res.profile = user_profile[0];
            } else {
                res.redirect('/create-profile');
                res.facebook_id = profile.id;
}
        console.log(profile)
        cb(null, {})
    }
))

app.use(passport.initialize())

app.get('/auth/facebook', passport.authenticate('facebook'))

app.get('/auth/facebook/callback', 
passport.authenticate('facebook', { session : false }),
    function(req,res) {
    console.log(res, req)
    //successful authentication, redirect home.
    res.send('AUTH WAS GOOD')
})


app.listen(3000, () => {
    console.log('Origin app listening on port 3000!');
}); */


import express from 'express'
import passport from 'passport'
import { Strategy as FacebookStrategy } from 'passport-facebook';
import session from 'express-session'
import * as dotenv from 'dotenv'
import client from './src/db/connect.mjs'
const app = express() 
dotenv.config()

passport.use(new FacebookStrategy({
    clientID : FACEBOOK_APP_ID,
    clientSecret : FACEBOOK_APP_SECRET, 
    callbackURL : 'http://localhost:3000/auth/facebook/callback'
},
async function(accessToken, refreshToken, profile, done) {

    try {
        let user_profile  = await client.query(`SELECT * FROM profile WHERE facebook_id = ${profile.id}`)
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

/*app.get('/auth/facebook/callback', 
passport.authenticate('facebook', { session : false }),
    function(req,res) {
    if(req.user.redirect){
        return res.redirect(req.user.redirect);
    }
    //successful authentication, redirect home.
    res.redirect('/');
})*/

app.listen(3000, () => {
    console.log('Origin app listening on port 3000!');
});

