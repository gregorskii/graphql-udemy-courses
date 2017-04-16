import jwt from 'express-jwt';

import { UserModel } from '../models';

export default (app) => {
  app.use(jwt({
    secret: process.env.JWT_SECRET,
    credentialsRequired: false,
    getToken: function fromHeaderOrQuerystring(req) {
      return req.headers.token;
    }
  }));

  // Simple middlware to get user from jwt subs without requiring authentication
  app.use((req, res, next) => {
    // See if the user id payload exists in our database
    if (req.user && req.user.sub) {
      const query = UserModel.findById(req.user.sub);

      query.exec()
        .then((user) => {
          if (user) req.user = user;
          next();
        })
        .catch((err) => {
          if (err) next(err);
        })
      ;
    } else {
      next();
    }
  });
};
