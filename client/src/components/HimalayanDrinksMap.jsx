import React, { useState, useRef, useEffect } from 'react';
import { Plus, X, Mountain, Sparkles, Check, Compass } from 'lucide-react';
import { himalayanDrinks } from '../data/drinksData';

export default function HimalayanDrinksMap({ onAddToTray }) {
  const [activeDrink, setActiveDrink] = useState(null);
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [addedId, setAddedId] = useState(null);
  const [stayTimerProgress, setStayTimerProgress] = useState(0);

  const closeTimeoutRef = useRef(null);
  const progressIntervalRef = useRef(null);

  // Clear any existing closing timers
  const clearCloseTimer = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
    setStayTimerProgress(0);
  };

  // Start the <=2s timer (1.8s) when mouse leaves the circle
  const startCloseTimer = () => {
    clearCloseTimer();

    const duration = 1800; // 1.8 seconds (2s or less)
    const startTime = Date.now();

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setStayTimerProgress(pct);
    }, 40);

    closeTimeoutRef.current = setTimeout(() => {
      setActiveDrink(null);
      clearCloseTimer();
    }, duration);
  };

  // Mouse enters an orange circle
  const handleCircleEnter = (drink) => {
    clearCloseTimer();
    setActiveDrink(drink);
  };

  // Mouse leaves an orange circle
  const handleCircleLeave = () => {
    startCloseTimer();
  };

  // Mouse enters the hover card (cancels timer so user can comfortably read and click Add)
  const handleCardEnter = () => {
    clearCloseTimer();
    setIsHoveringCard(true);
  };

  // Mouse leaves the hover card
  const handleCardLeave = () => {
    setIsHoveringCard(false);
    startCloseTimer();
  };

  // Close card immediately
  const handleCloseImmediately = () => {
    clearCloseTimer();
    setActiveDrink(null);
  };

  // Add drink to tray
  const handleAdd = (drink, e) => {
    if (e) e.stopPropagation();
    if (onAddToTray) {
      onAddToTray(drink);
    }
    setAddedId(drink.id);
    setTimeout(() => setAddedId(null), 1600);
  };

  // Clean up timers on unmount
  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  // Authentic geographic map structure paths:
  // 1. Nepal (Iconic tilted rectangular Himalayan landmass)
  const nepalPath = 
    "M 410,260 " +
    "C 450,248 500,238 540,230 " + // Saipal, Dhaulagiri, Annapurna
    "C 580,224 630,214 680,205 " + // Manaslu, Langtang, Gaurishankar
    "C 715,198 735,194 755,190 " + // Everest, Kanchenjunga
    "C 758,260 756,325 750,385 " + // Singalila Eastern border (Mechi)
    "C 700,420 640,435 580,440 " + // Terai plains (Jhapa to Janakpur)
    "C 545,430 490,400 440,380 " + // Chure / Terai (Hetauda, Chitwan, Lumbini)
    "C 400,365 390,345 395,310 " + // Kanchanpur / Mahakali river
    "Z";

  // 2. Kashmir, Ladakh & Uttarakhand (Northwestern Himalayan mass)
  const kashmirLadakhPath = 
    "M 80,300 " +
    "C 85,250 115,210 155,170 " + // Pir Panjal / Kashmir valley
    "C 200,130 250,115 305,130 " + // Ladakh / Karakoram
    "C 330,150 335,210 325,255 " + // Changthang / Himachal border
    "C 335,290 370,320 410,260 " + // Uttarakhand / West Nepal corner
    "C 395,310 390,345 400,365 " + // Mahakali border
    "C 350,380 300,370 230,350 " + // Kumaon / Almora / Garhwal
    "C 170,340 120,330 80,300 " + // Jammu foothills
    "Z";

  // 3. Sikkim (Himalayan kingdom nestled between Nepal and Bhutan)
  const sikkimPath = 
    "M 750,345 " +
    "L 755,190 " +
    "C 765,170 775,165 785,185 " +
    "C 788,230 785,290 785,345 " +
    "C 775,348 760,348 750,345 " +
    "Z";

  // 4. Bhutan (Eastern Himalayan kingdom)
  const bhutanPath = 
    "M 815,335 " +
    "C 805,280 790,250 785,230 " + // Chumbi valley / Sikkim border
    "C 830,205 880,195 930,215 " + // Chomolhari & Northern high peaks
    "C 935,275 933,310 930,335 " + // Eastern border
    "C 890,340 850,338 815,335 " + // Southern border with Assam
    "Z";

  // 5. Arunachal Pradesh (Eastern Himalayan Frontier)
  const arunachalPath = 
    "M 930,215 " +
    "C 970,195 1030,180 1090,175 " + // Tawang & northern ridge
    "C 1130,185 1155,200 1150,240 " +
    "C 1120,280 1060,305 1000,325 " + // Brahmaputra valley
    "C 960,335 940,335 930,335 " +
    "Z";

  // 6. Meghalaya Plateau (Garo, Khasi & Jaintia hills south of Assam)
  const meghalayaPath = 
    "M 865,475 " +
    "C 910,468 950,472 980,480 " + // North border along Assam
    "C 985,520 975,545 960,560 " + // East Jaintia
    "C 920,570 880,565 850,540 " + // South border with Bangladesh
    "C 845,510 850,490 865,475 " + // West Garo
    "Z";

  // The Orange Route Path connecting all 12 stations
  const trailPathD = "M 120 280 L 235 170 L 345 350 L 530 280 L 545 395 L 580 290 L 710 390 L 768 330 L 805 305 L 860 260 L 920 510 L 1010 215";

  return (
    <section className="py-8 px-2 sm:px-6 lg:px-8 bg-transparent text-obsidian-950 relative z-10 select-none">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Clean Centered Header */}
        <div className="text-center space-y-1">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-obsidian-950 tracking-tight">
            The Himalayan Drinks Map
          </h2>
          <p className="text-xs sm:text-sm text-obsidian-600 font-light max-w-md mx-auto">
            Hover over any orange circle along the trail to preview the drink recipe.
          </p>
        </div>

        {/* 2D Static Map Container (Clean, Minimal, Zero Background Lines or Wave Bloat) */}
        <div className="relative rounded-3xl overflow-hidden border border-[#E7E0D3] bg-[#FAF8F5] shadow-lg">

          {/* 2D Vector Static Map */}
          <div className="relative w-full aspect-[1200/680] min-h-[380px] sm:min-h-[460px] md:min-h-[540px]">
            <svg
              viewBox="0 0 1200 680"
              className="w-full h-full block"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Clean solid paper background: No background lines, No grid */}
              <rect width="1200" height="680" fill="#FAF8F5" />

              {/* Geographical Map Structure (Real Geographic Boundaries) */}
              <g stroke="#9E917F" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
                {/* Kashmir & Ladakh & Uttarakhand */}
                <path d={kashmirLadakhPath} fill="#F4EFE6" />

                {/* Nepal (Focal Central Himalayan Landmass) */}
                <path d={nepalPath} fill="#EFE8DC" stroke="#8C7D6A" strokeWidth="1.6" />

                {/* Sikkim */}
                <path d={sikkimPath} fill="#F3ECE0" />

                {/* Bhutan */}
                <path d={bhutanPath} fill="#F4EEE4" stroke="#8C7D6A" strokeWidth="1.5" />

                {/* Arunachal Pradesh */}
                <path d={arunachalPath} fill="#F3EDE3" />

                {/* Meghalaya Plateau */}
                <path d={meghalayaPath} fill="#EFE8DD" stroke="#8C7D6A" strokeWidth="1.5" />
              </g>

              {/* Internal National Boundary Dividers (Subtle dashed borders) */}
              <g stroke="#A69B8C" strokeWidth="1" strokeDasharray="3,3" fill="none" opacity="0.75">
                {/* West Nepal border along Mahakali */}
                <line x1="410" y1="260" x2="395" y2="310" />
                {/* East Nepal border along Singalila */}
                <line x1="755" y1="190" x2="750" y2="345" />
                {/* Sikkim - Bhutan border */}
                <line x1="785" y1="185" x2="785" y2="340" />
                {/* Bhutan - Arunachal border */}
                <line x1="930" y1="215" x2="930" y2="335" />
              </g>

              {/* Major Himalayan Mountain Peak Summits */}
              <g fill="#877B6B" fontSize="9" fontFamily="sans-serif" letterSpacing="0.08em" opacity="0.85">
                <text x="260" y="100" textAnchor="middle">▲ K2 8,611m</text>
                <text x="540" y="215" textAnchor="middle">▲ ANNAPURNA 8,091m</text>
                <text x="715" y="180" textAnchor="middle">▲ MT. EVEREST 8,848m</text>
                <text x="765" y="155" textAnchor="middle">▲ KANCHENJUNGA 8,586m</text>
                <text x="860" y="185" textAnchor="middle">▲ CHOMOLHARI 7,326m</text>
              </g>

              {/* Regional Territorial Watermark Labels */}
              <g fill="#B5A998" fontSize="12" fontFamily="serif" fontStyle="italic" letterSpacing="0.22em" opacity="0.75">
                <text x="210" y="240">KASHMIR & LADAKH</text>
                <text x="580" y="350" textAnchor="middle">NEPAL HIMALAYAS</text>
                <text x="768" y="280" textAnchor="middle" fontSize="10">SIKKIM</text>
                <text x="865" y="300" textAnchor="middle">BHUTAN</text>
                <text x="920" y="550" textAnchor="middle">MEGHALAYA</text>
                <text x="1030" y="270">ARUNACHAL</text>
              </g>

              {/* Brand Lettering in bottom left */}
              <g opacity="0.4">
                <text x="60" y="605" fill="#1C1917" fontFamily="serif" fontSize="18" fontWeight="bold" letterSpacing="0.2em">
                  ARAK
                </text>
                <text x="60" y="625" fill="#78716C" fontFamily="sans-serif" fontSize="9" letterSpacing="0.15em">
                  HIMALAYAN BOTANICAL TRAIL
                </text>
              </g>

              {/* The Orange Route Trail Line */}
              <path
                d={trailPathD}
                fill="none"
                stroke="#FDBA74"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.4"
              />
              <path
                d={trailPathD}
                fill="none"
                stroke="#EA580C"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Printed Station Typography on Map */}
              {himalayanDrinks.map((drink) => {
                const isTop = drink.labelPos === 'top';
                const labelY = isTop ? drink.svgY - 30 : drink.svgY + 26;
                const subY = isTop ? drink.svgY - 17 : drink.svgY + 39;
                const priceY = isTop ? drink.svgY - 6 : drink.svgY + 52;
                const isActive = activeDrink?.id === drink.id;

                return (
                  <g key={`label-${drink.id}`} className="pointer-events-none select-none">
                    {/* Leader tick mark */}
                    <line
                      x1={drink.svgX}
                      y1={isTop ? drink.svgY - 9 : drink.svgY + 9}
                      x2={drink.svgX}
                      y2={isTop ? drink.svgY - 17 : drink.svgY + 17}
                      stroke="#C5BBAE"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />

                    {/* Drink Name */}
                    <text
                      x={drink.svgX}
                      y={labelY}
                      textAnchor="middle"
                      fill={isActive ? "#EA580C" : "#1C1917"}
                      fontSize="9.5"
                      fontFamily="sans-serif"
                      fontWeight="700"
                      letterSpacing="0.05em"
                    >
                      {drink.name.toUpperCase()}
                    </text>

                    {/* Spirit / Key Note */}
                    <text
                      x={drink.svgX}
                      y={subY}
                      textAnchor="middle"
                      fill="#78716C"
                      fontSize="8"
                      fontFamily="sans-serif"
                      fontWeight="400"
                    >
                      {drink.spirit}
                    </text>

                    {/* Price */}
                    <text
                      x={drink.svgX}
                      y={priceY}
                      textAnchor="middle"
                      fill="#9C9281"
                      fontSize="8"
                      fontFamily="monospace"
                      fontWeight="600"
                    >
                      {drink.price}
                    </text>
                  </g>
                );
              })}

              {/* The 12 Interactive Orange Circles */}
              {himalayanDrinks.map((drink) => {
                const isActive = activeDrink?.id === drink.id;

                return (
                  <g
                    key={`circle-${drink.id}`}
                    className="cursor-pointer group"
                    onMouseEnter={() => handleCircleEnter(drink)}
                    onMouseLeave={handleCircleLeave}
                    onClick={() => setActiveDrink(drink)}
                  >
                    {/* Generous 24px invisible hit-area circle for effortless targeting */}
                    <circle
                      cx={drink.svgX}
                      cy={drink.svgY}
                      r="24"
                      fill="transparent"
                    />

                    {/* Outer glowing pulsing ring when hovered or active */}
                    <circle
                      cx={drink.svgX}
                      cy={drink.svgY}
                      r={isActive ? "18" : "12"}
                      fill="#EA580C"
                      opacity={isActive ? "0.35" : "0"}
                      className="transition-all duration-300"
                    />

                    {/* Main Solid Orange Circle matching the menu */}
                    <circle
                      cx={drink.svgX}
                      cy={drink.svgY}
                      r={isActive ? "10" : "8"}
                      fill="#EA580C"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      className="transition-transform duration-200"
                    />

                    {/* Inner White Center Dot */}
                    <circle
                      cx={drink.svgX}
                      cy={drink.svgY}
                      r="2.5"
                      fill="#FFFFFF"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Floating Minimalist Hover Card (ZERO PICTURES, Pure Typography) */}
            {activeDrink && (
              <div
                className="absolute z-30 transition-all duration-200 pointer-events-auto"
                style={{
                  left: activeDrink.xPct > 62 ? 'auto' : `${Math.max(2, Math.min(64, activeDrink.xPct + 1.5))}%`,
                  right: activeDrink.xPct > 62 ? `${Math.max(2, Math.min(64, 100 - activeDrink.xPct + 1.5))}%` : 'auto',
                  top: activeDrink.yPct > 55 ? 'auto' : `${Math.max(3, Math.min(50, activeDrink.yPct - 8))}%`,
                  bottom: activeDrink.yPct > 55 ? `${Math.max(3, Math.min(50, 100 - activeDrink.yPct + 2))}%` : 'auto'
                }}
                onMouseEnter={handleCardEnter}
                onMouseLeave={handleCardLeave}
              >
                <div className="w-[280px] sm:w-[320px] p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-black/10 shadow-2xl space-y-3 animate-fadeIn text-left relative overflow-hidden">

                  {/* 1.8-Second Stay Timer Progress Bar */}
                  {stayTimerProgress > 0 && !isHoveringCard && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-black/5">
                      <div
                        className="h-full bg-ochre-500 transition-all duration-75"
                        style={{ width: `${stayTimerProgress}%` }}
                      />
                    </div>
                  )}

                  {/* Top Bar: Region, Altitude & Close */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wider uppercase text-ochre-700 bg-ochre-50 px-2.5 py-1 rounded-full border border-ochre-200/50">
                      <Compass className="w-3 h-3 text-ochre-600" />
                      <span>{activeDrink.region} • {activeDrink.altitude}</span>
                    </span>
                    <button
                      type="button"
                      onClick={handleCloseImmediately}
                      title="Close"
                      className="text-obsidian-400 hover:text-obsidian-800 p-1 rounded-full hover:bg-black/5 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Drink Name & Price */}
                  <div className="flex items-start justify-between gap-2 border-b border-black/5 pb-2.5">
                    <div>
                      <h3 className="font-display text-xl font-normal text-obsidian-950 leading-tight">
                        {activeDrink.name}
                      </h3>
                      <p className="text-xs text-ochre-600 font-medium mt-0.5">
                        {activeDrink.flavorNotes}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs font-bold text-obsidian-950">
                        NPR {activeDrink.price.toLocaleString()}
                      </div>
                      <div className="text-[10px] text-obsidian-400 font-mono">
                        {activeDrink.dots}
                      </div>
                    </div>
                  </div>

                  {/* Botanicals & Ingredients */}
                  <div className="p-2.5 rounded-xl bg-sand-50/80 border border-black/5 text-xs text-obsidian-700 leading-relaxed">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-ochre-700 font-semibold mb-0.5 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-ochre-600" />
                      <span>Ingredients</span>
                    </div>
                    <div>{activeDrink.ingredients}</div>
                  </div>

                  {/* Poetic Tasting Story */}
                  <p className="text-xs text-obsidian-600 font-light italic leading-relaxed">
                    "{activeDrink.description}"
                  </p>

                  {/* Add to Feast Action Button */}
                  <button
                    type="button"
                    onClick={(e) => handleAdd(activeDrink, e)}
                    className={`w-full py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 shadow-xs active:scale-[0.97] ${
                      addedId === activeDrink.id
                        ? 'bg-emerald-600 text-white animate-success-pulse'
                        : 'bg-ochre-500 hover:bg-ochre-600 text-white'
                    }`}
                  >
                    {addedId === activeDrink.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to Feast!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Feast • NPR {activeDrink.price.toLocaleString()}</span>
                      </>
                    )}
                  </button>

                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
