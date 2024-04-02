import express from 'express'
import * as authController from '../controller/auth.js'
import passport from 'passport';

const authenticateCallback = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      // If there's an error, send it to the frontend
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      // If user is not found, send the error message to the frontend
      return res.status(401).json({ error: info.message });
    }
    // If authentication is successful, proceed to the next middleware/controller
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      console.log("login successful.");
      return next();
    });
  })(req, res, next);
};

const authRouter = express.Router();

authRouter.post('/login/password', authenticateCallback, authController.checkUser);
authRouter.get('/login', checkAuthenticated, authController.checkAuthenticated);
authRouter.delete('/logout', checkAuthenticated, authController.logoutUser);

function checkAuthenticated(req, res, next) {
  console.log('isAuth->', req.session);
  if (req.isAuthenticated()) {
    return next()
  }
  return res.status(401).json({ error: 'Not authorized' });
}

export { authRouter }