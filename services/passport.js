const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

//put the user.id in the header
passport.serializeUser((user, done) => {
  done(null, user.id);
});
//take the id out of the header
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  }, 
  async (accessToken, refreshToken, profile, done) => {
    console.log('PASSPORT--------------------------');
    console.log(profile);
    const existingUser = await User.findOne({
      googleId: profile.id
    });

    if(existingUser) {
      return done(null, existingUser);
    }

    const user = await new User({
      googleId: profile.id
    }).save();

    done(null, user);   
  })
);