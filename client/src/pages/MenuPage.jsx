import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Sparkles, Utensils, Eye } from 'lucide-react';

export default function MenuPage({ onOpenDish, tray = [], onAddToTray, setActivePage }) {
  const [hoveredDish, setHoveredDish] = useState(null);
  const leaveTimeoutRef = useRef(null);

  // High performance GPU-accelerated cursor tracking
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const springX = useSpring(mouseX, { stiffness: 450, damping: 32, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 32, mass: 0.4 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const clampedX = Math.min(e.clientX + 24, window.innerWidth - 290);
      const clampedY = Math.min(Math.max(e.clientY - 130, 80), window.innerHeight - 350);
      mouseX.set(clampedX);
      mouseY.set(clampedY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, [mouseX, mouseY]);

  const handleMouseEnter = (dish) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setHoveredDish(dish);
  };

  const handleMouseLeave = () => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredDish(null);
    }, 130);
  };

  // Complete authentic menu with high-resolution food catalog imagery
  const starters = [
    {
      id: "starters-1",
      name: "Pan-Fried Kothey Momos",
      nepaliName: "पान-फ्राइड कोठे मोमो",
      description: "Handcrafted dumplings with golden pan-crisped bottoms, served with fire-roasted tomato and wild timmur achar",
      price: 650,
      region: "Tibet & Nepal",
      dietary: "non-veg",
      spicyLevel: 2,
      isSignature: true,
      image: "/food-catalog/kothey-momo.jpg"
    },
    {
      id: "starters-2",
      name: "Tibetan Mokthuk Soup",
      nepaliName: "मोकथुक मोमो सुप",
      description: "Delicate handmade momo dumplings immersed in a nourishing bone marrow and mountain herbal broth with fresh baby bok choy",
      price: 700,
      region: "Tibet",
      dietary: "non-veg",
      spicyLevel: 1,
      isSignature: false,
      image: "/food-catalog/mokthuk-soup.jpg"
    },
    {
      id: "starters-3",
      name: "Spinach & Mushroom Datshi Crostini",
      nepaliName: "च्याउ र पालुङ्गो दात्शी क्रोस्टिनी",
      description: "Toasted mountain sourdough topped with wild Himalayan forest mushrooms and spinach smothered in melted artisanal Bhutanese cow's milk cheese",
      price: 680,
      region: "Bhutan",
      dietary: "veg",
      spicyLevel: 1,
      isSignature: true,
      image: "/food-catalog/datshi-crostini.jpg"
    },
    {
      id: "starters-4",
      name: "Crispy Shapalay with Fire Achar",
      nepaliName: "कुरकुरा शापाले",
      description: "Golden fried half-moon Tibetan meat pies filled with spiced minced meat, spring onions, and garlic, served with charred mountain timmur dip",
      price: 580,
      region: "Tibet & Nepal",
      dietary: "non-veg",
      spicyLevel: 2,
      isSignature: false,
      image: "/food-catalog/shapalay.jpg"
    },
    {
      id: "starters-5",
      name: "Dohkhleh Minced Herb Salad",
      nepaliName: "दोहखलेह सलाद",
      description: "Traditional Khasi warm minced meat salad tossed with fresh mountain ginger, sliced shallots, mustard oil, and mountain coriander",
      price: 620,
      region: "Meghalaya",
      dietary: "non-veg",
      spicyLevel: 1,
      isSignature: false,
      image: "/food-catalog/jadoh-rice.jpg"
    },
    {
      id: "starters-6",
      name: "Handcrafted Steamed Momos",
      nepaliName: "हाते बाफिएको मोमो",
      description: "Traditional juicy steamed dumplings pleated fresh every morning with roasted timmur-sesame dipping sauce",
      price: 600,
      region: "Kathmandu Valley",
      dietary: "non-veg",
      spicyLevel: 1,
      isSignature: false,
      image: "/food-catalog/steamed-momos.jpg"
    }
  ];

  const mainCourses = [
    {
      id: "mains-1",
      name: "Naga Smoked Pork / Mountain Curry",
      nepaliName: "नागा स्मोक्ड पोर्क करी",
      description: "Tender, slow-braised mountain pork chunks with whole stewed chilies and fermented bamboo shoots in an aromatic rich gravy, served in a sizzling cast iron pan",
      price: 1850,
      region: "Nagaland",
      dietary: "non-veg",
      spicyLevel: 3,
      isSignature: true,
      image: "/food-catalog/naga-pork.jpg"
    },
    {
      id: "mains-2",
      name: "Freshly Steamed Tingmo & Ema Datshi",
      nepaliName: "ताजा तिङमो र एमा दात्शी",
      description: "Fluffy handmade spiral Tibetan Tingmo bread buns served piping hot alongside Bhutan's fiery green mountain chilies simmered in melted Himalayan cheese gravy",
      price: 1000,
      region: "Bhutan & Tibet",
      dietary: "veg",
      spicyLevel: 3,
      isSignature: true,
      image: "/food-catalog/tingmo-datshi.jpg"
    },
    {
      id: "mains-3",
      name: "Authentic Nepali Courtyard Thali",
      nepaliName: "विशेष नेपाली आँगन थाली",
      description: "Complete feast with slow-cooked black daal finished with local mountain ghee, tender goat mutton curry, seasonal wild greens (saag), spiced cucumber achar, and dalle pickle",
      price: 1450,
      region: "Kathmandu Valley",
      dietary: "non-veg",
      spicyLevel: 2,
      isSignature: true,
      image: "/food-catalog/courtyard-thali.jpg"
    },
    {
      id: "mains-4",
      name: "Jadoh & Dohkhleh Platter",
      nepaliName: "जाडोह र दोहखलेह",
      description: "Traditional Khasi Meghalayan aromatic short-grain rice cooked with mountain spices, served with fresh Dohkhleh salad with ginger, fresh mountain herbs, and shallots",
      price: 850,
      region: "Meghalaya",
      dietary: "non-veg",
      spicyLevel: 2,
      isSignature: true,
      image: "/food-catalog/jadoh-rice.jpg"
    },
    {
      id: "mains-5",
      name: "Slow-Simmered Himalayan Mutton",
      nepaliName: "हिमालयन खसीको मासु",
      description: "Free-range mountain mutton slow-simmered for 5 hours over sal wood coals with whole shallots, ginger, garlic, and wild Dolpa timmur peppercorns",
      price: 1650,
      region: "Dolpa & Mustang",
      dietary: "non-veg",
      spicyLevel: 2,
      isSignature: false,
      image: "/food-catalog/slow-cooked-mutton.jpg"
    },
    {
      id: "mains-6",
      name: "Wood-Charred Himalayan Sekuwa",
      nepaliName: "आगोमा पोलेको सेकुवा",
      description: "Tender spiced mountain meat skewers grilled over live cured sal hardwood coals, basted with mustard oil, fresh lemon, crushed wild herbs, and smoked rock salt",
      price: 1100,
      region: "Eastern Nepal",
      dietary: "non-veg",
      spicyLevel: 2,
      isSignature: false,
      image: "/food-catalog/himalayan-sekuwa.jpg"
    },
    {
      id: "mains-7",
      name: "Vegetarian Datshi & Red Rice Feast",
      nepaliName: "शाकाहारी दात्शी र रातो चामल",
      description: "Bhutanese roasted chili cheese and potato cheese curry served with steamed red rice, buttered seasonal mountain greens, and house radish pickle",
      price: 1150,
      region: "Bhutan",
      dietary: "veg",
      spicyLevel: 2,
      isSignature: false,
      image: "/food-catalog/tingmo-datshi.jpg"
    }
  ];

  const desserts = [
    {
      id: "dessert-1",
      name: "Himalayan Chhurpi & Saffron Cheesecake",
      nepaliName: "छुर्पी र केसर चीजकेक",
      description: "Velvety baked cheesecake balanced with artisanal soft chhurpi curd, Kashmiri saffron swirl, and buckwheat biscuit crust",
      price: 650,
      region: "Nepal & Tibet",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: true,
      image: "/food-catalog/chhurpi-cheesecake.jpg"
    },
    {
      id: "dessert-2",
      name: "Wild Honey & Buckwheat Tartlet",
      nepaliName: "जङ्गली मह र फापरको टार्ट",
      description: "Mustang Tartary buckwheat crisp crust filled with caramelized mountain honey cream and toasted pine nuts",
      price: 550,
      region: "Mustang",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: false,
      image: "/food-catalog/buckwheat-tartlet.jpg"
    },
    {
      id: "dessert-3",
      name: "Warm Cardamom Kheer",
      nepaliName: "तातो सुकुमेल खीर",
      description: "Slow-cooked Himalayan aromatic rice pudding with full-cream milk, crushed green cardamom, golden raisins, and slivered pistachios",
      price: 450,
      region: "Kathmandu Valley",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: false,
      image: "/food-catalog/buckwheat-tartlet.jpg"
    }
  ];

  const cocktails = [
    {
      id: "drink-1",
      name: "Timur Smoked Old Fashioned",
      nepaliName: "टिमुर स्मोक्ड ओल्ड फ्यासन",
      description: "Oak-aged bourbon infused with foraged Himalayan Timur pepper, raw wildflower honey, Angostura bitters, and pine smoke crafted at the ARAK bar counter",
      price: 850,
      region: "Arak Bar Kathmandu",
      dietary: "veg",
      spicyLevel: 1,
      isSignature: true,
      image: "/food-catalog/arak-cocktail.jpg"
    },
    {
      id: "drink-2",
      name: "Kathmandu Lapsi Titaura Sour",
      nepaliName: "तीतो तितौरा सावर",
      description: "Artisanal dry gin shaken with spiced lapsi (hog plum) titaura syrup, fresh lime juice, silky egg white foam, and a dehydrated citrus wheel",
      price: 800,
      region: "Arak Bar Kathmandu",
      dietary: "non-veg",
      spicyLevel: 0,
      isSignature: true,
      image: "/food-catalog/arak-cocktail.jpg"
    },
    {
      id: "drink-3",
      name: "Dolpa Juniper & Wild Pine Fizz",
      nepaliName: "डोल्पा जुनिपर र पाइन फिज",
      description: "Craft Himalayan gin distilled with Dolpa juniper berries, muddled cucumber, wild pine needle cordial, and crisp sparkling mountain soda",
      price: 820,
      region: "Dolpa & Kathmandu",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: true,
      image: "/food-catalog/arak-cocktail.jpg"
    },
    {
      id: "drink-4",
      name: "Warm Spiced Himalayan Arak Toddy",
      nepaliName: "तातो मसलेदार अराक टडी",
      description: "Double-distilled mountain millet arak gently warmed with wild clover honey, cinnamon bark, cloves, and a charred orange wheel. Perfect by the courtyard fire pits",
      price: 750,
      region: "Himalayan Foothills",
      dietary: "veg",
      spicyLevel: 1,
      isSignature: true,
      image: "/food-catalog/arak-cocktail.jpg"
    }
  ];

  const teas = [
    {
      id: "tea-1",
      name: "Traditional Tibetan Butter Tea (Po Cha)",
      nepaliName: "परम्परागत पो छा (बटर टी)",
      description: "Authentic highland brick tea churned with fresh yak butter and Himalayan rock salt. Rich, savory, and restorative",
      price: 350,
      region: "High Himalayas",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: true,
      image: "/food-catalog/po-cha-tea.jpg"
    },
    {
      id: "tea-2",
      name: "Ilam First-Flush Orthodox Black Tea",
      nepaliName: "इलाम पहिलो टिपाइ अर्थोडक्स चिया",
      description: "Hand-picked tender whole leaves from certified organic gardens in Ilam. Delicate floral muscatel notes with honeyed sweetness",
      price: 400,
      region: "Ilam Eastern Nepal",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: false,
      image: "/food-catalog/himalayan-herbal-tea.jpg"
    },
    {
      id: "tea-3",
      name: "Wild Mint & Lemongrass Mountain Infusion",
      nepaliName: "जङ्गली पुदिना र कागती घाँस",
      description: "Caffeine-free soothing blend of sun-dried mountain spearmint, fresh lemongrass stalks, and crushed ginger root",
      price: 380,
      region: "Himalayan Foothills",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: false,
      image: "/food-catalog/himalayan-herbal-tea.jpg"
    }
  ];

  const wines = [
    {
      id: "wine-1",
      name: "Reserve Mountain Pinot Noir",
      nepaliName: "रिजर्भ पिनो नुवार",
      description: "Elegant medium-bodied red with notes of dark mountain cherries, forest floor, and delicate French oak. Glass — Rs.950",
      price: 4500,
      region: "Estate Selection",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: true,
      image: "/food-catalog/arak-cocktail.jpg"
    },
    {
      id: "wine-2",
      name: "Crisp High-Altitude Sauvignon Blanc",
      nepaliName: "सोभिग्नन ब्लाङ्क",
      description: "Vibrant dry white with citrus zest, gooseberry, and flinty mineral backbone. Glass — Rs.900",
      price: 4200,
      region: "Estate Selection",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: false,
      image: "/food-catalog/arak-cocktail.jpg"
    },
    {
      id: "wine-3",
      name: "Prosecco Extra Dry Spumante",
      nepaliName: "प्रोसेको अतिरिक्त सुख्खा",
      description: "Fine perlage with green apple bouquet and white peach aromas. Celebratory bottle for courtyard evenings",
      price: 5800,
      region: "Veneto, Italy",
      dietary: "veg",
      spicyLevel: 0,
      isSignature: false,
      image: "/food-catalog/arak-cocktail.jpg"
    }
  ];

  // Minimalist Chéz Caroline menu item: Name + Price with floating on-hover image preview
  const renderItem = (dish) => (
    <div 
      key={dish.id} 
      onMouseEnter={() => handleMouseEnter(dish)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenDish && onOpenDish(dish)}
      className="group relative py-3 px-3.5 rounded-xl hover:bg-black/[0.03] transition-colors cursor-pointer flex items-baseline justify-between gap-4 border-b border-obsidian-200/50"
    >
      <div className="flex items-baseline gap-2.5 min-w-0">
        <span className="font-menu text-xl sm:text-2xl text-obsidian-950 font-normal tracking-tight group-hover:text-terracotta-600 transition-colors truncate">
          {dish.name}
        </span>
        {dish.isSignature && (
          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-terracotta-500" title="Signature Dish" />
        )}
      </div>

      <div className="flex items-baseline gap-3 shrink-0">
        <span className="font-sans text-base sm:text-lg font-light text-obsidian-600 tracking-wide group-hover:text-obsidian-950 transition-colors">
          — Rs.{dish.price.toLocaleString()}
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-32 pb-32 px-6 sm:px-10 lg:px-14 text-obsidian-950 relative">
      
      {/* ========================================================================= */}
      {/* FLOATING CURSOR IMAGE PREVIEW ON HOVER (SMOOTH HARDWARE ACCELERATED)       */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {hoveredDish && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{ x: springX, y: springY }}
            className="fixed top-0 left-0 pointer-events-none z-50 hidden lg:flex flex-col bg-white p-3.5 rounded-2xl shadow-2xl border border-obsidian-200/80 w-64 will-change-transform"
          >
            {/* White blended image with smooth cross-fade transition */}
            <div className="w-full aspect-square rounded-xl bg-white overflow-hidden flex items-center justify-center p-2 mb-2 relative">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={hoveredDish.image} 
                  src={hoveredDish.image} 
                  alt={hoveredDish.name} 
                  initial={{ opacity: 0.25, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.25, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="w-full h-full object-contain absolute inset-0 p-2"
                />
              </AnimatePresence>
            </div>
            
            <div className="text-center w-full px-1 space-y-1">
              <h4 className="font-display font-medium text-sm text-obsidian-950 truncate">
                {hoveredDish.name}
              </h4>
              {hoveredDish.nepaliName && (
                <p className="text-[11px] text-obsidian-500 font-sans tracking-wide">
                  {hoveredDish.nepaliName}
                </p>
              )}
              <p className="text-[11px] text-obsidian-600 font-normal line-clamp-2 leading-relaxed pt-0.5">
                {hoveredDish.description}
              </p>
              <div className="pt-2 border-t border-obsidian-100 flex items-center justify-between text-xs font-mono">
                <span className="text-[10px] text-terracotta-700 bg-terracotta-50 px-2 py-0.5 rounded-full font-medium">
                  {hoveredDish.region}
                </span>
                <span className="font-bold text-obsidian-900">
                  Rs.{hoveredDish.price.toLocaleString()}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full max-w-6xl mx-auto space-y-16"
      >
        
        {/* ========================================================================= */}
        {/* CHÉZ CAROLINE HEADER: JUST 'MENU' & 'ALL RATES ARE TAX INCLUDED'          */}
        {/* ========================================================================= */}
        <div className="text-center space-y-2 pb-6 border-b border-obsidian-200/60">
          <h1 className="font-menu text-4xl sm:text-6xl font-normal text-obsidian-950 tracking-tight">
            Menu
          </h1>
          <p className="text-xs sm:text-sm font-sans text-obsidian-500 font-normal tracking-wide">
            All rates are Tax included • Hover over any item to view its plate
          </p>
        </div>

        {/* 1. STARTERS */}
        <section className="space-y-6">
          <h2 className="font-menu text-2xl sm:text-3xl font-normal text-terracotta-600 text-center tracking-wide">
            Starters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-2.5">
            {starters.map(renderItem)}
          </div>
        </section>

        {/* 2. MAIN COURSES */}
        <section className="space-y-6">
          <h2 className="font-menu text-2xl sm:text-3xl font-normal text-terracotta-600 text-center tracking-wide">
            Main Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-2.5">
            {mainCourses.map(renderItem)}
          </div>
        </section>

        {/* 3. DESSERTS */}
        <section className="space-y-6">
          <h2 className="font-menu text-2xl sm:text-3xl font-normal text-terracotta-600 text-center tracking-wide">
            Desserts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-2.5">
            {desserts.map(renderItem)}
          </div>
        </section>

        {/* 4. COCKTAILS */}
        <section className="space-y-6">
          <h2 className="font-menu text-2xl sm:text-3xl font-normal text-terracotta-600 text-center tracking-wide">
            Crafted Cocktails & Arak Spirits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-2.5">
            {cocktails.map(renderItem)}
          </div>
        </section>

        {/* 5. TEAS */}
        <section className="space-y-6">
          <h2 className="font-menu text-2xl sm:text-3xl font-normal text-terracotta-600 text-center tracking-wide">
            Mountain Teas & Infusions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-2.5">
            {teas.map(renderItem)}
          </div>
        </section>

        {/* 6. WINES */}
        <section className="space-y-6">
          <h2 className="font-menu text-2xl sm:text-3xl font-normal text-terracotta-600 text-center tracking-wide">
            Wines & Bubbles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-2.5">
            {wines.map(renderItem)}
          </div>
        </section>

      </motion.div>
    </div>
  );
}
