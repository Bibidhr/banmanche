import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, ZoomIn, MapPin, Sparkles, Filter } from 'lucide-react';

export default function GalleryPage({ galleryItems, onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'courtyard-ambiance', label: 'Courtyard & Fireside' },
    { id: 'culinary-art', label: 'Culinary Art & Dishes' },
    { id: 'arak-bar', label: 'Arak Bar & Cocktails' },
    { id: 'live-events', label: 'Live Acoustics & Nights' },
    { id: 'kids-playroom', label: 'Family & Play Area' }
  ];

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-10 lg:px-14 relative z-10">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-obsidian-950 tracking-tight leading-tight mb-4">
          The Courtyard Gallery
        </h1>
        <p className="text-obsidian-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
          Glimpses of brick archways, flickering fires, craft cocktails, sizzling Naga ribs, and laughter echoing across Kathmandu's evenings.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none"
      >
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all border ${
                isSelected
                  ? 'bg-ochre-500 text-white border-ochre-500 shadow-xs'
                  : 'bg-sand-100 text-obsidian-700 border-black/5 hover:border-black/15 hover:bg-white'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </motion.div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onOpenLightbox(item)}
            className="group relative rounded-2xl overflow-hidden glass-panel border border-black/5 cursor-pointer aspect-[4/3] bg-sand-100 shadow-xs hover:shadow-lg hover:border-ochre-500/35 transition-all"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/85 via-obsidian-950/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

            {/* Hover Caption */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-ochre-500 text-white backdrop-blur-sm shadow-xs">
                  {item.category.replace('-', ' ')}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-obsidian-800 group-hover:text-ochre-600 transition-colors shadow-xs">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-1 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-sand-200/90 line-clamp-2 font-light">
                {item.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Instagram Community Callout */}
      <div className="mt-16 p-8 sm:p-12 rounded-3xl glass-panel border border-black/5 text-center relative overflow-hidden shadow-xs">
        <div className="max-w-xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-ochre-600 to-ochre-400 flex items-center justify-center text-white mx-auto shadow-md">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <h3 className="font-display text-2xl font-bold text-obsidian-950">
            Tag @banmanche on Instagram
          </h3>
          <p className="text-xs sm:text-sm text-obsidian-600 font-light leading-relaxed">
            Share your fireside evening moments, Tingmo pulls, and Arak cocktails with us. We feature our favorite guest captures weekly!
          </p>
          <div className="pt-2">
            <a
              href="https://www.google.com/maps/place/BANMANCHE+The+Himalayan+Courtyard/@27.71858,85.321298,17z"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold text-white bg-obsidian-950 hover:bg-ochre-600 shadow-sm transition-all"
            >
              <span>View On Google Maps ↗</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
