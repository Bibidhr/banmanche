import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 16, transition: { duration: 0.18, ease: "easeIn" } }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 right-6 z-50 max-w-sm w-full"
    >
      <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-2xl border border-black/10 shadow-2xl flex items-start gap-3">
        {toast.type === 'error' ? (
          <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
        ) : (
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5 animate-success-pulse" />
        )}
        <div className="flex-1">
          <h4 className="text-sm font-display font-bold text-obsidian-950">
            {toast.title || 'Notification'}
          </h4>
          <p className="text-xs text-obsidian-600 mt-0.5 leading-relaxed font-light">
            {toast.message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-obsidian-400 hover:text-obsidian-900 p-1 rounded-lg focus:outline-none active:scale-[0.97]"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
