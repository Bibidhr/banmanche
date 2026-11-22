import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DishModal from './components/DishModal';
import LightboxModal from './components/LightboxModal';
import Toast from './components/Toast';

import LandingPage from './pages/LandingPage';
import MenuPage from './pages/MenuPage';
import GalleryPage from './pages/GalleryPage';
import ReservationsPage from './pages/ReservationsPage';
import AboutPage from './pages/AboutPage';

import { 
  initialMenuData, 
  initialReviewsData, 
  initialGalleryData 
} from './data/mockData';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [menuItems, setMenuItems] = useState(initialMenuData);
  const [reviews, setReviews] = useState(initialReviewsData);
  const [galleryItems, setGalleryItems] = useState(initialGalleryData);
  
  const [tray, setTray] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);
  const [lightboxItem, setLightboxItem] = useState(null);
  const [toast, setToast] = useState(null);

  // Sync with Express backend API
  useEffect(() => {
    fetch('/api/menu')
      .then(res => res.json())
      .then(json => {
        if (json.success && json.data) setMenuItems(json.data);
      })
      .catch(() => {});

    fetch('/api/reviews')
      .then(res => res.json())
      .then(json => {
        if (json.success && json.data) setReviews(json.data);
      })
      .catch(() => {});

    fetch('/api/gallery')
      .then(res => res.json())
      .then(json => {
        if (json.success && json.data) setGalleryItems(json.data);
      })
      .catch(() => {});
  }, []);

  const showToast = (title, message, type = 'success') => {
    setToast({ title, message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleAddToTray = (dish) => {
    if (tray.some(item => item.id === dish.id)) {
      setTray(tray.filter(item => item.id !== dish.id));
      showToast('Removed from Feast Tray', `${dish.name} removed.`, 'info');
    } else {
      setTray([...tray, dish]);
      showToast('Added to Feast Tray', `${dish.name} added. Check your tray or reserve a table!`, 'success');
    }
  };

  const handleRemoveFromTray = (id) => {
    setTray(tray.filter(item => item.id !== id));
  };

  const handleClearTray = () => {
    setTray([]);
  };

  return (
    <div className="min-h-screen bg-white text-obsidian-950 flex flex-col justify-between selection:bg-ochre-500 selection:text-white relative overflow-x-hidden">
      
      {/* Main Website */}
      <div className="min-h-screen flex flex-col justify-between relative z-10">
        {/* Glassmorphic Navbar with banmanche.jpeg Logo */}
        <Navbar 
          activePage={activePage} 
          setActivePage={setActivePage} 
          trayCount={tray.length} 
        />

        {/* Main Pages Content */}
        <main className="flex-grow relative z-10">
          {activePage === 'home' && (
            <LandingPage
              setActivePage={setActivePage}
              onOpenDish={(dish) => setSelectedDish(dish)}
              onAddToTray={handleAddToTray}
              menuItems={menuItems}
              reviews={reviews}
            />
          )}

          {activePage === 'menu' && (
            <MenuPage
              menuItems={menuItems}
              onOpenDish={(dish) => setSelectedDish(dish)}
              tray={tray}
              onAddToTray={handleAddToTray}
              onRemoveFromTray={handleRemoveFromTray}
              setActivePage={setActivePage}
            />
          )}

          {activePage === 'gallery' && (
            <GalleryPage
              galleryItems={galleryItems}
              onOpenLightbox={(item) => setLightboxItem(item)}
            />
          )}

          {activePage === 'reservations' && (
            <ReservationsPage
              tray={tray}
              onClearTray={handleClearTray}
            />
          )}

          {activePage === 'about' && (
            <AboutPage />
          )}
        </main>

        {/* Footer */}
        <Footer setActivePage={setActivePage} />
      </div>

      {/* Modals & Notifications */}
      <DishModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToTray={handleAddToTray}
        isInTray={selectedDish ? tray.some(t => t.id === selectedDish.id) : false}
      />

      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />

      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />

    </div>
  );
}
