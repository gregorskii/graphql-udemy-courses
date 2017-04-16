import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { UserModel } from '../models';

// SerializeUser is used to provide some identifying token that can be saved
// in the users session.  We traditionally use the 'ID' for this.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// The counterpart of 'serializeUser'.  Given only a user's ID, we must return
// the user object.  This object is placed on 'req.user'.
passport.deserializeUser((id, done) => {
  UserModel.findById(id, (err, user) => {
    done(err, user);
  });
});

// Instructs Passport how to authenticate a user using a locally saved email
// and password combination.  This strategy is called whenever a user attempts to
// log in.  We first find the user model in MongoDB that matches the submitted email,
// then check to see if the provided password matches the saved password. There
// are two obvious failure points here: the email might not exist in our DB or
// the password might not match the saved one.  In either case, we call the 'done'
// callback, including a string that messages why the authentication process failed.
// This string is provided back to the GraphQL client.

const localStrategy = new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  // Verify the email and password
  const query = UserModel.findOne({ email });

  query.exec()
    .then((user) => {
      if (!user) done(null, false, 'Invalid Credentials');
      user.comparePassword(password, (err, isMatch) => {
        // Compare password, if valid return user, if not return false
        if (err) done(err);
        // this done returns the user to the current route handler
        if (isMatch) done(null, user);
        done(null, false, 'Invalid Credentials');
      });
    })
    // Error checking
    .catch((err) => {
      done(err);
    })
  ;
});

passport.use(localStrategy);

export default passport;
