import mongoose from 'mongoose';
import { emailRegex } from '../helpers/validationSchemas/usersValidationSchema';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Nombre del usuario
  dni: { type: String, required: true }, // DNI del usuario
  email: { type: String, required: true, unique: true, match: emailRegex }, // Correo electrónico del usuario
  password: { type: String, required: true }, // Contraseña del usuario
  coment: { type: String }, // Comentario opcional

  isAdmin: { type: Boolean, default: false }, // Rol de administrador
  isActive: { type: Boolean, default: true }, // Estado activo del usuario
});

export default mongoose.model('User', UserSchema);
