import React from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, MapPin, Calendar, ArrowRight } from 'lucide-react';

export default function GalleryPage({ onOpenLightbox, setActivePage }) {
  const banmanchePhotos = [
    {
      id: "photo-1",
      title: "The Open-Air Courtyard",
      caption: "Sunlit brick terrace, natural patio umbrella canopy, and peaceful outdoor dining in Dhobichaur.",
      imageUrl: "/outdoor.jpg",
      category: "Courtyard & Atmosphere",
      aspectRatio: "aspect-[4/3]",
      colSpan: "col-span-1 lg:col-span-7"
    },
    {
      id: "photo-2",
      title: "The Carved Newari Torana",
      caption: "Hand-carved timber gateway draped in ceremonial white silk khada scarves at the entrance on Kailashchaur Marg.",
      imageUrl: "/banmanche-entrance.jpg",
      category: "Architecture & Heritage",
      aspectRatio: "aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]",
      colSpan: "col-span-1 lg:col-span-5"
    },
    {
      id: "photo-3",
      title: "The Teak Arak Bar",
      caption: "Solid reclaimed mountain teak counter where herbal infusions, lapsi sours, and mountain distillates are poured.",
      imageUrl: "/hero-bar-clean.jpg",
      category: "Arak Bar & Drinks",
      aspectRatio: "aspect-[4/3]",
      colSpan: "col-span-1 lg:col-span-6"
    },
    {
      id: "photo-4",
      title: "Woodfire Hearth & Iron Braises",
      caption: "Cured sal and oak hardwood embers simmering bone broths and slow-braised Naga pork in heavy cast iron pans.",
      imageUrl: "/himalayan-feast.jpg",
      category: "Fire & Hearth Feasts",
      aspectRatio: "aspect-[4/3]",
      colSpan: "col-span-1 lg:col-span-6"
    },
    {
      id: "photo-5",
      title: "Ambient Courtyard Nights",
      caption: "Warm evening festoon lights, glowing fire pits, and quiet conversation under Kathmandu's night sky.",
      imageUrl: "/banmanche-night-garden.jpg",
      category: "Courtyard & Atmosphere",
      aspectRatio: "aspect-[16/10]",
      colSpan: "col-span-1 lg:col-span-8"
    },
    {
      id: "photo-6",
      title: "Hand-Steamed Tingmo Baskets",
      caption: "Handmade spiral Himalayan buns lifted steaming hot from traditional woven bamboo baskets.",
      imageUrl: "/himalayan-tingmo.jpg",
      category: "Culinary Craft",
      aspectRatio: "aspect-square lg:aspect-[4/5]",
      colSpan: "col-span-1 lg:col-span-4"
    },
    {
      id: "photo-7",
      title: "Twilight by the Fireplace",
      caption: "The gentle transition from golden mountain twilight to deep fireside warmth in the courtyard.",
      imageUrl: "/hero-twilight.jpg",
      category: "Courtyard & Atmosphere",
      aspectRatio: "aspect-[4/3]",
      colSpan: "col-span-1 lg:col-span-6"
    },
    {
      id: "photo-8",
      title: "Cocktail Craft & Highland Botanicals",
      caption: "Artisanal Arak cocktails shaken with charred mountain pine, timmur peppers, and wild clover honey.",
      imageUrl: "/hero-bar-16x9.jpg",
      category: "Arak Bar & Drinks",
      aspectRatio: "aspect-[4/3]",
      colSpan: "col-span-1 lg:col-span-6"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#FAF8F5] pt-32 pb-32 px-6 sm:px-10 lg:px-14 text-obsidian-950">
      <div className="w-full max-w-6xl mx-auto space-y-16">
        
        {/* ========================================================================= */}
        {/* CHÉZ CAROLINE INSPIRED EDITORIAL HEADER                                   */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-2 pb-8 border-b border-obsidian-200/60"
        >
          <h1 className="font-menu text-4xl sm:text-6xl font-normal text-obsidian-950 tracking-tight">
            Photo Gallery
          </h1>
          <p className="text-xs sm:text-sm font-sans text-obsidian-500 font-normal tracking-wide">
            Photography of Banmanche Courtyard, Hearth & Living Atmosphere
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* CURATED 8-PICTURE ASYMMETRIC MASONRY GRID                                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          {banmanchePhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onOpenLightbox && onOpenLightbox(photo)}
              className={`${photo.colSpan} group cursor-pointer flex flex-col space-y-3`}
            >
              
              {/* Photo Frame with Clean White Background & Subtle Hover Scale */}
              <div className={`relative w-full ${photo.aspectRatio} overflow-hidden rounded-xl bg-sand-100 border border-obsidian-200/50 shadow-xs group-hover:shadow-md transition-all duration-500`}>
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                
                {/* Subtle Lens Zoom Badge */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-obsidian-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xs">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Minimalist Editorial Caption (Chéz Caroline Style) */}
              <div className="space-y-0.5 pt-1">
                <h3 className="font-menu text-lg sm:text-xl text-obsidian-950 group-hover:text-terracotta-600 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-obsidian-500 font-normal leading-relaxed line-clamp-2">
                  {photo.caption}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* CHÉZ CAROLINE INSPIRED MINIMAL FOOTER NAVIGATION                         */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-16 border-t border-obsidian-200/60 text-center space-y-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-menu text-obsidian-700 uppercase tracking-widest">
            {setActivePage && (
              <>
                <button
                  onClick={() => {
                    setActivePage('menu');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-terracotta-600 transition-colors cursor-pointer"
                >
                  Menu
                </button>
                <span>/</span>
                <button
                  onClick={() => {
                    setActivePage('reservations');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-terracotta-600 transition-colors cursor-pointer"
                >
                  Reservations
                </button>
                <span>/</span>
                <button
                  onClick={() => {
                    setActivePage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-terracotta-600 transition-colors cursor-pointer"
                >
                  Contact & Story
                </button>
                <span>/</span>
              </>
            )}
            <a
              href="https://www.google.com/maps/place/BANMANCHE+The+Himalayan+Courtyard/@27.71858,85.321298,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta-600 transition-colors"
            >
              Location ↗
            </a>
          </div>

          <p className="text-[11px] text-obsidian-400 font-sans tracking-wide">
            Kailashchaur Marg, Dhobichaur, Lazimpat • Kathmandu, Nepal
          </p>
        </motion.div>

      </div>
    </div>
  );
}
