import React from 'react';
import { X, ZoomIn, MapPin } from 'lucide-react';

export default function LightboxModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-white border border-black/10 rounded-3xl overflow-hidden shadow-2xl text-obsidian-950"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-obsidian-700 hover:text-white hover:bg-ochre-600 border border-black/10 transition-colors focus:outline-none shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-video sm:aspect-[16/10] bg-sand-100">
          <img
            src={item.imageUrl || item.image}
            alt={item.title || item.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-7 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-ochre-50 text-ochre-700 border border-ochre-200">
              {item.category?.replace('-', ' ')}
            </span>
            <span className="text-xs text-obsidian-500 flex items-center gap-1 font-light">
              <MapPin className="w-3.5 h-3.5 text-ochre-500" />
              The Himalayan Courtyard, Kathmandu
            </span>
          </div>

          <h3 className="font-display text-2xl font-bold text-obsidian-950 mb-2">
            {item.title || item.name}
          </h3>

          <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed font-light">
            {item.caption || item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
