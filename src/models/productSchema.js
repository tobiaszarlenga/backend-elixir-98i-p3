import mongoose from 'mongoose';

const Product = new mongoose.Schema({
  nameP: { type: String, required: true }, // Nombre del producto
  img: { type: String, required: true }, // URL de la imagen del producto
  price: { type: Number, required: true }, // Precio del producto
  content: { type: String, required: true }, // Descripción del producto
  existens: { type: Boolean, default: true }, // Disponibilidad del producto
  veganas: { type: Boolean, default: false }, // Opción vegana
  celiac: { type: Boolean, default: false }, // Opción para celíacos
  vegetarian: { type: Boolean, default: false }, // Opción vegetariana
  category: { type: String, required: true }, // Categoría del producto
  isActive: { type: Boolean, default: true }, // Indica si el producto está activo
});
export default mongoose.model('Product', Product);
