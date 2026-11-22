import express from 'express';
import Review from '../models/Review.js';
import { initialReviews } from '../data/seedData.js';
import { getMongoStatus } from '../config/db.js';

const router = express.Router();

let memoryReviews = [...initialReviews];

// GET reviews
router.get('/', async (req, res) => {
  try {
    if (getMongoStatus()) {
      const items = await Review.find().sort({ createdAt: -1 });
      if (items.length > 0) {
        return res.json({ success: true, count: items.length, data: items, source: 'mongodb' });
      }
    }
    res.json({ 
      success: true, 
      count: memoryReviews.length, 
      stats: {
        averageRating: 4.9,
        totalReviews: 248,
        tripAdvisorRating: 4.8,
        googleRating: 4.9
      },
      data: memoryReviews, 
      source: 'memory' 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST review
router.post('/', async (req, res) => {
  try {
    const { author, rating, comment, dishRecommended, source } = req.body;
    if (!author || !rating || !comment) {
      return res.status(400).json({ success: false, message: 'Author, rating, and comment are required.' });
    }

    const reviewObj = {
      id: `rev-${Date.now()}`,
      author,
      rating: Number(rating),
      source: source || 'Verified Guest',
      date: 'Just now',
      title: 'Dine-in Experience',
      comment,
      dishRecommended: dishRecommended || 'Signature Himalayan Spread',
      verifiedVisit: true,
      createdAt: new Date().toISOString()
    };

    if (getMongoStatus()) {
      try {
        const saved = await Review.create(reviewObj);
        return res.status(201).json({ success: true, data: saved });
      } catch (err) {
        console.warn('MongoDB review save failed:', err.message);
      }
    }

    memoryReviews.unshift(reviewObj);
    res.status(201).json({ success: true, data: reviewObj });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
