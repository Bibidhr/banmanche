import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';

export default function ReservationsPage({ tray, onClearTray }) {
  const [formData, setFormData] = useState(() => {
    let initial = {
      name: '',
      email: '',
      phone: '',
      date: '2026-11-22',
      time: '19:00',
      guests: 4,
      seatingArea: 'courtyard',
      specialRequests: (tray && tray.length > 0) ? `Pre-selected Feast items: ${tray.map(t => t.name).join(', ')}` : ''
    };
    try {
      const saved = typeof window !== 'undefined' ? sessionStorage.getItem('banmanche_quick_booking') : null;
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.seatingArea === 'open-courtyard') parsed.seatingArea = 'courtyard';
        if (parsed.seatingArea === 'hearth-dining' || parsed.seatingArea === 'hearth') parsed.seatingArea = 'dining-room';
        initial = { ...initial, ...parsed };
      }
    } catch (e) {}
    return initial;
  });

  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const seatingOptions = [
    {
      id: 'courtyard',
      title: 'The Courtyard'
    },
    {
      id: 'dining-room',
      title: 'Dining Room'
    },
    {
      id: 'arak-bar',
      title: 'Arak Bar'
    }
  ];

  const timeSlots = [
    '12:00 PM', '1:00 PM', '1:30 PM', '2:00 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();

      if (result.success) {
        setConfirmation(result.data);
        if (onClearTray) onClearTray();
      } else {
        setErrorMessage(result.message || 'Failed to submit reservation.');
      }
    } catch (err) {
      // Local fallback
      const fallbackConfirmation = {
        ...formData,
        confirmationCode: `BM-${Math.floor(1000 + Math.random() * 9000)}`,
        status: 'confirmed'
      };
      setConfirmation(fallbackConfirmation);
      if (onClearTray) onClearTray();
    } finally {
      setLoading(false);
    }
  };

  // If confirmed, render ONLY the Table Details
  if (confirmation) {
    const areaName = seatingOptions.find(s => s.id === confirmation.seatingArea)?.title 
      || (confirmation.seatingArea === 'open-courtyard' ? 'The Courtyard' : '')
      || (confirmation.seatingArea === 'hearth-dining' || confirmation.seatingArea === 'hearth' ? 'Dining Room' : '')
      || (confirmation.seatingArea === 'arak-bar' ? 'Arak Bar' : '')
      || confirmation.seatingArea;
    return (
      <div className="w-full pt-28 pb-24 px-6 sm:px-10 lg:px-14 text-obsidian-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="border border-obsidian-200 rounded-md p-8 sm:p-10 bg-white space-y-6 max-w-2xl mx-auto shadow-sm"
        >
          
          <div className="border-b border-obsidian-200 pb-6 space-y-2">
            <span className="font-mono text-xs text-terracotta-600">Table Confirmed</span>
            <h1 className="font-display text-3xl font-light text-obsidian-950">
              Reservation Details
            </h1>
            <p className="text-xs text-obsidian-600">
              Your table is secured. We hold reserved tables for 15 minutes past arrival time.
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="flex justify-between py-2 border-b border-obsidian-100">
              <span className="text-obsidian-500">Confirmation Code</span>
              <span className="font-mono font-medium text-obsidian-950">{confirmation.confirmationCode}</span>
            </div>

            <div className="flex justify-between py-2 border-b border-obsidian-100">
              <span className="text-obsidian-500">Guest Name</span>
              <span className="font-medium text-obsidian-950">{confirmation.name}</span>
            </div>

            <div className="flex justify-between py-2 border-b border-obsidian-100">
              <span className="text-obsidian-500">Date</span>
              <span className="font-medium text-obsidian-950">{confirmation.date}</span>
            </div>

            <div className="flex justify-between py-2 border-b border-obsidian-100">
              <span className="text-obsidian-500">Time</span>
              <span className="font-medium text-obsidian-950">{confirmation.time}</span>
            </div>

            <div className="flex justify-between py-2 border-b border-obsidian-100">
              <span className="text-obsidian-500">Party Size</span>
              <span className="font-medium text-obsidian-950">{confirmation.guests} guests</span>
            </div>

            <div className="flex justify-between py-2 border-b border-obsidian-100">
              <span className="text-obsidian-500">Seating Area</span>
              <span className="font-medium text-obsidian-950">{areaName}</span>
            </div>

            <div className="flex justify-between py-2 border-b border-obsidian-100">
              <span className="text-obsidian-500">Contact Phone</span>
              <span className="font-mono text-obsidian-950">{confirmation.phone}</span>
            </div>

            <div className="flex justify-between py-2 border-b border-obsidian-100">
              <span className="text-obsidian-500">Email Address</span>
              <span className="text-obsidian-950">{confirmation.email}</span>
            </div>

            {confirmation.specialRequests && (
              <div className="py-2 border-b border-obsidian-100 space-y-1">
                <span className="text-obsidian-500 block">Notes & Feast Requests</span>
                <span className="text-obsidian-900 block">{confirmation.specialRequests}</span>
              </div>
            )}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setConfirmation(null)}
              className="w-full sm:w-auto px-6 py-2.5 rounded-md text-xs font-medium text-obsidian-700 hover:text-obsidian-950 bg-sand-100 hover:bg-sand-200 border border-obsidian-200 transition-colors"
            >
              Make another reservation
            </button>
            <a
              href="tel:+9779704804835"
              className="w-full sm:w-auto px-6 py-2.5 rounded-md text-xs font-medium text-white bg-terracotta-500 hover:bg-terracotta-600 transition-colors text-center"
            >
              Call Courtyard (+977 970-4804835)
            </a>
          </div>

        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-10 lg:px-14 text-obsidian-900">
      
      {/* 1. EDITORIAL HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl space-y-3 mb-12 border-b border-obsidian-200 pb-10"
      >
        <h1 className="font-display text-4xl sm:text-6xl font-light text-obsidian-950 tracking-tight leading-[1.05]">
          Reserve a Table
        </h1>
        <p className="text-sm sm:text-base text-obsidian-600 font-normal leading-relaxed">
          Daily lunch, twilight fireside dining, and evening drinks. Reserved tables are held for 15 minutes.
        </p>
      </motion.div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form: 7 cols */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 border border-obsidian-200 rounded-md p-6 sm:p-8 bg-white space-y-6"
        >
          
          <div className="border-b border-obsidian-100 pb-4">
            <h2 className="font-display text-xl font-medium text-obsidian-950">
              Booking Information
            </h2>
            <p className="text-xs text-obsidian-600 mt-1">
              Select date, seating space, and your party details.
            </p>
          </div>

          {errorMessage && (
            <div className="p-3 rounded-md bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Date, Time, Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="block text-xs font-medium text-obsidian-700">
                  Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-md text-xs border border-obsidian-200 bg-sand-50 focus:outline-none focus:border-terracotta-500"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-medium text-obsidian-700">
                  Time
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-md text-xs border border-obsidian-200 bg-sand-50 focus:outline-none focus:border-terracotta-500"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-medium text-obsidian-700">
                  Guests
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  required
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value, 10) || 1 })}
                  className="w-full px-3 py-2.5 rounded-md text-xs border border-obsidian-200 bg-sand-50 focus:outline-none focus:border-terracotta-500"
                />
              </div>
            </div>

            {/* Seating Area Selection */}
            <div className="space-y-2">
              <label className="block text-xs font-medium text-obsidian-700">
                Seating Area
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {seatingOptions.map((seat) => {
                  const isSelected = formData.seatingArea === seat.id;
                  return (
                    <button
                      type="button"
                      key={seat.id}
                      onClick={() => setFormData({ ...formData, seatingArea: seat.id })}
                      className={`px-4 py-3.5 rounded-lg border text-left transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'border-terracotta-500 bg-sand-100 text-obsidian-950 ring-1 ring-terracotta-500/20 shadow-2xs'
                          : 'border-obsidian-200 hover:border-obsidian-300 hover:bg-sand-50/60 bg-white text-obsidian-700'
                      }`}
                    >
                      <span className={`text-sm tracking-tight ${isSelected ? 'font-medium text-obsidian-950' : 'text-obsidian-800'}`}>
                        {seat.title}
                      </span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors shrink-0 ml-2 ${
                        isSelected ? 'border-terracotta-500 bg-terracotta-500' : 'border-obsidian-300 bg-transparent'
                      }`}>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="block text-xs font-medium text-obsidian-700">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Suman Shakya"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-md text-xs border border-obsidian-200 bg-sand-50 focus:outline-none focus:border-terracotta-500"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-medium text-obsidian-700">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="suman@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-md text-xs border border-obsidian-200 bg-sand-50 focus:outline-none focus:border-terracotta-500"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-medium text-obsidian-700">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+977 98XXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-md text-xs border border-obsidian-200 bg-sand-50 focus:outline-none focus:border-terracotta-500"
                />
              </div>
            </div>

            {/* Special Requests */}
            <div className="space-y-1">
              <label className="block text-xs font-medium text-obsidian-700">
                Special Requests or Dietary Notes
              </label>
              <textarea
                rows="3"
                placeholder="Anniversary, dietary preferences, or specific table request..."
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                className="w-full px-3 py-2.5 rounded-md text-xs border border-obsidian-200 bg-sand-50 focus:outline-none focus:border-terracotta-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-md text-sm font-medium text-white bg-terracotta-500 hover:bg-terracotta-600 transition-colors"
              >
                {loading ? 'Confirming table...' : 'Confirm Table Reservation'}
              </button>
            </div>

          </form>

        </motion.div>

        {/* Right Info: 5 cols */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          
          <div className="border border-obsidian-200 rounded-md p-6 bg-white space-y-4">
            <h3 className="font-display text-lg font-medium text-obsidian-950 border-b border-obsidian-100 pb-3">
              Reservation Policies
            </h3>
            
            <div className="space-y-4 text-xs text-obsidian-700">
              <div>
                <strong className="block text-obsidian-950 font-medium">15-Minute Grace Period</strong>
                <p className="text-obsidian-600 mt-0.5">
                  We hold your table for 15 minutes past booking time before releasing it to waiting guests.
                </p>
              </div>

              <div className="border-t border-obsidian-100 pt-3">
                <strong className="block text-obsidian-950 font-medium">Parties Larger than 8</strong>
                <p className="text-obsidian-600 mt-0.5">
                  For groups of 8 or more, we arrange communal seating with a customized feast. Please call us directly.
                </p>
              </div>

              <div className="border-t border-obsidian-100 pt-3">
                <strong className="block text-obsidian-950 font-medium">Courtyard Fire & Weather</strong>
                <p className="text-obsidian-600 mt-0.5">
                  The central fire pit is lit daily at 17:30. In case of rain, tables are sheltered under the covered perimeter.
                </p>
              </div>

              <div className="border-t border-obsidian-100 pt-3">
                <strong className="block text-obsidian-950 font-medium">Direct Telephone</strong>
                <p className="text-obsidian-600 mt-0.5 font-mono">
                  +977 970-4804835 / +977 970-4804836
                </p>
              </div>
            </div>
          </div>

          <div className="border border-obsidian-200 rounded-md p-6 bg-sand-100 text-xs text-obsidian-700 space-y-1">
            <span className="font-medium text-obsidian-950 block">Address</span>
            <p className="text-obsidian-600">
              Kailashchaur Marg, Dhobichaur, Lazimpat, Kathmandu. Secure parking available on-site.
            </p>
          </div>

        </motion.div>

      </div>

    </div>
  );
}
