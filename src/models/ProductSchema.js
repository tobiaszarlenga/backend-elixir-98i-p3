import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  available: {
    type: String,
    required: true,
    enum: ['Sí', 'No'],
  },
  optionsFree: {
    type: String,
    required: true,
    enum: ['vegetarian', 'vegan', 'glutenFree'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model('Products', productSchema);
