const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '438402548050-jlnud9omp6972j0qitu4kse97tvlj6m7.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(null, profile);
    });
  }
));

passport.serializeUser(function(user, done){
    done(null, user);
})

passport.deserializeUser(function(user, done){
    done(null, user);
})


