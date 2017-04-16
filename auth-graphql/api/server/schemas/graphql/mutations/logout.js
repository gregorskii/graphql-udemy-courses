import UserType from '../types/user';
import AuthController from '../../../controllers/auth';

export default {
  type: UserType,
  resolve(parentValue, args, req) {
    return AuthController.logout(req);
  }
};
