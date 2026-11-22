import express from 'express';
import Menu from '../models/Menu.js';
import { initialMenu } from '../data/seedData.js';
import { getMongoStatus } from '../config/db.js';

const router = express.Router();

// In-memory cache fallback
let memoryMenu = [...initialMenu];

// GET all menu items
router.get('/', async (req, res) => {
  try {
    const { category, dietary, search } = req.query;
    
    if (getMongoStatus()) {
      let query = {};
      if (category && category !== 'all') query.category = category;
      if (dietary && dietary !== 'all') query.dietary = dietary;
      if (search) {
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { region: { $regex: search, $options: 'i' } }
        ];
      }
      const items = await Menu.find(query);
      if (items.length > 0) {
        return res.json({ success: true, count: items.length, data: items, source: 'mongodb' });
      }
    }

    // In-memory filtering fallback
    let filtered = memoryMenu;
    if (category && category !== 'all') {
      filtered = filtered.filter(item => item.category === category);
    }
    if (dietary && dietary !== 'all') {
      filtered = filtered.filter(item => item.dietary === dietary);
    }
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q) ||
        item.region.toLowerCase().includes(q)
      );
    }

    return res.json({ success: true, count: filtered.length, data: filtered, source: 'memory' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET single item
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (getMongoStatus()) {
      const item = await Menu.findById(id).catch(() => null);
      if (item) return res.json({ success: true, data: item });
    }
    const item = memoryMenu.find(m => m.id === id);
    if (!item) return res.status(404).json({ success: false, message: 'Item not found' });
    res.json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
