import passport from 'passport'
import LocalStrategy from 'passport-local'
import { userModel } from './model/user.js';
import bcrypt from 'bcrypt'

function initializePassport() {
  passport.use(new LocalStrategy(
    {
      usernameField: 'loginEmail', // Specify the field name for the email
      passwordField: 'loginPassword' // Specify the field name for the password
    },
    async (email, password, done) => {
      try {
        const user = await userModel.findOne({ email: email });
        if (!user) {
          return done(null, false, { message: 'No user found' });
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      } catch (error) {
        console.log(error);
        return done(error);
      }
    }
  ));

  passport.serializeUser((user, done) => {
    console.log('serializing user:', user.name);
    try {
      process.nextTick(function () {
        done(null, { id: user.id, name: user.name });
      });
    } catch (err) {
      console.error('Error during serialization:', err);
      done(err);
    }
  });

  passport.deserializeUser((user, done) => {
    console.log('deserializing user : ', user.name);
    try {
      // const userData = userModel.findOne({ id: user.id }).exec();
      // console.log('user found during deserialize:', userData);
      return done(null, user);
    } catch (error) {
      console.error('Error during deserialization:', error);
      done(err);
    }
  });
}


export default initializePassport