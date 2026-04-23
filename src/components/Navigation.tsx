import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Hotel } from 'lucide-react';

interface NavigationProps {
  onReserve?: () => void;
  onPageChange: (page: 'home' | 'locations' | 'rooms' | 'facilities' | 'about' | 'offers' | 'dining' | 'properties') => void;
  activePage: string;
}

export default function Navigation({ onReserve, onPageChange, activePage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Properties', id: 'properties' },
    { name: 'Locations', id: 'locations' },
    { name: 'Rooms', id: 'rooms' },
    { name: 'Facilities', id: 'facilities' },
    { name: 'Restaurant', id: 'dining' },
    { name: 'About', id: 'about' },
    { name: 'Offers', id: 'offers' },
  ] as const;

  return (
    <nav 
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || activePage !== 'home' ? 'bg-black/90 backdrop-blur-md py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="w-full px-4 md:px-6 flex items-center justify-between">
        <button 
          onClick={() => onPageChange('home')}
          className="flex items-center gap-3 group text-left cursor-pointer outline-none relative z-10"
        >
          <div className="w-10 h-10 border border-luxury-gold/30 flex items-center justify-center rounded-full transition-colors group-hover:border-luxury-gold">
            <Hotel className="w-5 h-5 text-luxury-gold" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold tracking-tight leading-none uppercase text-white">Hotel <span className="text-luxury-gold">X</span></span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/50">Hospitality</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => onPageChange(link.id)}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all transition-colors cursor-pointer outline-none ${
                activePage === link.id ? 'text-luxury-gold border-b border-luxury-gold pb-1' : 'text-white/60 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={onReserve}
            className="bg-luxury-gold text-luxury-cream px-8 py-3 rounded-none text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-luxury-ink transition-all shadow-lg ml-4"
          >
            Reserve A Room
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A] border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-10 flex flex-col gap-8">
              {navLinks.map((link) => (
                <button 
                  key={link.id} 
                  className={`text-2xl font-serif text-left outline-none ${
                    activePage === link.id ? 'text-luxury-gold italic' : 'text-white'
                  }`}
                  onClick={() => { onPageChange(link.id); setIsOpen(false); }}
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => { onReserve?.(); setIsOpen(false); }}
                className="w-full bg-luxury-gold text-luxury-cream py-5 rounded-none font-bold uppercase tracking-widest text-sm shadow-xl"
              >
                Reserve A Room
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
