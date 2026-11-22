import express from 'express';
import Reservation from '../models/Reservation.js';
import { getMongoStatus } from '../config/db.js';

const router = express.Router();

let memoryReservations = [
  {
    id: "res-demo-1",
    name: "Aayush Sharma",
    email: "aayush@example.com",
    phone: "+977 9841234567",
    date: "2026-11-21",
    time: "19:30",
    guests: 4,
    seatingArea: "open-courtyard",
    specialRequests: "Fireside table please for anniversary celebration.",
    status: "confirmed",
    confirmationCode: "BM-COURT-8241",
    createdAt: new Date().toISOString()
  }
];

// POST create new reservation
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, date, time, guests, seatingArea, specialRequests } = req.body;

    if (!name || !email || !phone || !date || !time || !guests || !seatingArea) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, phone, date, time, guests, seating area.'
      });
    }

    const confirmationCode = `BM-${seatingArea.substring(0, 4).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newReservation = {
      name,
      email,
      phone,
      date,
      time,
      guests: Number(guests),
      seatingArea,
      specialRequests: specialRequests || '',
      status: 'confirmed',
      confirmationCode,
      createdAt: new Date().toISOString()
    };

    if (getMongoStatus()) {
      try {
        const saved = await Reservation.create(newReservation);
        return res.status(201).json({
          success: true,
          message: 'Reservation confirmed successfully at Banmanche The Himalayan Courtyard!',
          data: { ...saved.toObject(), confirmationCode }
        });
      } catch (err) {
        console.warn('MongoDB reservation save failed, falling back to memory store:', err.message);
      }
    }

    memoryReservations.unshift({ id: `res-${Date.now()}`, ...newReservation });

    return res.status(201).json({
      success: true,
      message: 'Reservation confirmed successfully at Banmanche The Himalayan Courtyard!',
      data: newReservation
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET all reservations
router.get('/', async (req, res) => {
  try {
    if (getMongoStatus()) {
      const dbReservations = await Reservation.find().sort({ createdAt: -1 });
      if (dbReservations.length > 0) {
        return res.json({ success: true, count: dbReservations.length, data: dbReservations });
      }
    }
    res.json({ success: true, count: memoryReservations.length, data: memoryReservations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
