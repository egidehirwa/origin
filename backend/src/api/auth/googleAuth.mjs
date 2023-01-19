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
const app = express()

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}))
app.use(passport.initialize())
app.use(passport.session())


passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/g/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {

        // try {
        //     console.log(profile)
        //     let user_profile = await client.query(`SELECT * FROM profile WHERE google_id = '${profile.id}'`)
        //     console.log(profile.id)
        //     console.log(user_profile)
        //     if (user_profile.rows.length > 0) {
        //         return done(null, {
        //             redirect: `/profile/${user_profile.rows[0].id}`
        //         })
        //     } else {
        //         return done(null, {
        //             redirect: '/create-profile'
        //         })
        //     }
        // } catch (error) {
        //     console.log(error);
        //     return done(error);
        // }
    }
    
));

passport.serializeUser(function (user, done) {
    done(null, user);
})

passport.deserializeUser(function (user, done) {
    done(null, user);
})

googleRouter.get('/google', (req, res) => {
    res.send('<a href="/auth/g/auth/google">Authenticate with Google</a>')
})


googleRouter.get('/auth/google',
    passport.authenticate('google', {
        scope: ['profile']
    })
)

googleRouter.get('/google/callback', (req, res) => {
    passport.authenticate('google', {
                successRedirect: '/protected',
                failureRedirect: '/auth/failure',
            })
});

googleRouter.get('/failure', (req, res) => {
    res.send('We have a problem')
})


googleRouter.get('/protected', (req, res) => {
    res.send(`YEAH YEAH YEAH ${req.user.displayName}`)
})

export default googleRouter