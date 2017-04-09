import passport from 'passport';

import { logger } from '../interfaces';
import { UserModel } from '../models';

class AuthController {
  static signup({ email, password, req }) {
    const user = new UserModel({
      email,
      password
    });
    const query = UserModel.findOne({ email });

    return query.exec()
      .then((existingUser) => {
        if (existingUser) {
          throw new Error('Email in use');
        }
      })
      .then(() => {
        return user.save()
          .then(() => {
            return new Promise((resolve, reject) => {
              req.logIn(user, (err) => {
                if (err) { reject(err); }
                resolve(user);
              });
            });
          })
          .catch((err) => {
            logger.error(err);
            if (err.name === 'ValidationError') {
              throw new Error(`You must provide a valid: ${Object.keys(err.errors).join(', ')}`);
            }
          })
        ;
      })
    ;
  }

  static login({ email, password, req }) {
    return new Promise((resolve, reject) => {
      passport.authenticate('local', (err, user) => {
        if (!user) { reject('Invalid credentials.'); }

        req.login(user, () => resolve(user));
      })({ body: { email, password } });
    });
  }
}

export default AuthController;
