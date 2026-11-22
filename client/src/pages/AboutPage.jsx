import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';

export default function AboutPage() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Dining & Events Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-10 lg:px-14 text-obsidian-900">
      
      {/* 1. EDITORIAL HEADER: LEFT-ALIGNED, NO PILLS, REAL COPY */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl space-y-4 mb-16 border-b border-obsidian-200 pb-12"
      >
        <h1 className="font-display text-4xl sm:text-6xl font-light text-obsidian-950 tracking-tight leading-[1.05]">
          The Story of Banmanche
        </h1>
        <p className="text-lg sm:text-xl text-obsidian-700 font-normal leading-relaxed">
          An open-air hearth in Kathmandu dedicated to the wild cooking traditions of the Eastern Himalayas.
        </p>
      </motion.div>

      {/* 2. THE FOLKLORE & FOUNDATION STORY */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20"
      >
        
        <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-obsidian-700 leading-relaxed font-normal">
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-obsidian-950 tracking-tight">
            The mountain firekeeper
          </h2>

          <p>
            In high Himalayan folklore, the <strong>Banmanche</strong> is the reclusive guardian of the high ridge forests. Mountain herdsmen and salt traders passing through freezing ridges would look for signs of the Banmanche's fire—a hearth that never went out, where travelers from distant passes could warm their hands, share whatever rations they carried, and rest before descending into the valleys.
          </p>

          <p>
            We built Banmanche in Kathmandu to carry forward that exact spirit. The Himalayan mountain arc spans thousands of kilometers across Nepal, Tibet, Bhutan, and the tribal hill ranges of Nagaland and Meghalaya. While separated by borders, these highland cultures share an elemental way of cooking: slow braising over hardwood coals, preservation through smoking and fermentation, and food served family-style around an open fire.
          </p>

          <p>
            Yet in Kathmandu, finding authentic Naga smoked pork with fermented bamboo shoots or genuine Bhutanese Ema Datshi simmered with highland cheeses required traveling to distant valleys. We created this courtyard as a single gathering point where five mountain culinary heritages sit together on the same table.
          </p>

          <div className="pt-4 border-t border-obsidian-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-obsidian-600 font-mono">
            <div>
              <strong className="block text-sm text-obsidian-900 font-sans">85 Seats</strong>
              Courtyard, hearth & bar
            </div>
            <div>
              <strong className="block text-sm text-obsidian-900 font-sans">Sal & Oak</strong>
              Cured mountain firewood
            </div>
            <div>
              <strong className="block text-sm text-obsidian-900 font-sans">Dhobichaur</strong>
              Lazimpat, Kathmandu
            </div>
          </div>
        </div>

        {/* Photography with box border */}
        <div className="lg:col-span-5 border border-obsidian-200 rounded-md overflow-hidden bg-sand-100">
          <div className="aspect-[4/3] w-full overflow-hidden border-b border-obsidian-200">
            <img
              src="https://lh3.googleusercontent.com/grass-cs/AABkmLe6TX9CP2PdqNL89iKAB9v44IxS7Bir9M-axUTZXYUAJFdVHw20usbAeRhdMU_fQ73oO4_4R8DwcvMInReClxeX6VP4F0OyRdR5fJI-pW1481PRnqf7WAusyH48hNtyAVByJps0t7sInho=s1600"
              alt="Carved red wooden Torana entrance at Banmanche"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 space-y-1">
            <span className="text-xs font-mono text-terracotta-600 block">The Courtyard Portal</span>
            <p className="text-xs text-obsidian-700 leading-relaxed font-normal">
              Hand-carved Newari timber Torana draped in ceremonial silk khada scarves, greeting guests as they step from Kailashchaur Marg into the courtyard.
            </p>
          </div>
        </div>

      </motion.div>


      {/* 3. FOUR CORE VALUES: CLEAN BOX BORDERS, REAL PRACTICES */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20 space-y-8 border-t border-obsidian-200 pt-16"
      >
        <div className="max-w-2xl space-y-2">
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-obsidian-950 tracking-tight">
            Our Kitchen Values
          </h2>
          <p className="text-sm text-obsidian-600 leading-relaxed">
            The four principles that govern our firewood hearth, our supplier relationships, and how we run the courtyard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Value 1 */}
          <div className="border border-obsidian-200 rounded-md bg-white p-6 sm:p-8 space-y-3">
            <span className="font-mono text-xs text-terracotta-600">01 / HEARTH</span>
            <h3 className="font-display text-xl font-medium text-obsidian-950">
              Live Wood Embers Only
            </h3>
            <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed font-normal">
              We never use gas burners for our core braises and stews. Every pot of Naga pork, bone broth, and spiced lentil soup simmers directly over cured sal and oak coals. Wood embers impart a gentle, resonant smoky sweetness that gas heat simply cannot reproduce.
            </p>
          </div>

          {/* Value 2 */}
          <div className="border border-obsidian-200 rounded-md bg-white p-6 sm:p-8 space-y-3">
            <span className="font-mono text-xs text-terracotta-600">02 / SOURCING</span>
            <h3 className="font-display text-xl font-medium text-obsidian-950">
              Direct Farmer & Village Sourcing
            </h3>
            <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed font-normal">
              We source directly from mountain smallholders. Our bitter buckwheat comes from high Mustang, timmur peppers from wild shrubs in Dolpa, orthodox black teas from organic growers in Ilam, and traditional fermented bamboo shoots dried by families in Nagaland.
            </p>
          </div>

          {/* Value 3 */}
          <div className="border border-obsidian-200 rounded-md bg-white p-6 sm:p-8 space-y-3">
            <span className="font-mono text-xs text-terracotta-600">03 / HOSPITALITY</span>
            <h3 className="font-display text-xl font-medium text-obsidian-950">
              The Communal Courtyard Table
            </h3>
            <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed font-normal">
              Himalayan dining has always been communal. Meats are served in heavy cast iron pans and tingmo rolls in woven bamboo baskets meant to be broken and shared among friends. We keep our pricing grounded so families and neighbors can return every week.
            </p>
          </div>

          {/* Value 4 */}
          <div className="border border-obsidian-200 rounded-md bg-white p-6 sm:p-8 space-y-3">
            <span className="font-mono text-xs text-terracotta-600">04 / BOTANICALS</span>
            <h3 className="font-display text-xl font-medium text-obsidian-950">
              Preservation & Botanical Arak
            </h3>
            <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed font-normal">
              High-altitude communities survived long mountain winters through fermentation and herbal preservation. At our ARAK bar, we infuse mountain distillates with roasted grains, lapsi titaura (hog plum), wild honey, and Himalayan pine smoke.
            </p>
          </div>

        </div>
      </motion.div>


      {/* 4. THE FOUR MOUNTAIN TRADITIONS (DEEPENING THE STORY) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20 space-y-8 border-t border-obsidian-200 pt-16"
      >
        <div className="max-w-2xl space-y-2">
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-obsidian-950 tracking-tight">
            Four Mountain Culinary Regions
          </h2>
          <p className="text-sm text-obsidian-600 leading-relaxed">
            The distinct regional cooking techniques represented on our daily menu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="border border-obsidian-200 rounded-md bg-sand-100 p-6 space-y-3">
            <div className="font-mono text-xs text-obsidian-500">Region 01</div>
            <h3 className="font-display text-lg font-medium text-obsidian-950">
              Nagaland
            </h3>
            <p className="text-xs text-obsidian-600 leading-relaxed font-normal">
              Wood-smoked pork belly, axle smoke curing, fermented bamboo shoots, and the intense slow burn of crushed mountain bird's eye chilies.
            </p>
          </div>

          <div className="border border-obsidian-200 rounded-md bg-sand-100 p-6 space-y-3">
            <div className="font-mono text-xs text-obsidian-500">Region 02</div>
            <h3 className="font-display text-lg font-medium text-obsidian-950">
              Bhutan
            </h3>
            <p className="text-xs text-obsidian-600 leading-relaxed font-normal">
              Fiery green chilies simmered in artisanal cow and yak milk cheese (Ema Datshi), served alongside warm Himalayan red rice and local mushrooms.
            </p>
          </div>

          <div className="border border-obsidian-200 rounded-md bg-sand-100 p-6 space-y-3">
            <div className="font-mono text-xs text-obsidian-500">Region 03</div>
            <h3 className="font-display text-lg font-medium text-obsidian-950">
              Tibet
            </h3>
            <p className="text-xs text-obsidian-600 leading-relaxed font-normal">
              Steamed spiral Tingmo buns hand-rolled every morning, rich bone-marrow Mokthuk soups, and hand-pleated momos crisped in cast iron.
            </p>
          </div>

          <div className="border border-obsidian-200 rounded-md bg-sand-100 p-6 space-y-3">
            <div className="font-mono text-xs text-obsidian-500">Region 04</div>
            <h3 className="font-display text-lg font-medium text-obsidian-950">
              Nepal & Meghalaya
            </h3>
            <p className="text-xs text-obsidian-600 leading-relaxed font-normal">
              Mustard-oil pan seared Sekuwa, charred fire-roasted tomato and wild timmur achars, and aromatic Khasi short-grain rice platters.
            </p>
          </div>

        </div>
      </motion.div>


      {/* 5. LOCATION & PRACTICAL DIRECTIONS */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20 border-t border-obsidian-200 pt-16"
      >
        
        <div className="lg:col-span-5 border border-obsidian-200 rounded-md p-6 sm:p-8 space-y-6 bg-white">
          <div className="space-y-1">
            <h3 className="font-display text-2xl font-medium text-obsidian-950">
              Visiting the Courtyard
            </h3>
            <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed font-normal">
              Located in the quiet residential corner of Dhobichaur, just off Uttar Dhoka in Lazimpat.
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-obsidian-700">
            <div className="border-t border-obsidian-100 pt-3">
              <strong className="block text-obsidian-950 font-medium">Walking from Thamel:</strong>
              <p className="text-obsidian-600 text-xs mt-0.5">Walk 8 minutes north past Narayanhiti Palace and Keshar Mahal toward Uttar Dhoka.</p>
            </div>
            <div className="border-t border-obsidian-100 pt-3">
              <strong className="block text-obsidian-950 font-medium">Driving from Lazimpat:</strong>
              <p className="text-obsidian-600 text-xs mt-0.5">Turn onto Kailashchaur Marg near Dhobichaur. Secure on-site parking is available for both two-wheelers and cars.</p>
            </div>
            <div className="border-t border-obsidian-100 pt-3">
              <strong className="block text-obsidian-950 font-medium">Daily Hours:</strong>
              <p className="text-obsidian-600 text-xs mt-0.5">Monday through Sunday, 12:00 PM – 10:00 PM</p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://www.google.com/maps/place/BANMANCHE+The+Himalayan+Courtyard/@27.71858,85.321298,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-md text-center text-xs font-medium text-white bg-terracotta-500 hover:bg-terracotta-600 transition-colors block"
            >
              Open Google Maps Coordinates ↗
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 border border-obsidian-200 rounded-md overflow-hidden bg-white">
          <iframe
            title="Banmanche Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0621495146525!2d85.31872307593166!3d27.718584725150935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900110f41f5%3A0x116b7c58f3929e7!2sBANMANCHE%20The%20Himalayan%20Courtyard!5e0!3m2!1sen!2snp!4v1716200000000!5m2!1sen!2snp"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="p-4 border-t border-obsidian-200 flex items-center justify-between text-xs text-obsidian-600">
            <span>Kailashchaur Marg, Dhobichaur, Lazimpat</span>
            <span className="font-mono">Lat: 27.71858, Lng: 85.321298</span>
          </div>
        </div>

      </motion.div>


      {/* 6. CONTACT & PRIVATE GATHERINGS */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="border border-obsidian-200 rounded-md p-6 sm:p-10 bg-white space-y-6"
      >
        <div className="max-w-xl space-y-2">
          <h3 className="font-display text-2xl font-medium text-obsidian-950">
            Private gatherings & events
          </h3>
          <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed font-normal">
            Planning a private family feast, corporate courtyard dinner, or acoustic evening? Send us a note below and our manager will follow up within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 bg-sand-100 border border-obsidian-200 rounded-md space-y-2">
            <div className="flex items-center gap-2 text-obsidian-900 font-medium text-sm">
              <Check className="w-4 h-4 text-terracotta-600" />
              <span>Message received</span>
            </div>
            <p className="text-xs text-obsidian-600 font-normal">
              Thank you. The courtyard team will get back to you directly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-xs font-medium text-obsidian-700">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Shrestha"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-md text-sm border border-obsidian-200 bg-sand-50 focus:outline-none focus:border-terracotta-500"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-medium text-obsidian-700">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="maya@example.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-md text-sm border border-obsidian-200 bg-sand-50 focus:outline-none focus:border-terracotta-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-xs font-medium text-obsidian-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+977 98XXXXXXXX"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-md text-sm border border-obsidian-200 bg-sand-50 focus:outline-none focus:border-terracotta-500"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-medium text-obsidian-700">
                  Inquiry Topic
                </label>
                <select
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-md text-sm border border-obsidian-200 bg-sand-50 focus:outline-none focus:border-terracotta-500"
                >
                  <option value="Dining & Events Inquiry">Dining & Table Inquiry</option>
                  <option value="Private Courtyard Booking">Private Courtyard Booking (20+ Guests)</option>
                  <option value="Acoustic Performance">Acoustic Music / Cultural Performance</option>
                  <option value="Other Feedback">General Questions</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-obsidian-700">
                Message
              </label>
              <textarea
                rows="4"
                required
                placeholder="Tell us about your gathering, dates, or party size..."
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full px-3 py-2.5 rounded-md text-sm border border-obsidian-200 bg-sand-50 focus:outline-none focus:border-terracotta-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-3 rounded-md text-sm font-medium text-white bg-terracotta-500 hover:bg-terracotta-600 transition-colors"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        )}
      </motion.div>

    </div>
  );
}
