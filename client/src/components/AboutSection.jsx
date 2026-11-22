import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Compass, Mountain, Sparkles, Utensils, HeartHandshake, MapPin, ArrowRight } from 'lucide-react';

export const foodCatalogData = [
  {
    id: 'cat-1',
    name: 'Pan-Fried Kothey Momos',
    nepaliName: 'पान-फ्राइड कोठे मोमो',
    region: 'Tibet & Nepal',
    price: '650',
    description: 'Golden crisped crescent dumplings with roasted tomato-timmur achar.',
    image: '/food-catalog/kothey-momo.jpg',
    tag: 'Courtyard Favorite'
  },
  {
    id: 'cat-2',
    name: 'Steamed Tingmo & Ema Datshi',
    nepaliName: 'ताजा तिङमो र एमा दात्शी',
    region: 'Bhutan & Tibet',
    price: '1,000',
    description: 'Handmade spiral steamed buns with bubbling mountain cheese & chili gravy.',
    image: '/food-catalog/tingmo-datshi.jpg',
    tag: 'Signature Pairing'
  },
  {
    id: 'cat-3',
    name: 'Naga Smoked Pork',
    nepaliName: 'नागा स्मोक्ड पोर्क करी',
    region: 'Nagaland',
    price: '1,850',
    description: 'Slow-braised wood-smoked pork belly with fermented bamboo shoots in cast iron.',
    image: '/food-catalog/naga-pork.jpg',
    tag: 'Slow-Braised'
  },
  {
    id: 'cat-4',
    name: 'Authentic Courtyard Thali',
    nepaliName: 'परम्परागत नेपाली थाली',
    region: 'Kathmandu Valley',
    price: '1,200',
    description: 'Brass platter with slow black lentils, mustard greens, mountain curry & local ghee.',
    image: '/food-catalog/courtyard-thali.jpg',
    tag: 'Traditional'
  },
  {
    id: 'cat-5',
    name: 'Wood-Charred Himalayan Sekuwa',
    nepaliName: 'हिमाली सेकुवा',
    region: 'Eastern Nepal',
    price: '1,100',
    description: 'Tender spiced mutton skewers grilled over cured sal firewood with fresh herbs.',
    image: '/food-catalog/himalayan-sekuwa.jpg',
    tag: 'Live Fire'
  },
  {
    id: 'cat-6',
    name: 'Crafted Arak Botanical Cocktail',
    nepaliName: 'अराक बोटानिकल ककटेल',
    region: 'The Arak Bar',
    price: '850',
    description: 'Mountain spirit distillate infused with roasted grains, lapsi titaura & pine smoke.',
    image: '/food-catalog/arak-cocktail.jpg',
    tag: 'Artisanal Spirit'
  },
  {
    id: 'cat-7',
    name: 'Slow-Simmered Himalayan Mutton',
    nepaliName: 'धीमा पाकेको हिमाली खसी',
    region: 'Himalayan Ridge',
    price: '1,450',
    description: 'Tender bone-in mutton slow-cooked in glossy mountain gravy with crushed cumin.',
    image: '/food-catalog/slow-cooked-mutton.jpg',
    tag: 'Hearth Braised'
  },
  {
    id: 'cat-8',
    name: 'Crispy Tibetan Shapalay',
    nepaliName: 'कुरकुरा शापाले',
    region: 'Tibet',
    price: '580',
    description: 'Flaky golden half-moon meat pies with charred mountain timmur relish.',
    image: '/food-catalog/shapalay.jpg',
    tag: 'Hand-Pleated'
  },
  {
    id: 'cat-9',
    name: 'Tibetan Mokthuk Soup',
    nepaliName: 'मोकथुक मोमो सुप',
    region: 'Tibet',
    price: '700',
    description: 'Comforting bone broth with delicate handmade dumplings and baby bok choy.',
    image: '/food-catalog/mokthuk-soup.jpg',
    tag: 'Nourishing'
  },
  {
    id: 'cat-10',
    name: 'Chhurpi & Saffron Cheesecake',
    nepaliName: 'छुपु र केसर चिजकेक',
    region: 'Langtang & Mustang',
    price: '650',
    description: 'Refined artisanal yak milk cheese cake with wild mountain berry reduction.',
    image: '/food-catalog/chhurpi-cheesecake.jpg',
    tag: 'Highland Dessert'
  },
  {
    id: 'cat-11',
    name: 'Authentic Tibetan Po Cha',
    nepaliName: 'परम्परागत पो छा (बटर टी)',
    region: 'High Himalayas',
    price: '350',
    description: 'Frothy churned organic tea with yak butter, rock salt, and roasted tsampa.',
    image: '/food-catalog/po-cha-tea.jpg',
    tag: 'Highland Ritual'
  },
  {
    id: 'cat-12',
    name: 'Mushroom Datshi Crostini',
    nepaliName: 'च्याउ दात्शी क्रोस्टिनी',
    region: 'Bhutan & Alps',
    price: '680',
    description: 'Toasted rustic sourdough topped with wild forest mushrooms and molten cheese.',
    image: '/food-catalog/datshi-crostini.jpg',
    tag: 'Artisan Tapas'
  },
  {
    id: 'cat-13',
    name: 'Handcrafted Steamed Momos',
    nepaliName: 'हाते बाफिएको मोमो',
    region: 'Nepal & Tibet',
    price: '600',
    description: 'Traditional juicy dumplings pleated fresh every morning with timmur sesame sauce.',
    image: '/food-catalog/steamed-momos.jpg',
    tag: 'Daily Fresh'
  },
  {
    id: 'cat-14',
    name: 'Mustang Wild Honey Tartlet',
    nepaliName: 'मुस्ताङ मह र फापर टार्ट',
    region: 'Mustang',
    price: '550',
    description: 'Nutty buckwheat flour pastry shell filled with roasted nuts and amber honey.',
    image: '/food-catalog/buckwheat-tartlet.jpg',
    tag: 'Organic Harvest'
  },
  {
    id: 'cat-15',
    name: 'Organic Ilam Orthodox Tea',
    nepaliName: 'इलाम अर्थोडक्स चिया',
    region: 'Ilam Hills',
    price: '400',
    description: 'Single-estate first flush black tea infused with wild mountain mint.',
    image: '/food-catalog/himalayan-herbal-tea.jpg',
    tag: 'Single-Estate'
  },
  {
    id: 'cat-16',
    name: 'Highland Spiced Jadoh Rice',
    nepaliName: 'जादह हिमाली भात',
    region: 'Meghalaya',
    price: '850',
    description: 'Fragrant short-grain rice braised with mountain ginger, pork and black sesame.',
    image: '/food-catalog/jadoh-rice.jpg',
    tag: 'Hill Tribes'
  }
];

export default function AboutSection({ onOpenDish, setActivePage }) {
  return (
    <section className="w-full bg-white text-obsidian-950 overflow-hidden pt-20 sm:pt-28 pb-24 sm:pb-32">
      
      {/* ========================================================================= */}
      {/* 1. EDITORIAL INTRO: GROUNDED NARRATIVE (NO QUESTIONS)                     */}
      {/* ========================================================================= */}
      <div className="w-full px-6 sm:px-10 lg:px-14 mb-16 sm:mb-24">
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-terracotta-600">
            <span className="w-2 h-2 rounded-full bg-terracotta-500 animate-pulse"></span>
            <span>Heritage & Hearth</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light text-obsidian-950 tracking-tight leading-[1.08]">
            An elemental mountain sanctuary tucked within the stone courtyards of Lazimpat.
          </h2>
          <p className="text-base sm:text-lg text-obsidian-600 font-normal leading-relaxed max-w-2xl pt-2">
            Built upon ancient Himalayan folklore, rooted in cured wood embers, and committed to bringing five distinct highland foodways together under Kathmandu’s open sky.
          </p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. 50/50 SPLIT 1: WHO WE ARE (THE FIREKEEPER)                              */}
      {/* ========================================================================= */}
      <div className="w-full px-6 sm:px-10 lg:px-14 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Copy */}
          <div className="space-y-6 sm:space-y-7 pr-0 lg:pr-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-terracotta-600 block">
                01 / Sanctuary & Origin
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-medium text-obsidian-950 tracking-tight leading-snug">
                The Mountain Firekeeper in Kathmandu
              </h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-obsidian-700 leading-relaxed font-normal">
              <p>
                In high Himalayan lore, the <strong>Banmanche</strong> is the guardian of the ridge forests. When biting blizzards swept the mountain passes, salt traders, herders, and pilgrims looked for the Banmanche's glowing hearth—a welcoming fire that never went out, where travelers from distant valleys could thaw their hands, break bread, and find sanctuary.
              </p>
              <p>
                We built Banmanche in Kathmandu to carry that exact hospitality forward. Tucked away on Kailashchaur Marg in Dhobichaur, just past Narayanhiti Palace, our courtyard is an open-air refuge shielded from city noise—a place where the warmth of a mountain hearth invites strangers to sit together as friends.
              </p>
            </div>

            {/* Architecture Details Bar */}
            <div className="pt-4 border-t border-obsidian-100 grid grid-cols-3 gap-4 text-xs font-mono text-obsidian-600">
              <div>
                <strong className="block text-sm text-obsidian-950 font-sans font-semibold">85 Seats</strong>
                Courtyard, hearth & bar
              </div>
              <div>
                <strong className="block text-sm text-obsidian-950 font-sans font-semibold">Sal & Oak</strong>
                Cured firewood embers
              </div>
              <div>
                <strong className="block text-sm text-obsidian-950 font-sans font-semibold">Dhobichaur</strong>
                Uttar Dhoka, Lazimpat
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Image */}
          <div className="relative group overflow-hidden rounded-2xl border border-obsidian-100 shadow-sm aspect-[4/3] sm:aspect-[16/11]">
            <img
              src="/banmanche-entrance.jpg"
              alt="Hand-carved Newari timber Torana entrance to Banmanche Courtyard"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
              <span className="font-mono text-[10px] uppercase tracking-wider text-sand-300 block">The Courtyard Portal</span>
              <p className="font-medium text-white/95 mt-0.5">Carved Newari timber Torana greeting guests from Kailashchaur Marg</p>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. 50/50 SPLIT 2: WHAT WE ARE DOING (FIVE HIGHLAND LINEAGES)               */}
      {/* ========================================================================= */}
      <div className="w-full px-6 sm:px-10 lg:px-14 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Atmospheric Fireplace & Feast Photo */}
          <div className="relative group overflow-hidden rounded-2xl border border-obsidian-100 shadow-sm aspect-[4/3] sm:aspect-[16/11] order-2 lg:order-1">
            <img
              src="/himalayan-feast.jpg"
              alt="Himalayan feast simmered over live embers in cast iron vessels"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
              <span className="font-mono text-[10px] uppercase tracking-wider text-sand-300 block">The Highland Table</span>
              <p className="font-medium text-white/95 mt-0.5">Slow-simmered cast-iron braises, fresh bamboo tingmo, and mountain chili dips</p>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="space-y-6 sm:space-y-7 pl-0 lg:pl-6 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-terracotta-600 block">
                02 / Culinary Lineage
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-medium text-obsidian-950 tracking-tight leading-snug">
                Gathering Five Mountain Foodways Under One Sky
              </h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-obsidian-700 leading-relaxed font-normal">
              <p>
                The Himalayan arc spans thousands of rugged kilometers across Nepal, Tibet, Bhutan, and the tribal ranges of Nagaland and Meghalaya. While divided by geography, these highlanders share an elemental approach to eating: slow braising over hardwood embers, preservation through smoking and fermentation, and food shared family-style.
              </p>
              <p>
                We bring these distinct culinary traditions onto a single menu. We do not dilute recipes for convenience—whether it is authentic Naga smoked pork simmered with sun-dried bamboo shoots, molten Bhutanese Ema Datshi, steamed spiral Tingmo rolls, or spiced cast-iron Sekuwa.
              </p>
            </div>

            {/* Regional Terroir Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 bg-sand-50 rounded-xl border border-obsidian-100/80">
                <span className="text-[10px] font-mono uppercase text-terracotta-700 block">Nagaland</span>
                <p className="text-xs font-medium text-obsidian-900 mt-1">Smoked Pork & Bamboo</p>
              </div>
              <div className="p-3 bg-sand-50 rounded-xl border border-obsidian-100/80">
                <span className="text-[10px] font-mono uppercase text-terracotta-700 block">Bhutan</span>
                <p className="text-xs font-medium text-obsidian-900 mt-1">Ema Datshi & Yak Cheese</p>
              </div>
              <div className="p-3 bg-sand-50 rounded-xl border border-obsidian-100/80">
                <span className="text-[10px] font-mono uppercase text-terracotta-700 block">Tibet</span>
                <p className="text-xs font-medium text-obsidian-900 mt-1">Tingmo, Momos & Mokthuk</p>
              </div>
              <div className="p-3 bg-sand-50 rounded-xl border border-obsidian-100/80">
                <span className="text-[10px] font-mono uppercase text-terracotta-700 block">Nepal & Hills</span>
                <p className="text-xs font-medium text-obsidian-900 mt-1">Woodfire Sekuwa & Thali</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. HOW WE DO THAT: CRAFT, FIREWOOD & MOUNTAIN SOURCING                     */}
      {/* ========================================================================= */}
      <div className="w-full px-6 sm:px-10 lg:px-14 mb-24 sm:mb-32">
        <div className="border-t border-obsidian-200/80 pt-16 sm:pt-20">
          <div className="max-w-2xl mb-12 sm:mb-16 space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-terracotta-600 block">
              03 / Craft & Method
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-medium text-obsidian-950 tracking-tight">
              Live Embers, Direct Terroir Sourcing & Slow Craft
            </h3>
            <p className="text-sm sm:text-base text-obsidian-600 leading-relaxed font-normal">
              The three non-negotiable kitchen principles that govern our firewood hearth, our ingredients, and the dining experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-sand-50/70 border border-obsidian-100 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-obsidian-100 flex items-center justify-center text-terracotta-600">
                <Flame className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-terracotta-600">Technique</span>
                <h4 className="font-display text-lg sm:text-xl font-medium text-obsidian-950">
                  Live Sal & Oak Firewood
                </h4>
                <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed font-normal">
                  We never rely on commercial gas burners for our core braises and broths. Every pot simmers directly over cured sal and oak embers, imparting a gentle, deep wood smoke that gas simply cannot duplicate.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-sand-50/70 border border-obsidian-100 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-obsidian-100 flex items-center justify-center text-terracotta-600">
                <Compass className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-terracotta-600">Provenance</span>
                <h4 className="font-display text-lg sm:text-xl font-medium text-obsidian-950">
                  Direct High-Altitude Sourcing
                </h4>
                <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed font-normal">
                  We partner directly with mountain growers: bitter buckwheat flour from high Mustang, wild citrus timmur peppercorns from Dolpa, orthodox black tea from Ilam, and fermented bamboo dried by village families in Nagaland.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-sand-50/70 border border-obsidian-100 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-obsidian-100 flex items-center justify-center text-terracotta-600">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-terracotta-600">Hospitality</span>
                <h4 className="font-display text-lg sm:text-xl font-medium text-obsidian-950">
                  Communal Cast-Iron Feasting
                </h4>
                <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed font-normal">
                  Meats are brought sizzling to your table in cast-iron skillets; tingmo buns arrive warm in handwoven bamboo baskets meant to be torn and shared. Good food in the mountains has always been a communal affair.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. 4 X 4 PICTURES CATALOG OF FOOD (16 DISHES, WHITE BG, PERFECT BLENDING) */}
      {/* ========================================================================= */}
      <div className="w-full px-6 sm:px-10 lg:px-14">
        <div className="border-t border-obsidian-200/80 pt-16 sm:pt-20">
          
          {/* Catalog Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-terracotta-600">
              <Utensils className="w-3.5 h-3.5" />
              <span>04 / Culinary Catalog</span>
            </div>
            <h3 className="font-display text-3xl sm:text-5xl font-light text-obsidian-950 tracking-tight leading-tight">
              Sixteen Signatures from the Hearth
            </h3>
            <p className="text-sm sm:text-base text-obsidian-600 font-normal leading-relaxed">
              Every dish is plated fresh daily—photographed on pure white ceramic with zero harsh edges, showcasing our authentic mountain recipes, fresh hand-rolled breads, and botanicals.
            </p>
          </div>

          {/* 4 x 4 Catalog Grid with Generous Spacing Between Pictures */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {foodCatalogData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                onClick={() => onOpenDish && onOpenDish(item)}
                className="group relative flex flex-col bg-white rounded-2xl p-3 sm:p-4 transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:-translate-y-1 cursor-pointer"
              >
                
                {/* Image Container: Pure White Background, Seamless Edge Blending */}
                <div className="w-full aspect-square bg-white rounded-xl overflow-hidden flex items-center justify-center p-2 mb-3.5 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle Terroir Badge */}
                  <span className="absolute top-2 left-2 text-[9px] font-mono uppercase tracking-wider text-obsidian-700 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full shadow-2xs border border-obsidian-100">
                    {item.region}
                  </span>
                </div>

                {/* Content Details with Ample Breathing Room */}
                <div className="flex flex-col flex-grow text-center px-1">
                  <h4 className="font-display font-medium text-sm sm:text-base text-obsidian-950 group-hover:text-terracotta-600 transition-colors line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-obsidian-500 font-sans tracking-wide mt-0.5">
                    {item.nepaliName}
                  </p>
                  
                  <p className="text-[11px] sm:text-xs text-obsidian-600 font-normal leading-relaxed line-clamp-2 mt-2 mb-3 flex-grow">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-obsidian-100/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-[10px] text-terracotta-700 bg-terracotta-50 px-2 py-0.5 rounded-md font-medium">
                      {item.tag}
                    </span>
                    <span className="font-bold text-obsidian-900">
                      NPR {item.price}
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

          {/* Quick CTA to Full Menu */}
          <div className="mt-16 sm:mt-20 pt-8 border-t border-obsidian-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="font-display text-lg font-medium text-obsidian-950 block">Explore the Complete Himalayan Menu</span>
              <p className="text-xs text-obsidian-600 mt-0.5">Over 35 traditional dishes, Tibetan steamed rolls, hearth meats, and crafted Arak spirits.</p>
            </div>
            {setActivePage && (
              <button
                onClick={() => {
                  setActivePage('menu');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-terracotta-500 hover:bg-terracotta-600 transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <span>View Full Menu & Pricing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>
      </div>

    </section>
  );
}
