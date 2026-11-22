import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { 
    type: String, 
    required: true, 
    enum: ['courtyard-ambiance', 'culinary-art', 'arak-bar', 'live-events', 'kids-playroom'] 
  },
  imageUrl: { type: String, required: true },
  caption: { type: String, required: true },
  aspect: { type: String, default: 'landscape' }
}, { timestamps: true });

export default mongoose.models.Gallery || mongoose.model('Gallery', gallerySchema);
