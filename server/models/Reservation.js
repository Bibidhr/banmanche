import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  guests: { type: Number, required: true, min: 1, max: 30 },
  seatingArea: { 
    type: String, 
    required: true, 
    enum: ['courtyard', 'the-courtyard', 'dining-room', 'arak-bar', 'open-courtyard', 'heritage-indoor', 'hearth-dining', 'family-playroom'] 
  },
  specialRequests: { type: String, default: '' },
  status: { type: String, enum: ['confirmed', 'pending', 'cancelled'], default: 'confirmed' }
}, { timestamps: true });

export default mongoose.models.Reservation || mongoose.model('Reservation', reservationSchema);
