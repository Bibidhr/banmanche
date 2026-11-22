import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF8F5] text-obsidian-700 py-10 border-t border-obsidian-200/80">
      <div className="w-full px-6 sm:px-10 lg:px-14 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright 2026 */}
        <div className="order-2 sm:order-1 w-full sm:w-1/3 text-center sm:text-left">
          <p className="text-xs sm:text-sm font-sans tracking-wide text-obsidian-600 font-medium">
            Copyright 2026
          </p>
        </div>

        {/* Middle: Provided Black Banmanche Logo */}
        <div className="order-1 sm:order-2 w-full sm:w-1/3 flex items-center justify-center">
          <img
            src="/banmanche-logo-black.png"
            alt="BANMANCHE"
            className="h-12 sm:h-14 w-auto object-contain select-none"
          />
        </div>

        {/* Right: All rights reserved */}
        <div className="order-3 sm:order-3 w-full sm:w-1/3 text-center sm:text-right">
          <p className="text-xs sm:text-sm font-sans tracking-wide text-obsidian-600 font-medium">
            All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
