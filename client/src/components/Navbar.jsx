import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, trayCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      // Navbar only shows at the top and top only
      setIsVisible(y <= 45);
      setIsScrolled(y > 45);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When changing pages, re-check scroll position & make navbar visible at top
  useEffect(() => {
    setIsVisible(window.scrollY <= 45);
    setIsScrolled(window.scrollY > 45);
  }, [activePage]);

  // Unified rule across ALL pages: Circular at top, stretches to landscape on scroll
  const isCircular = !isScrolled;
  const isTransparentHero = (activePage === 'home' || activePage === 'about') && !isScrolled;

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About Us' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    setIsScrolled(false);
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        (isVisible || mobileMenuOpen)
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : '-translate-y-full opacity-0 pointer-events-none'
      } ${
        isTransparentHero
          ? 'py-5 bg-gradient-to-b from-black/70 via-black/30 to-transparent'
          : 'py-3.5 bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-sm'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between relative h-12 sm:h-14">
          
          {/* LEFT SIDE: BANMANCHE CIRCULAR LOGO */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavClick('home')}
              className="group flex items-center focus:outline-none cursor-pointer"
              aria-label="BANMANCHE Home"
            >
              <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-xs flex-shrink-0 transition-all duration-300 ${
                isTransparentHero
                  ? 'border border-white/25 bg-black/40 group-hover:border-terracotta-500 group-hover:scale-105'
                  : 'border border-black/10 bg-white group-hover:border-ochre-500/80 group-hover:scale-105'
              }`}>
                <img
                  src="/banmanche.jpeg"
                  alt="BANMANCHE Circular Emblem"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </button>
          </div>

          {/* RIGHT SIDE: NAV PILL (HOME, MENU, ABOUT US) & MOBILE TRIGGER */}
          <div className="flex items-center">
            {/* Desktop Nav Links */}
            <nav className={`hidden md:flex items-center gap-1.5 p-1 rounded-full backdrop-blur-md transition-all duration-300 ${
              isTransparentHero
                ? 'bg-black/35 border border-white/20 shadow-lg shadow-black/25'
                : 'bg-sand-100/80 border border-black/5'
            }`}>
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                      isActive
                        ? isTransparentHero ? 'text-white bg-terracotta-500 shadow-sm' : 'text-white bg-ochre-500 shadow-sm'
                        : isTransparentHero ? 'text-sand-200 hover:text-white hover:bg-white/15' : 'text-obsidian-700 hover:text-ochre-600 hover:bg-white/80'
                    }`}
                  >
                    {link.label}
                    {link.id === 'menu' && trayCount > 0 && (
                      <span className={`ml-1.5 px-1.5 py-0.2 text-[9px] font-bold rounded-full ${
                        isTransparentHero ? 'bg-white/25 text-white' : 'bg-obsidian-900 text-white'
                      }`}>
                        {trayCount}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Hamburger on Right */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl border focus:outline-none transition-colors ${
                  isTransparentHero
                    ? 'bg-black/35 text-sand-100 border-white/20 backdrop-blur-md hover:bg-black/50'
                    : 'bg-sand-100 text-obsidian-800 border-black/5'
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden mt-3 mx-4 p-5 rounded-2xl backdrop-blur-2xl shadow-xl animate-in fade-in slide-in-from-top-4 duration-200 border ${
          isTransparentHero
            ? 'bg-petrol-950/95 border-white/15 text-white'
            : 'bg-white/95 border-black/10'
        }`}>
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between p-3 rounded-xl text-left transition-all ${
                    isActive
                      ? (isTransparentHero ? 'bg-terracotta-500 text-white font-semibold' : 'bg-ochre-500 text-white font-semibold')
                      : (isTransparentHero ? 'text-sand-200 hover:bg-white/10' : 'text-obsidian-800 hover:bg-sand-100')
                  }`}
                >
                  <span className="text-sm tracking-wide font-medium">{link.label}</span>
                  {link.id === 'menu' && trayCount > 0 && (
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                      isTransparentHero ? 'bg-white/20 text-white' : 'bg-sand-200 text-obsidian-900'
                    }`}>
                      {trayCount} selected
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className={`mt-4 pt-4 border-t flex flex-col gap-2 ${
            isTransparentHero ? 'border-white/10' : 'border-black/5'
          }`}>
            <button
              onClick={() => handleNavClick('reservations')}
              className={`w-full py-3 rounded-xl text-center text-xs font-semibold uppercase tracking-wider text-white shadow-md flex items-center justify-center gap-2 ${
                isTransparentHero ? 'bg-terracotta-500 hover:bg-terracotta-600' : 'bg-ochre-500 hover:bg-ochre-600'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Courtyard Table</span>
            </button>
            <p className={`text-center text-[10px] mt-1 ${
              isTransparentHero ? 'text-sand-400' : 'text-obsidian-500'
            }`}>
              Kailashchaur Marg, Dhobichaur, Kathmandu
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
