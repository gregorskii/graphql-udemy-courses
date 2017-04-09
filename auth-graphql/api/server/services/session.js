import session from 'express-session';
import ConnectMongo from 'connect-mongo';

const MongoStore = ConnectMongo(session);

export default (app) => {
  app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
      url: process.env.MONGO_DB_URL,
      autoReconnect: true
    })
  }));
};
