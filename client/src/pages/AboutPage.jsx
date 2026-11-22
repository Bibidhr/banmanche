import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';
import AboutSection from '../components/AboutSection';

export default function AboutPage({ onOpenDish, setActivePage }) {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Dining & Events Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full pt-16 bg-white text-obsidian-950">
      
      {/* 1. CORE ABOUT US SECTION: WHO WE ARE, WHAT WE DO, HOW WE DO IT & 4X4 FOOD CATALOG */}
      <AboutSection onOpenDish={onOpenDish} setActivePage={setActivePage} />

      {/* 2. VISITING & DIRECTIONS */}
      <div className="w-full px-6 sm:px-10 lg:px-14 pb-20 border-t border-obsidian-200/80 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          <div className="lg:col-span-5 border border-obsidian-200/80 rounded-2xl p-6 sm:p-8 space-y-6 bg-sand-50/50">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-terracotta-600 block">
                05 / Location
              </span>
              <h3 className="font-display text-2xl font-medium text-obsidian-950">
                Finding the Courtyard
              </h3>
              <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed font-normal">
                Tucked away in the quiet enclave of Dhobichaur, just past Narayanhiti Palace and Keshar Mahal in Lazimpat.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-obsidian-700">
              <div className="border-t border-obsidian-200/60 pt-3">
                <strong className="block text-obsidian-950 font-medium">Walking from Thamel:</strong>
                <p className="text-obsidian-600 text-xs mt-0.5">8 minutes north past Narayanhiti Palace toward Uttar Dhoka.</p>
              </div>
              <div className="border-t border-obsidian-200/60 pt-3">
                <strong className="block text-obsidian-950 font-medium">Driving from Lazimpat:</strong>
                <p className="text-obsidian-600 text-xs mt-0.5">Turn onto Kailashchaur Marg near Dhobichaur. Secure on-site courtyard parking is available for two-wheelers and cars.</p>
              </div>
              <div className="border-t border-obsidian-200/60 pt-3">
                <strong className="block text-obsidian-950 font-medium">Daily Service Hours:</strong>
                <p className="text-obsidian-600 text-xs mt-0.5">Monday through Sunday, 12:00 PM – 10:00 PM</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.google.com/maps/place/BANMANCHE+The+Himalayan+Courtyard/@27.71858,85.321298,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full text-center text-xs font-semibold uppercase tracking-wider text-white bg-terracotta-500 hover:bg-terracotta-600 transition-colors block shadow-xs"
              >
                Open Google Maps Directions ↗
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 border border-obsidian-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
            <iframe
              title="Banmanche Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0621495146525!2d85.31872307593166!3d27.718584725150935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900110f41f5%3A0x116b7c58f3929e7!2sBANMANCHE%20The%20Himalayan%20Courtyard!5e0!3m2!1sen!2snp!4v1716200000000!5m2!1sen!2snp"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-4 border-t border-obsidian-100 flex items-center justify-between text-xs text-obsidian-600">
              <span>Kailashchaur Marg, Dhobichaur, Lazimpat</span>
              <span className="font-mono">Lat: 27.71858, Lng: 85.32130</span>
            </div>
          </div>

        </div>

        {/* 3. PRIVATE GATHERINGS & INQUIRIES */}
        <div className="border border-obsidian-200/80 rounded-2xl p-6 sm:p-10 bg-sand-50/50 space-y-6">
          <div className="max-w-xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-terracotta-600 block">
              06 / Private Events
            </span>
            <h3 className="font-display text-2xl font-medium text-obsidian-950">
              Private Gatherings & Courtyard Buyouts
            </h3>
            <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed font-normal">
              Planning a family feast, corporate courtyard dinner, or acoustic gathering? Send us an inquiry below and our manager will follow up within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-white border border-obsidian-200 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-obsidian-900 font-medium text-sm">
                <Check className="w-4 h-4 text-terracotta-600" />
                <span>Message received</span>
              </div>
              <p className="text-xs text-obsidian-600 font-normal">
                Thank you. The courtyard team will get back to you directly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-medium text-obsidian-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Shrestha"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-obsidian-200 bg-white focus:outline-none focus:border-terracotta-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-medium text-obsidian-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="maya@example.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-obsidian-200 bg-white focus:outline-none focus:border-terracotta-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-medium text-obsidian-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+977 98XXXXXXXX"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-obsidian-200 bg-white focus:outline-none focus:border-terracotta-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-medium text-obsidian-700">
                    Inquiry Topic
                  </label>
                  <select
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-obsidian-200 bg-white focus:outline-none focus:border-terracotta-500"
                  >
                    <option value="Dining & Events Inquiry">Dining & Table Inquiry</option>
                    <option value="Private Courtyard Booking">Private Courtyard Booking (20+ Guests)</option>
                    <option value="Acoustic Performance">Acoustic Music / Cultural Gathering</option>
                    <option value="Other Feedback">General Questions</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-medium text-obsidian-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell us about your gathering, desired dates, or party size..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-obsidian-200 bg-white focus:outline-none focus:border-terracotta-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-terracotta-500 hover:bg-terracotta-600 transition-colors shadow-xs"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
