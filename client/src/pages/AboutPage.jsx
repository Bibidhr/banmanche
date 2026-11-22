import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Check, Mountain, ArrowRight } from 'lucide-react';

export default function AboutPage({ setActivePage }) {
  const [selectedTerroir, setSelectedTerroir] = useState(0);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Dining & Events Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const terroirs = [
    {
      id: "dolpa",
      region: "Dolpa Ridge",
      altitude: "3,200m ASL",
      element: "Wild Timmur Pepper & Rock Salt",
      description: "Harvested from thorny mountain shrubs clinging to dry rocky screes above the treeline. Imparts a sharp citrus aroma and a gentle, electric floral numbness essential to our sekuwa and charred tomato achars.",
      profile: "Grapefruit zest, crushed pine, electric warmth",
      dishPairing: "Wood-Charred Himalayan Sekuwa & Fire Achar"
    },
    {
      id: "mustang",
      region: "Mustang Valley",
      altitude: "2,800m ASL",
      element: "Tartary Buckwheat & Wild Honey",
      description: "Grown in high wind-swept Himalayan plateaus irrigated by glacial snowmelt. Ground into dark, rustic nutty flour for hand-pulled mountain crepes, tartlets, and paired with unfiltered amber forest honey.",
      profile: "Toasted hazelnut, deep earthy malt, wildflower sweetness",
      dishPairing: "Wild Honey & Buckwheat Tartlet"
    },
    {
      id: "ilam",
      region: "Ilam Hills",
      altitude: "1,800m ASL",
      element: "First-Flush Orthodox Black Tea",
      description: "Hand-plucked tender leaf buds misted by afternoon cloud banks in Eastern Nepal. Certified organic, whole-leaf orthodox teas brewed in clear glass and churned into rich Tibetan Po Cha.",
      profile: "Muscatel grape, fresh alpine mint, creamy mountain ghee",
      dishPairing: "Traditional Tibetan Po Cha & First-Flush Tea"
    },
    {
      id: "nagaland",
      region: "Naga Highlands",
      altitude: "1,400m ASL",
      element: "Hardwood Oak Curing & Bamboo Shoots",
      description: "Cured by traditional woodsmoke above domestic hearth fires, then simmered for hours with naturally fermented wild forest bamboo shoots and fiery mountain bird's eye chilies.",
      profile: "Deep resinous oak smoke, tangy fermented brightness, slow heat",
      dishPairing: "Naga Smoked Pork in Cast Iron"
    }
  ];

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
    <div className="w-full min-h-screen bg-[#FAF8F5] text-obsidian-950 relative overflow-hidden pb-32">
      
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: FULL-WIDTH ATMOSPHERIC HEADER (VINOLIVA STYLE)             */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[52vh] min-h-[420px] max-h-[560px] flex flex-col justify-end overflow-hidden bg-obsidian-950">
        
        {/* Full-bleed background image with dark atmospheric exposure */}
        <div className="absolute inset-0 z-0">
          <img
            src="/outdoor.jpg"
            alt="Sunlit open-air courtyard with patio umbrellas and brick pavers at Banmanche"
            className="w-full h-full object-cover object-[center_60%]"
          />
          {/* Top gradient for transparent navbar legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black/75" />
          {/* Bottom & Left gradient for header contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
        </div>

        {/* Header Stack Inside the Picture (aligned left, matching Vinoliva reference) */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 pb-12 sm:pb-16">
          <div className="space-y-2 text-left">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-sand-200/90 font-medium block">
              BANMANCHE – THE HIMALAYAN COURTYARD
            </span>
            <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-white uppercase leading-none drop-shadow-sm">
              ABOUT US
            </h1>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* MINIMAL BACKGROUND DESIGNS: HIMALAYAN CONTOURS & ARCHITECTURAL GRID       */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden opacity-[0.035]">
        <svg className="w-full h-full" viewBox="0 0 1440 1800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200 C300 120, 600 320, 1000 180 C1300 80, 1500 280, 1600 220" stroke="#000000" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M-100 350 C250 280, 700 480, 1100 320 C1350 240, 1550 420, 1600 380" stroke="#000000" strokeWidth="2.5" />
          <path d="M-100 520 C350 460, 650 640, 950 500 C1250 400, 1450 600, 1600 540" stroke="#000000" strokeWidth="1.5" />
          <path d="M-100 800 C400 700, 800 950, 1200 800 C1400 720, 1500 880, 1600 820" stroke="#000000" strokeWidth="2" strokeDasharray="8 8" />
          <path d="M-100 1100 C300 1020, 700 1220, 1050 1100 C1350 1000, 1500 1180, 1600 1120" stroke="#000000" strokeWidth="3" />
          <path d="M-100 1400 C450 1300, 850 1550, 1250 1380 C1450 1300, 1550 1480, 1600 1420" stroke="#000000" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Subtle Latitude & Longitude Guides */}
          <line x1="200" y1="0" x2="200" y2="1800" stroke="#000000" strokeWidth="0.8" />
          <line x1="720" y1="0" x2="720" y2="1800" stroke="#000000" strokeWidth="0.8" />
          <line x1="1240" y1="0" x2="1240" y2="1800" stroke="#000000" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 pt-16 sm:pt-24 space-y-24 sm:space-y-32">
        
        {/* ========================================================================= */}
        {/* 2. THE MOUNTAIN FIREKEEPER IN KATHMANDU: START STORY FROM THE MIDDLE      */}
        {/* ========================================================================= */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          <div className="space-y-4">
            <h2 className="font-display text-3xl sm:text-5xl font-light text-obsidian-950 tracking-tight leading-[1.12]">
              The Mountain Firekeeper in Kathmandu
            </h2>
            <div className="w-12 h-0.5 bg-terracotta-500 mx-auto" />
          </div>

          <div className="space-y-5 text-base sm:text-lg text-obsidian-700 leading-relaxed font-normal text-center">
            <p>
              In high Himalayan lore, the <strong>Banmanche</strong> is the guardian of the ridge forests. When biting blizzards swept the mountain passes, salt traders, herders, and pilgrims searched for the Banmanche's glowing hearth—a welcoming fire that never went out, where travelers from distant valleys could thaw their hands, break bread, and find sanctuary.
            </p>
            <p>
              We built Banmanche in Kathmandu to carry that exact hospitality forward. Tucked away on Kailashchaur Marg in Dhobichaur, just past Narayanhiti Palace, our courtyard is an open-air refuge shielded from city noise—a place where the warmth of cured firewood embers brings people together around honest mountain cooking.
            </p>
          </div>

          {/* Architecture Details Row (Centered) */}
          <div className="pt-8 border-t border-obsidian-200/80 max-w-2xl mx-auto grid grid-cols-3 gap-6 text-center text-xs font-mono text-obsidian-600">
            <div>
              <strong className="block text-sm sm:text-base text-obsidian-950 font-sans font-medium">85 Seats</strong>
              Courtyard, hearth & bar
            </div>
            <div>
              <strong className="block text-sm sm:text-base text-obsidian-950 font-sans font-medium">Sal & Oak</strong>
              Cured firewood embers
            </div>
            <div>
              <strong className="block text-sm sm:text-base text-obsidian-950 font-sans font-medium">Dhobichaur</strong>
              Uttar Dhoka, Lazimpat
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. CONTINUING THE STORY: FIVE MOUNTAIN FOODWAYS                           */}
        {/* ========================================================================= */}
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8 pt-4">
          
          <h3 className="font-display text-2xl sm:text-4xl font-light text-obsidian-950 tracking-tight leading-tight">
            Gathering Five Mountain Foodways Under One Sky
          </h3>

          <div className="space-y-4 text-base sm:text-lg text-obsidian-700 leading-relaxed font-normal text-center">
            <p>
              The Himalayan mountain arc stretches thousands of kilometers across Nepal, Tibet, Bhutan, and the tribal hill ranges of Nagaland and Meghalaya. Separated by peaks and rivers, these highland cultures share an elemental way of cooking: slow braising over hardwood coals, preservation through smoking and fermentation, and food shared family-style around an open fire.
            </p>
            <p>
              We bring these distinct culinary traditions onto a single courtyard table. We never rush with industrial gas burners—our bone broths and pork curries simmer for hours over cured sal and oak coals in heavy iron pans. Fluffy Tingmo rolls arrive steaming from woven bamboo baskets, and cocktails are infused with lapsi and mountain pine.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-menu text-obsidian-800">
            <span>Nagaland Smoked Pork</span>
            <span className="text-terracotta-500">•</span>
            <span>Bhutanese Ema Datshi</span>
            <span className="text-terracotta-500">•</span>
            <span>Tibetan Tingmo & Mokthuk</span>
            <span className="text-terracotta-500">•</span>
            <span>Kathmandu Hearth Sekuwa</span>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. SURPRISE: THE FOUR MOUNTAIN TERROIRS (INTERACTIVE ELEVATION RITUAL)    */}
        {/* ========================================================================= */}
        <div className="border-t border-obsidian-200/80 pt-16 sm:pt-20">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
            <h3 className="font-display text-2xl sm:text-4xl font-light text-obsidian-950 tracking-tight">
              The Four Highland Terroirs
            </h3>
            <p className="text-xs sm:text-sm text-obsidian-600 font-normal leading-relaxed">
              Explore the altitudes and wild microclimates where our core kitchen harvests originate. Click a region to inspect its terroir.
            </p>
          </div>

          {/* Terroir Tab Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {terroirs.map((t, idx) => {
              const isSelected = selectedTerroir === idx;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTerroir(idx)}
                  className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-obsidian-950 text-white border-obsidian-950 shadow-sm'
                      : 'bg-white/80 text-obsidian-800 border-obsidian-200/70 hover:border-obsidian-300 hover:bg-white'
                  }`}
                >
                  <span className={`text-[10px] font-mono uppercase tracking-wider block ${
                    isSelected ? 'text-sand-300' : 'text-terracotta-600'
                  }`}>
                    {t.altitude}
                  </span>
                  <strong className="font-display text-sm sm:text-base font-medium block mt-1">
                    {t.region}
                  </strong>
                </button>
              );
            })}
          </div>

          {/* Interactive Terroir Card with Rich Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={terroirs[selectedTerroir].id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-10 rounded-2xl bg-white border border-obsidian-200/80 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider bg-terracotta-100 text-terracotta-800 font-medium">
                    {terroirs[selectedTerroir].altitude}
                  </span>
                  <span className="font-menu text-lg sm:text-xl text-obsidian-950">
                    {terroirs[selectedTerroir].element}
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm text-obsidian-700 leading-relaxed font-normal">
                  {terroirs[selectedTerroir].description}
                </p>

                <div className="pt-3 border-t border-obsidian-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="text-obsidian-500 font-mono text-[10px] uppercase block">Sensory Profile</span>
                    <strong className="text-obsidian-900 font-sans font-medium">{terroirs[selectedTerroir].profile}</strong>
                  </div>
                  <div>
                    <span className="text-obsidian-500 font-mono text-[10px] uppercase block">Hearth Pairing</span>
                    <strong className="text-terracotta-600 font-sans font-medium">{terroirs[selectedTerroir].dishPairing}</strong>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 border-l border-obsidian-100 pl-0 md:pl-8 space-y-3 text-center md:text-left">
                <div className="w-12 h-12 rounded-xl bg-sand-50 border border-obsidian-200/60 flex items-center justify-center text-terracotta-600 mx-auto md:mx-0">
                  <Mountain className="w-6 h-6" />
                </div>
                <h4 className="font-display text-base font-medium text-obsidian-950">
                  Living Mountain Terroir
                </h4>
                <p className="text-[11px] text-obsidian-600 leading-relaxed">
                  We source unadulterated harvests directly from smallholder cooperatives across the Himalayas.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick CTA to Full Menu */}
          {setActivePage && (
            <div className="mt-12 text-center">
              <button
                onClick={() => {
                  setActivePage('menu');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-terracotta-600 hover:text-terracotta-700 transition-colors cursor-pointer"
              >
                <span>Explore Full Menu Dishes on Hover</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>

        {/* ========================================================================= */}
        {/* 4. VISITING THE COURTYARD & PRACTICAL DIRECTIONS                          */}
        {/* ========================================================================= */}
        <div className="border-t border-obsidian-200/80 pt-16 sm:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
            
            <div className="lg:col-span-5 border border-obsidian-200/80 rounded-2xl p-6 sm:p-8 space-y-6 bg-white shadow-xs">
              <div className="space-y-1">
                <h3 className="font-display text-2xl font-medium text-obsidian-950">
                  Finding the Courtyard
                </h3>
                <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed font-normal">
                  Tucked away in the quiet enclave of Dhobichaur, just past Narayanhiti Palace and Keshar Mahal in Lazimpat.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-obsidian-700">
                <div className="border-t border-obsidian-100 pt-3">
                  <strong className="block text-obsidian-950 font-medium">Walking from Thamel:</strong>
                  <p className="text-obsidian-600 text-xs mt-0.5">8 minutes north past Narayanhiti Palace toward Uttar Dhoka.</p>
                </div>
                <div className="border-t border-obsidian-100 pt-3">
                  <strong className="block text-obsidian-950 font-medium">Driving from Lazimpat:</strong>
                  <p className="text-obsidian-600 text-xs mt-0.5">Turn onto Kailashchaur Marg near Dhobichaur. Secure on-site courtyard parking is available for two-wheelers and cars.</p>
                </div>
                <div className="border-t border-obsidian-100 pt-3">
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

          {/* 5. PRIVATE GATHERINGS & INQUIRIES */}
          <div className="border border-obsidian-200/80 rounded-2xl p-6 sm:p-10 bg-white shadow-xs space-y-6">
            <div className="max-w-xl space-y-2">
              <h3 className="font-display text-2xl font-medium text-obsidian-950">
                Private Gatherings & Courtyard Buyouts
              </h3>
              <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed font-normal">
                Planning a family feast, corporate courtyard dinner, or acoustic gathering? Send us an inquiry below and our manager will follow up within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-sand-50 border border-obsidian-200 rounded-xl space-y-2">
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
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-obsidian-200 bg-sand-50/50 focus:outline-none focus:border-terracotta-500"
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
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-obsidian-200 bg-sand-50/50 focus:outline-none focus:border-terracotta-500"
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
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-obsidian-200 bg-sand-50/50 focus:outline-none focus:border-terracotta-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-obsidian-700">
                      Inquiry Topic
                    </label>
                    <select
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-obsidian-200 bg-sand-50/50 focus:outline-none focus:border-terracotta-500"
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
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-obsidian-200 bg-sand-50/50 focus:outline-none focus:border-terracotta-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-terracotta-500 hover:bg-terracotta-600 transition-colors shadow-xs cursor-pointer"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
