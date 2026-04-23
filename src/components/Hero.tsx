import { motion } from 'motion/react';
import { MousePointer2, Calendar, MapPin, Users } from 'lucide-react';

export default function Hero({ onReserve, onExplore }: { onReserve: () => void, onExplore: () => void }) {
  return (
    <section id="hero" className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/hotel_hero_1776927931269.png" 
          alt="Hotel X Luxury Exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 to-[#0a0a0a]/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 rounded-none border border-luxury-gold/30 text-luxury-gold text-[10px] uppercase tracking-[0.3em] font-bold backdrop-blur-sm mb-6">
              Experience the Signature 'Heavenly Bed'
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-white leading-[0.9] mb-8">
              Redefining <br />
              <span className="text-luxury-gold italic">Business</span> Luxury
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/80 font-light max-w-md mb-12 leading-relaxed"
          >
            Premium amenities designed for the discerning professional traveler. Discover Gazipur, Rajshahi, and Narsingdi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-12 mb-16"
          >
            <div className="stat-box">
              <div className="text-3xl font-serif text-luxury-gold tracking-tight">50+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/40">Executive Suites</div>
            </div>
            <div className="stat-box">
              <div className="text-3xl font-serif text-luxury-gold tracking-tight">24/7</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/40">Business Center</div>
            </div>
            <div className="stat-box">
              <div className="text-3xl font-serif text-luxury-gold tracking-tight">Fine</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/40">Dining Concept</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <button 
              onClick={onReserve}
              className="bg-luxury-gold text-luxury-cream px-10 py-5 rounded-none text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-luxury-ink transition-all shadow-xl flex items-center gap-3"
            >
              Reserve A Room <MousePointer2 size={16} />
            </button>
            <button 
              onClick={onExplore}
              className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-none text-sm uppercase tracking-widest font-bold hover:bg-white/10 transition-all cursor-pointer"
            >
              Explore Branches
            </button>
          </motion.div>
        </div>
      </div>

      {/* Featured Property Overlay */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-16 right-16 hidden xl:block w-96 bg-black/40 backdrop-blur-xl p-10 border border-white/10"
      >
        <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-3 font-bold">Featured Property</p>
        <h3 className="font-serif text-3xl text-white mb-6">Gazipur Boutique</h3>
        <p className="text-sm text-white/60 font-light leading-relaxed mb-8">
          Located on the Dhaka–Mymensingh Highway, offering seamless access to industrial hubs with resort-style comfort.
        </p>
        <div className="flex justify-between items-center border-t border-white/10 pt-8">
          <div className="text-2xl text-white font-serif">
            $120<span className="text-xs text-white/40 ml-1 font-sans">/night</span>
          </div>
          <button 
            onClick={onExplore}
            className="text-[10px] uppercase tracking-widest font-bold text-luxury-gold border-b border-luxury-gold/30 pb-1 hover:border-luxury-gold transition-all"
          >
            View Details
          </button>
        </div>
      </motion.div>
    </section>
  );
}
