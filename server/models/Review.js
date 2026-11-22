import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  author: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  source: { type: String, enum: ['Google', 'TripAdvisor', 'In-House'], default: 'Google' },
  avatar: { type: String },
  date: { type: String, required: true },
  title: { type: String },
  comment: { type: String, required: true },
  dishRecommended: { type: String },
  verifiedVisit: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.models.Review || mongoose.model('Review', reviewSchema);
