import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Clock, Star, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';

const IMAGES = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80'
];

export default function RestaurantPanorama() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#0A0A0A] text-white">
      {/* Hero / Header Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={IMAGES[currentIndex]}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 2 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-luxury-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">Gastronomy & Elegance</span>
            <h1 className="text-6xl md:text-8xl font-serif uppercase tracking-tighter mb-4 text-white">
              Restaurant <span className="text-luxury-gold italic">Panorama</span>
            </h1>
            <div className="flex justify-center items-center gap-4">
              <div className="w-12 h-[1px] bg-luxury-gold/50" />
              <Utensils size={16} className="text-luxury-gold" />
              <div className="w-12 h-[1px] bg-luxury-gold/50" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Slider */}
          <div className="lg:col-span-8">
            <div className="relative aspect-video group overflow-hidden border border-white/10 p-2 bg-luxury-card">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={IMAGES[currentIndex]}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Navigation Indicators */}
              <div className="absolute bottom-10 left-10 flex gap-2">
                {IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1 transition-all duration-500 ${currentIndex === idx ? 'w-10 bg-luxury-gold' : 'w-4 bg-white/20'}`}
                  />
                ))}
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length)}
                  className="w-10 h-10 bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-black transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % IMAGES.length)}
                  className="w-10 h-10 bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-black transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* About Info */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="bg-luxury-card border border-white/5 p-10 relative">
               <div className="absolute top-0 right-0 w-24 h-24 bg-luxury-gold/5 blur-3xl rounded-full" />
               <h2 className="text-3xl font-serif text-white mb-8 border-l-2 border-luxury-gold pl-6 uppercase tracking-tight">
                 About <br /> <span className="text-luxury-gold">Restaurant Panorama</span>
               </h2>
               
               <p className="text-white/60 font-light leading-relaxed mb-8 text-sm italic">
                 "Food preparing is not a formality, but a chance for our chefs to express their creativity. It is also a chance for our guests to enjoy and be inspired."
               </p>
               
               <p className="text-white/50 font-light text-sm leading-relaxed mb-10">
                 'Restaurant Panorama', overlooking the 'National Forrest' is open till late hours. Multi-cuisine restaurant offering wide variety of Continental, Asian, Local cuisine. Whether you are going to have a business lunch, romantic candlelight dinner, this four star Restaurant will always meet your needs.
               </p>

               <div className="space-y-4 pt-8 border-t border-white/10">
                 <div className="flex items-center gap-3 text-white/40">
                   <Clock size={14} className="text-luxury-gold" />
                   <span className="text-[10px] uppercase tracking-widest font-bold">Open Daily: 07:00 AM - 11:00 PM</span>
                 </div>
                 <div className="flex items-center gap-3 text-white/40">
                   <MapPin size={14} className="text-luxury-gold" />
                   <span className="text-[10px] uppercase tracking-widest font-bold">Main Lobby, Hotel X Gazipur</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 text-luxury-gold mb-10">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <h3 className="text-4xl font-serif text-white mb-12">The Culinary Art of Perfection</h3>
          <p className="text-white/40 font-light leading-relaxed text-lg mb-16 px-10">
            The menu is constantly changing by our chefs which include a variety of seasonal offerings. Our super Breakfast Buffet is served each morning with a delicious selection of breakfast items ideal to start the day. Don't miss the taste various drinks, freshly squeeze juices, organic tea, aromatic cocktails, premium coffees, delicious local dishes and desserts.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Exotic Mocktails', img: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80' },
              { label: 'Authentic Asian', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80' },
              { label: 'Classic Continental', img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80' },
              { label: 'Local Delicacies', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80' }
            ].map((item) => (
              <div key={item.label} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden border border-white/5 mb-4 p-1 bg-luxury-card">
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <h4 className="text-[10px] uppercase tracking-widest text-white/50 font-bold group-hover:text-luxury-gold">{item.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
