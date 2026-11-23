import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Flame, Plus, Check, MapPin, Sparkles } from 'lucide-react';

export default function DishModal({ dish, onClose, onAddToTray, isInTray }) {
  if (!dish) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.16, ease: "easeIn" } }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.17, ease: [0.16, 1, 0.3, 1] } }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-2xl w-full bg-white border border-black/10 rounded-3xl overflow-hidden shadow-2xl text-obsidian-950"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-obsidian-700 hover:text-white hover:bg-ochre-600 border border-black/10 transition-colors focus:outline-none shadow-xs active:scale-[0.97]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-sand-100">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/70 via-transparent to-transparent opacity-70" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-ochre-500 text-white shadow-xs">
              {dish.region} Specialty
            </span>
            <div className="text-2xl font-display font-bold text-white bg-obsidian-950/85 px-4 py-1.5 rounded-xl border border-white/20 backdrop-blur-md shadow-md">
              <span className="text-xs font-normal text-sand-300 mr-1.5">NPR</span>
              <span>{dish.price.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-display text-2xl font-bold text-obsidian-950">
              {dish.name}
            </h3>
            {dish.isSignature && (
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-ochre-50 text-ochre-700 border border-ochre-200">
                Chef's Signature
              </span>
            )}
          </div>
          {dish.nepaliName && (
            <div className="text-sm font-medium text-ochre-600/90 italic mb-4">
              {dish.nepaliName}
            </div>
          )}

          <p className="text-sm text-obsidian-600 leading-relaxed mb-6 font-light">
            {dish.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-sand-50 border border-black/5 text-xs">
            <div>
              <span className="text-obsidian-500 block mb-1">Dietary</span>
              <span className={`font-semibold capitalize ${dish.dietary === 'veg' ? 'text-emerald-600' : 'text-ochre-600'}`}>
                {dish.dietary === 'veg' ? '🌱 Vegetarian' : '🍖 Non-Vegetarian'}
              </span>
            </div>
            <div>
              <span className="text-obsidian-500 block mb-1">Spice Level</span>
              <div className="flex items-center gap-1 font-semibold text-obsidian-800">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <span 
                    key={idx} 
                    className={`text-sm ${idx < dish.spicyLevel ? 'text-ochre-500' : 'text-black/15'}`}
                  >
                    🌶️
                  </span>
                ))}
                <span className="text-[11px] text-obsidian-500 ml-1">
                  {dish.spicyLevel === 0 ? 'Mild' : dish.spicyLevel === 1 ? 'Gentle Warmth' : dish.spicyLevel === 2 ? 'Spiced' : 'Fiery Himalayan'}
                </span>
              </div>
            </div>
            <div>
              <span className="text-obsidian-500 block mb-1">Origin</span>
              <span className="font-semibold text-obsidian-900">
                {dish.region}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-obsidian-700 hover:text-obsidian-950 bg-sand-100 hover:bg-sand-200 border border-black/5 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onAddToTray(dish);
              }}
              className={`px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md active:scale-[0.97] ${
                isInTray
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white animate-success-pulse'
                  : 'bg-ochre-500 hover:bg-ochre-600 text-white'
              }`}
            >
              <span className="relative flex items-center justify-center w-4 h-4">
                <Check className={`w-4 h-4 transition-all duration-200 ${isInTray ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-75 blur-[2px] absolute'}`} />
                <Plus className={`w-4 h-4 transition-all duration-200 ${!isInTray ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-75 blur-[2px] absolute'}`} />
              </span>
              <span>{isInTray ? 'In Tasting Tray' : 'Add to Tasting Tray'}</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
