import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB, getMongoStatus } from './config/db.js';
import menuRoutes from './routes/menuRoutes.js';
import reservationRoutes from './routes/reservationRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import galleryRoutes from './routes/galleryRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Database connection (graceful fallback)
connectDB();

// API Routes
app.use('/api/menu', menuRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/contact', contactRoutes);

// System health status endpoint
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    restaurant: 'BANMANCHE - The Himalayan Courtyard',
    location: 'Kailashchaur Marg, Dhobichaur, Kathmandu, Nepal',
    coordinates: { lat: 27.71858, lng: 85.321298 },
    phone: ['+977 970-4804835', '+977 970-4804836'],
    mongoConnected: getMongoStatus(),
    timestamp: new Date().toISOString()
  });
});

// Serve production static build
const clientDistPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(clientDistPath, 'index.html'), (err) => {
    if (err) {
      res.status(200).send('BANMANCHE API is running. Build client or run Vite dev server.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`[BANMANCHE Server] Running on http://localhost:${PORT}`);
  console.log(`[BANMANCHE API] Endpoints available at http://localhost:${PORT}/api/`);
});
