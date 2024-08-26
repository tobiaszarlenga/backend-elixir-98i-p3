import mongoose from 'mongoose';

const User = new mongoose.Schema({
  name: {
    // Cambiado de 'nane' a 'name'
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model('Users', User);
