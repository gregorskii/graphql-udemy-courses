import { isEmail } from 'validator';

export default {
  email: {
    type: String,
    unique: true,
    // Force strings to be lowercase before saving
    lowercase: true,
    required: true,
    validate: {
      isAsync: true,
      validator: (v, cb) => {
        cb(isEmail(v));
      },
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true
  }
};
