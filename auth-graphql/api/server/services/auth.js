import jwt from 'jwt-simple';

const createTokenForUser = (user) => {
  return jwt.encode({
    // subject
    sub: user.id,
    // issued at
    iat: new Date().getTime()
  }, process.env.JWT_SECRET);
};

export default createTokenForUser;
