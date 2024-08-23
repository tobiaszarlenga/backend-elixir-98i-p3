import mongoose from 'mongoose';

const User = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },

  isActive: {
    type: Boolean,
    default: true,
  },
});
export default mongoose.model('User', User);
