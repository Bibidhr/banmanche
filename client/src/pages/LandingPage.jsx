import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Calendar, Clock, Users, MapPin, Sparkles } from 'lucide-react';

export default function LandingPage({ setActivePage, onOpenDish, onAddToTray, menuItems, reviews }) {
  const [quickDate, setQuickDate] = useState('2026-11-22');
  const [quickTime, setQuickTime] = useState('19:00');
  const [quickGuests, setQuickGuests] = useState('4');
  const [quickArea, setQuickArea] = useState('courtyard');

  const [barImageIndex, setBarImageIndex] = useState(0);

  const barImages = [
    { url: '/hero-bar.jpg', label: 'Bar & Courtyard' },
    { url: '/arak-bar-interior.jpg', label: 'Teak Counter' }
  ];

  const googleReviews = [
    {
      id: "g1",
      author: "Dennis Shrestha",
      role: "Local Guide · 9 reviews",
      title: "Peaceful Dining While Kids Play",
      comment: "What a fantastic place! The food was delicious, the atmosphere warm and relaxing, and the open courtyard made it the perfect spot in Lazimpat. You can feel the genuine love put into this heritage space."
    },
    {
      id: "g2",
      author: "Nijendra Shrestha",
      role: "Local Guide · 93 reviews",
      title: "Traditional Culture & Modern Comfort",
      comment: "An experience that exceeded my expectations. Beautifully designed space that perfectly captures the essence of traditional Himalayan culture while maintaining modern comfort and flavors."
    },
    {
      id: "g3",
      author: "Tirsana Magar",
      role: "Local Guide · 146 reviews",
      title: "Spacious Atmosphere & Good Tibetan Selection",
      comment: "The atmosphere is totally different—peaceful, spacious, and enjoyable. Plenty of parking, excellent courtyard ambience, and the ARAK bar is definitely worth checking out."
    },
    {
      id: "g4",
      author: "Pratima Rayamajhi",
      role: "Verified Google Diner",
      title: "Authentic Flavors & Relaxing Courtyard",
      comment: "One of the best dining courtyards in Kathmandu. The food has authentic mountain seasoning and the outdoor fires at night make it truly unforgettable."
    }
  ];

  const tripAdvisorReviews = [
    {
      id: "t1",
      author: "Karishma M.",
      role: "Verified Diner",
      title: "Authentic & Flavorful Nepali Thali",
      comment: "Tucked away in the heart of the city, Banmanche offers the most authentic and flavorful Nepali thali set you’ll find in Kathmandu. From the perfectly spiced black daal with local ghee to tender mutton curry and dalle achar. A hidden courtyard gem!"
    },
    {
      id: "t2",
      author: "Jonathan S.",
      role: "Trekker from USA",
      title: "A Relaxing Oasis After Our Trek",
      comment: "We came for trekking and were looking for a place to relax for the evening with good food, drinks and environment—and did we ever find the perfect spot! Vibrant courtyard energy, ambient fires, and amazing botanical cocktails."
    },
    {
      id: "t3",
      author: "Urgen Jimmy",
      role: "Business Traveler",
      title: "Mushroom & Spinach Datshi Crostini",
      comment: "An amazing dining experience at Ban Manche! The restaurant has a lovely courtyard setting and the service was top-notch. Fresh, authentic flavors and fantastic drinks. Insider tip: try the mushroom spinach datshi!"
    },
    {
      id: "t4",
      author: "Suren T.",
      role: "Cocktail Enthusiast",
      title: "Inventive Cocktails at the Arak Bar",
      comment: "I had an amazing experience at Banmanche. The atmosphere was beautiful and the food and drinks were excellent. Outstanding service from bartender Ram with crafted mountain spirits that made our evening!"
    },
    {
      id: "t5",
      author: "Kamal M.",
      role: "Family Diner",
      title: "Authentic Himalayan Food & Ample Parking",
      comment: "Authentic Himalayan food with great service and atmosphere. Highly recommend to all travelers and locals. Dedicated courtyard parking right on the premises is so convenient in Lazimpat."
    }
  ];

  const seatingOptions = [
    {
      id: 'courtyard',
      title: 'The Courtyard',
    },
    {
      id: 'dining-room',
      title: 'Dining Room',
    },
    {
      id: 'arak-bar',
      title: 'Arak Bar',
    }
  ];

  const handleQuickBook = (e) => {
    e.preventDefault();
    try {
      sessionStorage.setItem('banmanche_quick_booking', JSON.stringify({
        date: quickDate,
        time: quickTime,
        guests: quickGuests === '8+' ? 8 : parseInt(quickGuests, 10) || 4,
        seatingArea: quickArea === 'courtyard' ? 'courtyard' : (quickArea === 'dining-room' || quickArea === 'hearth' ? 'dining-room' : 'arak-bar')
      }));
    } catch (err) {}
    setActivePage('reservations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white">

      {/* ========================================================================= */}
      {/* 1. HERO: LEFT-ALIGNED VINOLIVA TEXT STACK & FULL-VIEWPORT                */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen h-[100dvh] flex flex-col justify-between overflow-hidden bg-petrol-950 pt-28 sm:pt-32 pb-8 sm:pb-12">
        
        {/* Full-bleed background image with clear, dark architectural exposure */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.img
            src="/hero-bar.jpg"
            alt="Courtyard and arak bar in Kathmandu"
            initial={{ scale: 1.08, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-petrol-950/75" />
        </div>

        {/* Hero Content: Full-width alignment matching navbar */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 my-auto">
          <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-10 text-left flex flex-col items-start pl-11 sm:pl-12">
            
            {/* 1. Eyebrow */}
            <motion.h6
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm font-mono tracking-[0.22em] text-terracotta-400 uppercase font-semibold"
            >
              WELCOME TO BANMANCHE THE HIMALAYAN COURTYARD
            </motion.h6>

            {/* 2. Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.05] uppercase max-w-4xl"
            >
              FINE DINING
            </motion.h1>

            {/* 3. Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-lg text-sand-300 font-sans font-light tracking-wide max-w-xl leading-relaxed"
            >
              Offering luxury fine dining experience with authentic Himalayan, Tibetan, Bhutanese, and Northeast tribal cuisines.
            </motion.p>

            {/* 4. CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 sm:pt-4"
            >
              <button
                onClick={() => { setActivePage('reservations'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-md text-xs sm:text-sm font-semibold tracking-widest uppercase text-white bg-terracotta-500 hover:bg-terracotta-600 transition-colors shadow-md cursor-pointer"
              >
                MAKE A RESERVATION
              </button>
            </motion.div>

          </div>
        </div>

        {/* Factual bottom bar: Full width matching navbar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="relative z-10 w-full px-6 sm:px-10 lg:px-14"
        >
          <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm text-sand-300 text-left">
            <div>
              <span className="block font-medium text-white">Daily Hours</span>
              <span className="text-sand-400">12:00 PM – 10:00 PM</span>
            </div>
            <div>
              <span className="block font-medium text-white">Courtyard Location</span>
              <span className="text-sand-400">Kailashchaur Marg, Lazimpat, Kathmandu</span>
            </div>
            <div>
              <span className="block font-medium text-white">Kitchen Hearth</span>
              <span className="text-sand-400">Live oak & sal wood hearth cooking</span>
            </div>
          </div>
        </motion.div>

      </section>

      {/* ========================================================================= */}
      {/* 2. WHAT OUR CLIENTS SAY (FULL-BLEED EDGE-TO-EDGE WITH REAL HIMALAYAS PHOTO) */}
      {/* ========================================================================= */}
      <section className="w-full relative pt-16 sm:pt-20 pb-24 sm:pb-28 px-0 bg-[#FCFAF7] text-obsidian-950 overflow-hidden border-b border-obsidian-200/80">
        
        {/* Real Himalayan Mountain Background Image */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
          <img
            src="/himalayas-panorama.jpg"
            alt="Himalayan Mountain Range"
            className="w-full h-full object-cover object-bottom opacity-[0.35] filter grayscale contrast-125"
          />
          {/* Subtle warm wash ensuring pristine readability and pure white atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FCFAF7] via-[#FCFAF7]/50 to-[#FCFAF7]" />
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center max-w-2xl mx-auto space-y-3 mb-8 sm:mb-9"
        >
          <span className="text-xs font-mono text-terracotta-600 uppercase tracking-widest block font-medium">
            VERIFIED EXPERIENCES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-obsidian-950 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-xs sm:text-sm text-obsidian-600 font-sans tracking-wide">
            Live impressions from our courtyard diners on Google and TripAdvisor
          </p>
        </motion.div>

        {/* Dual Marquee Container with Generous Vertical Space */}
        <div className="relative z-10 w-full space-y-20 sm:space-y-28 overflow-hidden">

          {/* STRIP 1: GOOGLE REVIEWS (SCROLLING LEFT TO RIGHT WITH SEAMLESS EDGE MASK) */}
          <div className="overflow-hidden py-1 marquee-mask">
            <div className="animate-marquee-ltr flex gap-5">
              {[...googleReviews, ...googleReviews, ...googleReviews, ...googleReviews].map((rev, idx) => (
                <div
                  key={`google-${idx}`}
                  className="w-[340px] sm:w-[400px] shrink-0 bg-white rounded-2xl border border-obsidian-200/80 p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {/* Header: Google Logo + Label & 5 Stars */}
                    <div className="flex items-center justify-between gap-2 pb-2 border-b border-obsidian-100">
                      <div className="flex items-center gap-2">
                        {/* Google Logo SVG */}
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                        </svg>
                        <span className="text-xs font-semibold text-obsidian-900 tracking-wide font-sans">
                          Google Review
                        </span>
                      </div>
                      <div className="flex items-center gap-0.5 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                    </div>

                    <h4 className="font-display text-sm sm:text-base font-semibold text-obsidian-950 tracking-tight line-clamp-1">
                      "{rev.title}"
                    </h4>

                    <p className="text-xs sm:text-[13px] text-obsidian-600 font-normal leading-relaxed line-clamp-3">
                      "{rev.comment}"
                    </p>
                  </div>

                  {/* Reviewer Initial Avatar & Name (No role tags) */}
                  <div className="pt-3 border-t border-obsidian-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-sand-200/90 text-obsidian-900 font-bold text-xs flex items-center justify-center font-sans ring-1 ring-obsidian-300/60 shadow-2xs shrink-0">
                      {rev.author.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-xs font-semibold text-obsidian-950 font-sans tracking-tight">
                      {rev.author}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE AUTHENTIC AGGREGATE RATINGS BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-4"
          >
            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-obsidian-200/90 shadow-xs hover:shadow-md transition-shadow">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-semibold text-sm text-obsidian-950">4.2</span>
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < 4 ? 'fill-amber-500 text-amber-500' : 'fill-amber-500/30 text-amber-500/40'}`} />
                  ))}
                </div>
              </div>
              <span className="text-xs text-obsidian-600 font-sans font-medium border-l border-obsidian-200 pl-3">
                200+ Google Reviews
              </span>
            </div>

            {/* Subtle Divider dot */}
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-obsidian-300" />

            {/* TripAdvisor Rating Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-obsidian-200/90 shadow-xs hover:shadow-md transition-shadow">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                <circle cx="6.5" cy="12" r="4.5" stroke="#00AA6C" strokeWidth="1.8" fill="#FFFFFF"/>
                <circle cx="17.5" cy="12" r="4.5" stroke="#00AA6C" strokeWidth="1.8" fill="#FFFFFF"/>
                <circle cx="6.5" cy="12" r="1.8" fill="#000000"/>
                <circle cx="17.5" cy="12" r="1.8" fill="#000000"/>
                <path d="M12 7.5c-2.5 0-4.5 1.2-5.5 3h11c-1-1.8-3-3-5.5-3z" fill="#00AA6C"/>
                <polygon points="12,13 10.5,15.5 13.5,15.5" fill="#00AA6C"/>
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-semibold text-sm text-obsidian-950">4.9</span>
                <div className="flex items-center gap-1 text-emerald-600">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="w-2.5 h-2.5 rounded-full inline-block bg-[#00AA6C]" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-obsidian-600 font-sans font-medium border-l border-obsidian-200 pl-3">
                61 TripAdvisor Reviews
              </span>
            </div>
          </motion.div>

          {/* STRIP 2: TRIPADVISOR REVIEWS (SCROLLING RIGHT TO LEFT WITH SEAMLESS EDGE MASK) */}
          <div className="overflow-hidden py-1 marquee-mask">
            <div className="animate-marquee-rtl flex gap-5">
              {[...tripAdvisorReviews, ...tripAdvisorReviews, ...tripAdvisorReviews, ...tripAdvisorReviews].map((rev, idx) => (
                <div
                  key={`tripadvisor-${idx}`}
                  className="w-[340px] sm:w-[400px] shrink-0 bg-white rounded-2xl border border-obsidian-200/80 p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {/* Header: TripAdvisor Logo + Label & 5 Stars */}
                    <div className="flex items-center justify-between gap-2 pb-2 border-b border-obsidian-100">
                      <div className="flex items-center gap-2">
                        {/* TripAdvisor Owl Logo SVG */}
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                          <circle cx="6.5" cy="12" r="4.5" stroke="#00AA6C" strokeWidth="1.8" fill="#FFFFFF"/>
                          <circle cx="17.5" cy="12" r="4.5" stroke="#00AA6C" strokeWidth="1.8" fill="#FFFFFF"/>
                          <circle cx="6.5" cy="12" r="1.8" fill="#000000"/>
                          <circle cx="17.5" cy="12" r="1.8" fill="#000000"/>
                          <path d="M12 7.5c-2.5 0-4.5 1.2-5.5 3h11c-1-1.8-3-3-5.5-3z" fill="#00AA6C"/>
                          <polygon points="12,13 10.5,15.5 13.5,15.5" fill="#00AA6C"/>
                        </svg>
                        <span className="text-xs font-semibold text-emerald-800 tracking-wide font-sans">
                          TripAdvisor
                        </span>
                      </div>
                      <div className="flex items-center gap-0.5 text-emerald-600">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="w-2.5 h-2.5 rounded-full bg-[#00AA6C] inline-block" />
                        ))}
                      </div>
                    </div>

                    <h4 className="font-display text-sm sm:text-base font-semibold text-obsidian-950 tracking-tight line-clamp-1">
                      "{rev.title}"
                    </h4>

                    <p className="text-xs sm:text-[13px] text-obsidian-600 font-normal leading-relaxed line-clamp-3">
                      "{rev.comment}"
                    </p>
                  </div>

                  {/* Reviewer Initial Avatar & Name (No role tags) */}
                  <div className="pt-3 border-t border-obsidian-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs flex items-center justify-center font-sans ring-1 ring-emerald-300/60 shadow-2xs shrink-0">
                      {rev.author.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-xs font-semibold text-obsidian-950 font-sans tracking-tight">
                      {rev.author}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 3. GRAND VISUAL SUITE: ARAK BAR & THE COURTYARD (50/50 CHECKERBOARD SPLIT) */}
      {/* ========================================================================= */}
      <section className="w-full bg-black overflow-hidden m-0 p-0 border-none">
        
        {/* ROW 1: THE ARAK BAR (IMAGE LEFT, TEXT RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[460px] sm:min-h-[540px] lg:min-h-[620px] bg-black">
          
          {/* Left: Bar Photo (Clean, no UI indicators) */}
          <div 
            className="relative w-full h-[380px] sm:h-[480px] lg:h-full min-h-[380px] sm:min-h-[480px] cursor-pointer group overflow-hidden select-none bg-black"
            onClick={() => setBarImageIndex(prev => (prev === 0 ? 1 : 0))}
            title="Click to toggle bar view"
          >
            <img
              src={barImages[0].url}
              alt="The Arak Bar at Banmanche"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                barImageIndex === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
            />
            <img
              src={barImages[1].url}
              alt="Arak Bar Teak Counter"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                barImageIndex === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
          </div>

          {/* Right: Pitch Black, Red Accent Line, Authentic ARAK Logo + BAR */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col justify-center px-8 sm:px-14 lg:px-20 xl:px-24 py-16 sm:py-20 lg:py-0 bg-black"
          >
            <div className="w-12 sm:w-16 h-1 bg-terracotta-500 mb-8 sm:mb-10" />
            <div className="space-y-3 sm:space-y-4">
              <img
                src="/arak-logo-white.png"
                alt="ARAK"
                className="h-14 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
              />
              <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-none pl-1">
                BAR
              </h2>
            </div>
          </motion.div>

        </div>

        {/* ROW 2: THE COURTYARD (TEXT LEFT, OUTDOOR PHOTO RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[460px] sm:min-h-[540px] lg:min-h-[640px] xl:min-h-[720px] bg-black">
          
          {/* Left: Pitch Black, Red Accent Line, Giant Bold THE COURTYARD */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 w-full flex flex-col justify-center px-8 sm:px-14 lg:px-20 xl:px-24 py-16 sm:py-20 lg:py-0 bg-black"
          >
            <div className="w-12 sm:w-16 h-1 bg-terracotta-500 mb-8 sm:mb-10" />
            <h2 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.95]">
              THE<br />COURTYARD
            </h2>
          </motion.div>

          {/* Right: Full-bleed Outdoor Courtyard Photo */}
          <div className="order-1 lg:order-2 relative w-full h-[400px] sm:h-[500px] lg:h-full min-h-[400px] sm:min-h-[500px] overflow-hidden select-none bg-black">
            <img
              src="/outdoor.jpg"
              alt="The Outdoor Courtyard at Banmanche"
              className="w-full h-full object-cover object-bottom"
            />
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 4. TABLE RESERVATIONS (MINIMAL, SCULPTED ARCHITECTURAL CONSOLE)           */}
      {/* ========================================================================= */}
      <section className="w-full py-24 sm:py-28 px-6 sm:px-10 lg:px-14 bg-[#FAF8F5] text-obsidian-950 border-t border-obsidian-200/60">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-6xl mx-auto space-y-10"
        >
          
          {/* Refined Header */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-obsidian-950 tracking-tight">
              Reserve a Table
            </h2>
            <p className="text-xs sm:text-sm text-obsidian-600 font-sans tracking-wide">
              Courtyard dining, mountain fires, and botanical spirits. Walk-ins warmly welcomed.
            </p>
          </div>

          {/* Minimal Architectural Reservation Console */}
          <form
            onSubmit={handleQuickBook}
            className="w-full bg-white rounded-2xl lg:rounded-full border border-obsidian-200/90 p-3 sm:p-2.5 sm:pl-6 shadow-sm hover:shadow-md transition-shadow flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 lg:gap-2"
          >
            {/* Seating Area */}
            <div className="flex-1 px-3 py-1.5 min-w-[150px]">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-obsidian-500 font-semibold mb-0.5">
                Atmosphere
              </label>
              <select
                value={quickArea}
                onChange={(e) => setQuickArea(e.target.value)}
                className="w-full text-xs font-medium text-obsidian-950 bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="courtyard">The Courtyard</option>
                <option value="dining-room">Dining Room</option>
                <option value="arak-bar">Arak Bar</option>
              </select>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-8 bg-obsidian-200" />

            {/* Date */}
            <div className="flex-1 px-3 py-1.5 min-w-[130px]">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-obsidian-500 font-semibold mb-0.5">
                Date
              </label>
              <input
                type="date"
                value={quickDate}
                onChange={(e) => setQuickDate(e.target.value)}
                className="w-full text-xs font-medium text-obsidian-950 bg-transparent focus:outline-none font-mono cursor-pointer"
              />
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-8 bg-obsidian-200" />

            {/* Time Slot */}
            <div className="flex-1 px-3 py-1.5 min-w-[130px]">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-obsidian-500 font-semibold mb-0.5">
                Time
              </label>
              <select
                value={quickTime}
                onChange={(e) => setQuickTime(e.target.value)}
                className="w-full text-xs font-medium text-obsidian-950 bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="12:00">12:00 PM — Lunch</option>
                <option value="13:30">1:30 PM — Afternoon</option>
                <option value="18:00">6:00 PM — Twilight Fires</option>
                <option value="19:00">7:00 PM — Dinner</option>
                <option value="20:30">8:30 PM — Late Drinks</option>
              </select>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-8 bg-obsidian-200" />

            {/* Guests */}
            <div className="flex-1 px-3 py-1.5 min-w-[110px]">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-obsidian-500 font-semibold mb-0.5">
                Party Size
              </label>
              <select
                value={quickGuests}
                onChange={(e) => setQuickGuests(e.target.value)}
                className="w-full text-xs font-medium text-obsidian-950 bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="2">2 Guests</option>
                <option value="4">4 Guests</option>
                <option value="6">6 Guests</option>
                <option value="8+">8+ Guests</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-7 py-3.5 rounded-xl lg:rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-terracotta-500 hover:bg-terracotta-600 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Reserve Table</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Minimal Detail Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-obsidian-600 font-sans pt-2">
            <span>Kailashchaur Marg, Dhobichaur, Lazimpat</span>
            <span className="hidden sm:inline text-obsidian-300">•</span>
            <span>Daily 12:00 PM – 10:00 PM</span>
            <span className="hidden sm:inline text-obsidian-300">•</span>
            <span>Tel: +977 970-4804835</span>
            <span className="hidden sm:inline text-obsidian-300">•</span>
            <span className="text-emerald-700 font-medium">Dedicated On-Site Parking</span>
          </div>

          {/* Quick link for buyouts */}
          <div className="text-center pt-1">
            <button
              onClick={() => { setActivePage('reservations'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-xs text-obsidian-500 hover:text-terracotta-600 transition-colors inline-flex items-center gap-1.5 cursor-pointer font-sans"
            >
              <span>Planning a private feast or courtyard gathering? Open reservation details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ONLINE DELIVERY: FOODMANDU (FULL-SCREEN FULL-BLEED MINIMALIST SPLIT)   */}
      {/* ========================================================================= */}
      <section className="w-full min-h-screen bg-[#FAF8F5] border-t border-obsidian-200/60 text-obsidian-950 grid grid-cols-1 lg:grid-cols-2 items-stretch overflow-hidden">
        
        {/* Left Column: Authentic Announcement Post (Full Bleed Atmosphere) */}
        <motion.a
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          href="https://foodmandu.com/Restaurant/Details/2621"
          target="_blank"
          rel="noopener noreferrer"
          title="Open Banmanche on Foodmandu"
          className="relative w-full min-h-[460px] sm:min-h-[560px] lg:min-h-screen flex items-center justify-center p-8 sm:p-14 lg:p-20 bg-[#0E0D0C] overflow-hidden group select-none cursor-pointer"
        >
          {/* Ambient Blurred Background Glow */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25 blur-3xl scale-125 pointer-events-none"
            style={{ backgroundImage: 'url(/foodmandu-post.jpg)' }}
          />

          {/* Centered High-Res Announcement Post Graphic */}
          <div className="relative z-10 w-full max-w-[380px] sm:max-w-[440px] xl:max-w-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-500 ease-out">
            <img
              src="/foodmandu-post.jpg"
              alt="Banmanche on Foodmandu"
              className="w-full h-auto object-cover block"
            />
          </div>
        </motion.a>

        {/* Right Column: Clean, Minimalist Details & Direct Ordering */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full min-h-[460px] lg:min-h-screen flex flex-col justify-center px-8 sm:px-14 lg:px-20 xl:px-24 py-16 sm:py-24 space-y-8"
        >
          
          {/* Foodmandu Official Brand Logo */}
          <div>
            <a
              href="https://foodmandu.com/Restaurant/Details/2621"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="/foodmandu-logo.png"
                alt="Foodmandu"
                className="h-10 sm:h-12 w-auto object-contain hover:opacity-85 transition-opacity"
              />
            </a>
          </div>

          {/* Headline & Description */}
          <div className="space-y-4 max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-obsidian-950 tracking-tight leading-[1.15]">
              Now Delivering with Foodmandu
            </h2>
            <p className="text-sm sm:text-base text-obsidian-600 font-sans font-light leading-relaxed">
              Enjoy our wood-fired hearth specialties, slow-simmered Himalayan stews, and authentic seasonal delicacies delivered fresh and hot to your doorstep across Kathmandu and Lalitpur.
            </p>
          </div>

          {/* Minimal Feature Notes */}
          <div className="space-y-3 max-w-xl border-y border-obsidian-200/70 py-6 text-xs sm:text-sm text-obsidian-700 font-sans">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E21B23] shrink-0" />
              <span>Doorstep delivery across Kathmandu Valley & Lalitpur</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E21B23] shrink-0" />
              <span>Freshly prepared from our hearth kitchen with temperature-retaining eco packing</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E21B23] shrink-0" />
              <span>Order live on Foodmandu with real-time delivery tracking</span>
            </div>
          </div>

          {/* Direct CTA Action */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="https://foodmandu.com/Restaurant/Details/2621"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E21B23] hover:bg-[#c0141b] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:gap-4 cursor-pointer"
            >
              <span>Order on Foodmandu</span>
              <ArrowRight className="w-4 h-4 -rotate-45" />
            </a>
            <span className="text-xs text-obsidian-500 font-sans">
              Daily 12:00 PM – 9:30 PM
            </span>
          </div>

        </motion.div>

      </section>

      {/* ========================================================================= */}
      {/* 6. BIG GOOGLE MAPS (STANDALONE FULL-WIDTH FORMAT, PRELOADED & INSTANT)    */}
      {/* ========================================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative bg-[#121212] border-t border-b border-obsidian-200/40 overflow-hidden"
      >
        
        {/* Full-width Large Map */}
        <div className="w-full h-[460px] sm:h-[520px] lg:h-[600px] relative bg-[#121212]">
          <iframe
            title="BANMANCHE The Himalayan Courtyard Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0621455325875!2d85.31872307546747!3d27.71858002513904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900110f41f5%3A0x116b7c58f3929e7!2sBANMANCHE%20The%20Himalayan%20Courtyard!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="eager"
            fetchPriority="high"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Clean Floating Direction Bar */}
          <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:max-w-md z-10 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-black/10 shadow-xl flex items-center justify-between gap-4">
            <div>
              <strong className="block text-xs font-semibold text-obsidian-950">
                BANMANCHE The Himalayan Courtyard
              </strong>
              <span className="text-[11px] text-obsidian-600 block">
                Kailashchaur Marg, Dhobichaur, Lazimpat
              </span>
            </div>
            <a
              href="https://www.google.com/maps/place/BANMANCHE+The+Himalayan+Courtyard/@27.71858,85.321298,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg text-xs font-medium text-white bg-terracotta-500 hover:bg-terracotta-600 transition-colors shrink-0 flex items-center gap-1.5"
            >
              <span>Get Directions</span>
              <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
            </a>
          </div>
        </div>

      </motion.section>

    </div>
  );
}
