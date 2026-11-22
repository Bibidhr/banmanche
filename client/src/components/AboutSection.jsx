import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Compass, HeartHandshake, Mountain, ArrowRight } from 'lucide-react';

export default function AboutSection({ setActivePage }) {
  const [selectedTerroir, setSelectedTerroir] = useState(0);

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

  return (
    <section className="w-full bg-white text-obsidian-950 overflow-hidden pt-20 sm:pt-28 pb-24 sm:pb-32 relative">
      
      {/* ========================================================================= */}
      {/* 1. HERO: LEFT SIDE CONTENT & SIDE-BY-SIDE PICTURE                         */}
      {/* ========================================================================= */}
      <div className="w-full px-6 sm:px-10 lg:px-14 mb-24 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content & Story Introduction */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 pr-0 lg:pr-6">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light text-obsidian-950 tracking-tight leading-[1.08]">
              The Mountain Firekeeper in Kathmandu
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-obsidian-700 leading-relaxed font-normal">
              <p>
                In high Himalayan lore, the <strong>Banmanche</strong> is the guardian of the ridge forests. When freezing winds swept the high passes, mountain herders and salt traders searched for the Banmanche's glowing hearth—a welcoming fire that never went out, where travelers from distant valleys could warm their hands, share rations, and rest.
              </p>
              <p>
                We built Banmanche in Lazimpat to carry that exact spirit forward. Set inside a secluded open-air stone courtyard on Kailashchaur Marg, just off Uttar Dhoka, our space is an elemental refuge—where the warmth of cured firewood embers brings people together around honest mountain cooking.
              </p>
            </div>

            {/* Architecture Details Row */}
            <div className="pt-6 border-t border-obsidian-200/80 grid grid-cols-3 gap-6 text-xs font-mono text-obsidian-600">
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

          {/* Right Side: Side-by-Side Architectural Picture */}
          <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-obsidian-200/60 shadow-md aspect-[4/3] sm:aspect-[16/12] lg:aspect-[4/5] bg-sand-100">
            <img
              src="/outdoor.jpg"
              alt="Sunlit open-air courtyard with patio umbrellas and brick pavers at Banmanche"
              className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
              <span className="font-mono text-[10px] uppercase tracking-wider text-sand-300 block">The Courtyard</span>
              <p className="font-medium text-white/95 mt-0.5">Open-air stone dining terrace on Kailashchaur Marg</p>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CONTINUING THE STORY FROM THE MIDDLE                                   */}
      {/* ========================================================================= */}
      <div className="w-full px-6 sm:px-10 lg:px-14 mb-24 sm:mb-32">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-obsidian-950 tracking-tight leading-tight">
            Gathering Five Mountain Foodways Under One Sky
          </h3>

          <div className="space-y-4 text-base sm:text-lg text-obsidian-700 leading-relaxed font-normal text-left sm:text-center">
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
      </div>

      {/* ========================================================================= */}
      {/* 3. SURPRISE: THE FOUR MOUNTAIN TERROIRS (INTERACTIVE ELEVATION RITUAL)    */}
      {/* ========================================================================= */}
      <div className="w-full px-6 sm:px-10 lg:px-14">
        <div className="max-w-5xl mx-auto border-t border-obsidian-200/80 pt-16 sm:pt-20">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
            <h3 className="font-display text-2xl sm:text-4xl font-light text-obsidian-950 tracking-tight">
              The Four Highland Terroirs
            </h3>
            <p className="text-xs sm:text-sm text-obsidian-600 font-normal leading-relaxed">
              Explore the elevations and wild microclimates where our core kitchen staples originate. Select a mountain region below.
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
                      : 'bg-sand-50/80 text-obsidian-800 border-obsidian-200/70 hover:border-obsidian-300 hover:bg-sand-100'
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
              className="p-6 sm:p-10 rounded-2xl bg-sand-50/60 border border-obsidian-200/80 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
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

                <div className="pt-3 border-t border-obsidian-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
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

              <div className="md:col-span-4 border-l border-obsidian-200/60 pl-0 md:pl-8 space-y-3 text-center md:text-left">
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-obsidian-200/60 flex items-center justify-center text-terracotta-600 mx-auto md:mx-0">
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

          {/* Minimal CTA link to Menu */}
          {setActivePage && (
            <div className="mt-14 text-center">
              <button
                onClick={() => {
                  setActivePage('menu');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-terracotta-600 hover:text-terracotta-700 transition-colors cursor-pointer"
              >
                <span>View Full Menu & Table Offerings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>
      </div>

    </section>
  );
}
