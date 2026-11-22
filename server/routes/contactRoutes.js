import express from 'express';

const router = express.Router();

let inquiries = [];

router.post('/', (req, res) => {
  const { name, email, phone, message, subject } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please provide name, email, and message.' });
  }

  const inquiry = {
    id: `inq-${Date.now()}`,
    name,
    email,
    phone: phone || '',
    subject: subject || 'General Dining Inquiry',
    message,
    date: new Date().toISOString()
  };

  inquiries.push(inquiry);

  res.status(201).json({
    success: true,
    message: 'Thank you! Your message has been received by the Banmanche courtyard hospitality team.',
    data: inquiry
  });
});

export default router;
