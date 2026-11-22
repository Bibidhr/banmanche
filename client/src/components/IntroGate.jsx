import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function IntroGate({ onEnter }) {
  const [isExiting, setIsExiting] = useState(false);

  // Trigger quick, smooth blend into the website
  const handleOpenWebsite = () => {
    if (isExiting) return;
    setIsExiting(true);
    // Smooth crossfade: after 650ms hand off cleanly to the mounted website
    setTimeout(() => {
      onEnter();
    }, 650);
  };

  // Automatically trigger transition after wordmark reveal
  useEffect(() => {
    const autoOpenTimer = setTimeout(() => {
      handleOpenWebsite();
    }, 3400); // 0.6s BAN + 0.6s MAN + 0.6s CHE + generous pause

    return () => clearTimeout(autoOpenTimer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-petrol-950 overflow-hidden select-none cursor-pointer"
      onClick={handleOpenWebsite}
    >
      {/* Deep petrol canvas matching the website's hero section */}
      <div className="absolute inset-0 bg-petrol-950 pointer-events-none" />

      {/* Subtle background underlay preview of the courtyard atmosphere */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="/hero-bar.jpg"
          alt="Courtyard ambient"
          className="w-full h-full object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-petrol-950/70" />
      </div>

      {/* AMBIENT FLOWING ORANGE WAVES - Seamlessly matches the hearth warmth */}
      <motion.div 
        animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        
        {/* Layer 1: Floating Orange Waves at Bottom */}
        <motion.div
          animate={{
            x: ['-20%', '0%', '-20%'],
            y: ['0%', '-4%', '0%']
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-24 -left-1/4 w-[150%] h-[50%] opacity-25 blur-2xl pointer-events-none"
        >
          <svg viewBox="0 0 1440 320" fill="none" className="w-full h-full preserve-3d">
            <path
              fill="url(#orange-wave-grad-1)"
              d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,117.3C672,117,768,171,864,197.3C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            <defs>
              <linearGradient id="orange-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B84E31" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#ED5E2D" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#D46344" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Layer 2: Opposite Flowing Waves at Bottom */}
        <motion.div
          animate={{
            x: ['0%', '-15%', '0%'],
            y: ['0%', '5%', '0%']
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-16 -left-1/4 w-[150%] h-[45%] opacity-20 blur-xl pointer-events-none"
        >
          <svg viewBox="0 0 1440 320" fill="none" className="w-full h-full">
            <path
              fill="url(#orange-wave-grad-2)"
              d="M0,96L60,112C120,128,240,160,360,181.3C480,203,600,213,720,192C840,171,960,117,1080,112C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
            <defs>
              <linearGradient id="orange-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D46344" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#ED5E2D" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#923D26" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

      </motion.div>

      {/* CENTERPIECE: CIRCULAR EMBLEM WITH SMOOTH CROSSFADE */}
      <div className="relative z-10 flex items-center justify-center">
        
        {/* LOGO CONTENT & SHADOW (Dissolves gracefully on exit) */}
        <motion.div
          animate={
            isExiting 
              ? { opacity: 0, scale: 0.9, y: -10 } 
              : { opacity: 1, scale: 1, y: 0 }
          }
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden shadow-2xl border border-white/10 pointer-events-none bg-petrol-900"
        >
          {/* Step 1: "BAN" fades in after 0.5s */}
          <motion.img
            src="/logo-ban.png"
            alt="BAN"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          />

          {/* Step 2: "MAN" fades in after 1.1s */}
          <motion.img
            src="/logo-man.png"
            alt="MAN"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          />

          {/* Step 3: "CHE" fades in after 1.7s */}
          <motion.img
            src="/logo-che.png"
            alt="CHE"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          />
        </motion.div>

      </div>

    </motion.div>
  );
}
