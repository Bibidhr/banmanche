import express from 'express';
import Gallery from '../models/Gallery.js';
import { initialGallery, initialEvents } from '../data/seedData.js';
import { getMongoStatus } from '../config/db.js';

const router = express.Router();

let memoryGallery = [...initialGallery];

// GET gallery items
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    let items = memoryGallery;
    if (category && category !== 'all') {
      items = items.filter(g => g.category === category);
    }
    res.json({
      success: true,
      count: items.length,
      data: items,
      events: initialEvents
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
