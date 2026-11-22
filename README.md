# BANMANCHE: The Himalayan Courtyard & Arak Bar

🌐 **Live Website:** [https://banmanche-courtyard.vercel.app](https://banmanche-courtyard.vercel.app)  
📁 **GitHub Repository:** [https://github.com/Bibidhr/banmanche](https://github.com/Bibidhr/banmanche)

A full-stack **MERN** (MongoDB, Express, React, Node.js) web application built for **BANMANCHE: The Himalayan Courtyard** located at Kailashchaur Marg, Dhobichaur, Kathmandu, Nepal.

Researched and built from verified restaurant data, Google Maps (`27.71858° N, 85.321298° E`), TripAdvisor reviews, menus, and courtyard ambiance details.

---

## 🎨 3-Color Dynamic Tone System

The website adheres strictly to an intentional, atmospheric 3-color palette reflecting the authentic Himalayan courtyard experience:

1. **Himalayan Ochre / Ember Terracotta (`#E07A5F` / `#D46344`)**: 
   - Represents the central courtyard hearth, Himalayan spices (turmeric, chilies, saffron), active navigation pill glows, primary CTAs, and warm lighting.
2. **Obsidian Slate / Forest Charcoal (`#0B0F11` / `#111618` / `#1B2529`)**:
   - Represents the nocturnal mountain slate rock, reclaimed heritage timber beams, and deep glassmorphic backdrop.
3. **Himalayan Birch Sand / Warm Parchment (`#F5EFE6` / `#E7DEC9`)**:
   - Represents raw limestone pavers, freshly rolled Tingmo bread, natural paper menu textures, high-contrast readable typography, and delicate border lines.

---

## 🏛️ Glassmorphic Navigation

- Custom `backdrop-blur-xl` translucent frosted navbar (`rgba(17, 22, 24, 0.85)`).
- Glowing pill indicators for active page states.
- Responsive mobile drawer with glassmorphism.
- Quick "Reserve Table" CTA and real-time tasting tray item counter.

---

## 📄 5-Page Application Structure

1. **Page 1: Landing Page (Start)**:
   - Ambient Himalayan Courtyard Hero with warm fireside visual, Kathmandu location tag, and dual CTAs.
   - 4 Pillars of the Courtyard: Open-Air Brick Courtyard, Arak Mixology Bar, Pan-Himalayan & Tribal Hearth, and Dedicated Kids Playroom.
   - Chef's Signature Dishesh: Naga Smoked Pork Ribs, Meghalayan Jadoh & Dohkhleh, Bhutanese Ema Datshi with Steamed Tingmo.
   - Arak Mixology Lounge Spotlight (Timur Pepper Bourbon, Titaura Sour, Wild Rhododendron Spritz).
   - Verified Guest Reviews from Google (4.9 rating / 250+ reviews) & TripAdvisor (4.8 rating).
   - Plan Your Visit & Quick Booking Widget.

2. **Page 2: Menu**:
   - Categorized Pan-Himalayan & Tribal Menu:
     - *Northeast Tribal (Nagaland & Meghalaya)*
     - *Pan-Himalayan (Bhutan & Tibet)*
     - *Nepali Courtyard Classics*
     - *Arak Bar & Mixology*
     - *Himalayan Sweets & Teas*
   - Interactive dietary filters (Vegetarian, Non-Vegetarian), search bar, spice meter (peppers), and region tags.
   - **Tasting Tray Simulator**: Add dishes to an interactive dining tray with total price calculation in NPR and one-click "Book Table for This Feast" integration.

3. **Page 3: Photo Gallery**:
   - High-resolution visual gallery categorized into: *Courtyard & Fireside*, *Culinary Art*, *Arak Bar & Cocktails*, *Live Acoustics & Nights*, and *Family & Play Area*.
   - Interactive Lightbox modal for full-screen photo views with descriptions and captions.
   - Instagram community featurette (`@banmanche.nepal`).

4. **Page 4: Experience & Reservations**:
   - Full-featured Table Reservation System:
     - Guest count (1 to 25+), Date, and Time slots.
     - Seating Area selector: *Open Brick Courtyard*, *Heritage Indoor Lounge*, *Arak Bar Terrace*, or *Family Garden Pavilion*.
     - Special dietary requests or celebration notes (auto-syncs with Feast Tray).
     - Live submission to the backend API (`/api/reservations`) with instant confirmation voucher and code (`BM-COURT-XXXX`).
   - Upcoming Courtyard Events calendar (Friday Acoustics, Saturday Vinyl & Cocktails, Sunday Family Brunch).
   - Direct hotline for large groups.

5. **Page 5: About Us (Last Page)**:
   - The Legend of Banmanche: The wild mountain forest spirit and ancient fireside hospitality.
   - A Culinary Bridge across the Himalayas: Uniting Nepal, Tibet, Bhutan, Nagaland, and Meghalaya in Kathmandu.
   - Heritage Architecture & Courtyard Amenities (Outdoor heaters, fire pits, children's playroom, private parking).
   - Location & Directions Guide: Walking route from Keshar Mahal / Thamel / Uttar Dhoka to Kailashchaur Marg.
   - Interactive Google Map coordinates (`27.71858, 85.321298`) and direct links to Google Maps & TripAdvisor.
   - Contact & Private Gatherings Inquiry Form connected to `/api/contact`.

---

## 🛠️ Tech Stack (MERN)

- **MongoDB / Mongoose**: Schema models for `Menu`, `Reservation`, `Review`, `Gallery`, and `Contact`. (Includes automatic in-memory fallback for zero-dependency instant running).
- **Express.js & Node.js**: RESTful API endpoints at `/api/` with CORS and error handling.
- **React 18 & Vite**: Fast component architecture, custom hooks, and state management.
- **Tailwind CSS**: Modern utility styling, custom glassmorphism, responsive grid layouts.
- **Lucide Icons**: Crisp SVG iconography for UI elements.

---

## 🚀 Running the Project

### Option 1: Start Full MERN Production Server
Builds the client and serves both API and frontend on port 5001:
```bash
# In the root folder:
node server/server.js
```
Open [http://localhost:5001](http://localhost:5001) in your browser.

### Option 2: Run Development Mode (Hot Reload)
In two terminal tabs:
```bash
# Terminal 1 - Backend Server
cd server
npm run dev

# Terminal 2 - Frontend Vite Client
cd client
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.
