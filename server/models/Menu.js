import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nepaliName: { type: String },
  category: { 
    type: String, 
    required: true, 
    enum: ['pan-himalayan', 'northeast-tribal', 'nepali-classics', 'arak-bar', 'courtyard-sweets'] 
  },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  region: { type: String, required: true }, // 'Bhutan', 'Tibet', 'Nagaland', 'Meghalaya', 'Nepal'
  dietary: { type: String, enum: ['veg', 'non-veg'], required: true },
  spicyLevel: { type: Number, min: 0, max: 3, default: 1 },
  isSignature: { type: Boolean, default: false },
  image: { type: String, required: true },
  tags: [{ type: String }]
}, { timestamps: true });

export default mongoose.models.Menu || mongoose.model('Menu', menuSchema);
