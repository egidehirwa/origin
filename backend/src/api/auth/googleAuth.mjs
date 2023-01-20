import passport from 'passport';
import {
    Strategy as GoogleStrategy
} from 'passport-google-oauth2'
import session from 'express-session'
import * as dotenv from 'dotenv'
import client from '../../db/connect.mjs'
import express from 'express'
const googleRouter = express.Router()
dotenv.config()

const APIKey = 'AIzaSyAUd9H-t8MSHzAAUu7Jfy0MBjynSf4KM8U'


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/g/google/callback",
    passReqToCallback: true
},

    async function (request, accessToken, refreshToken, profile, done) {
        try {
            // Check if user has logged in before using Google
            let user_profile = await client.query(`SELECT * FROM profile WHERE google_id = '${profile.id}'`)
            if (user_profile.rows.length > 0) {
                // User has logged in before, redirect to profile page
                return done(null, {redirect: `/profile/${user_profile.rows[0].id}`})
            } else {
                // User is logging in for the first time, redirect to create-profile page
                return done(null, {redirect: '/create-profile'})
            }
        } catch (error) {
            console.log(error);
            return done(error);
        }
        
    }
));

passport.serializeUser(function(user, done){
    done(null, user);
})

passport.deserializeUser(function(user, done){
    done(null, user);
})

googleRouter.get('/google', (req,res) => {
    res.send('<a href="/auth/g/auth/google">Authenticate with Google</a>')
})


googleRouter.get('/auth/google',
    passport.authenticate('google',{ scope: ['email', 'profile']})
)

googleRouter.get('/google/callback',passport.authenticate('google', {session: false}), (req, res) => {
    console.log(req.user)
    // if (req.user.redirect) {
        // redirect user to the specified page
        res.redirect(req.user.redirect);
    // } else {
        // handle error or redirect to default page
    // }
});


export default googleRouter