import mongoose from 'mongoose';

const Product = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  content: { type: String, required: true },
  isActive: {
    type: Boolean,
    default: true,
  },
});
export default mongoose.model('Product', Product);
