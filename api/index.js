import express from 'express';
import cors from 'cors';
import { initialMenu, initialReviews, initialGallery } from '../server/data/seedData.js';

const app = express();
app.use(cors());
app.use(express.json());

// System health status
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    restaurant: 'BANMANCHE - The Himalayan Courtyard',
    location: 'Kailashchaur Marg, Dhobichaur, Kathmandu, Nepal',
    coordinates: { lat: 27.71858, lng: 85.321298 },
    phone: ['+977 970-4804835', '+977 970-4804836'],
    timestamp: new Date().toISOString()
  });
});

// Menu endpoint
app.get('/api/menu', (req, res) => {
  res.json({ success: true, count: initialMenu.length, data: initialMenu });
});

// Reviews endpoint
app.get('/api/reviews', (req, res) => {
  res.json({ success: true, count: initialReviews.length, data: initialReviews });
});

// Gallery endpoint
app.get('/api/gallery', (req, res) => {
  res.json({ success: true, count: initialGallery.length, data: initialGallery });
});

// Reservations endpoint
app.post('/api/reservations', (req, res) => {
  try {
    const { name, phone, email, guests, date, time, seatingArea, specialRequests } = req.body;
    const reservation = {
      _id: 'bm_' + Date.now(),
      name: (name || 'Guest').trim(),
      phone: (phone || '').trim(),
      email: (email || '').trim(),
      guests: Number(guests) || 2,
      date: date || '2026-11-22',
      time: time || '19:00',
      seatingArea: seatingArea || 'courtyard',
      specialRequests: specialRequests || '',
      confirmationCode: `BM-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };
    return res.status(201).json({
      success: true,
      message: 'Table reservation confirmed successfully at BANMANCHE The Himalayan Courtyard!',
      data: reservation
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Failed to process reservation' });
  }
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Inquiry received. The courtyard manager will contact you within 24 hours.'
  });
});

app.use('/api', (req, res) => {
  res.status(404).json({ success: false, error: 'API endpoint not found' });
});

export default app;
