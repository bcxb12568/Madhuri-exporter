import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ArrowRight, Target, Eye } from 'lucide-react';

const SLIDER_IMAGES = [
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80'
];

const BRANCHES = [
  {
    id: 'gazipur',
    name: 'Hotel X - Gazipur',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80',
    rooms: 'Standard Room | Deluxe Twin Room | Premium Suite Room',
    size: '154 sft | 185 sft | 233 sft',
    description: 'Hotel X, Gazipur is a new Business Boutique Hotel on the Dhaka-Mymensingh Highway in Rajendrapur.'
  },
  {
    id: 'rajshahi',
    name: 'Hotel X - Rajshahi',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80',
    rooms: 'Suite Room | Standard Room | Deluxe Double Room | Deluxe Twin Room',
    size: '300 | 154 | 185 | 233',
    description: 'Hotel X is proud to bring its latest property to the city of Rajshahi.'
  },
  {
    id: 'narsingdi',
    name: 'Hotel X - Narsingdi',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    rooms: 'Standard Room | Deluxe Double Room | Deluxe Twin Room',
    size: '154 sft | 185 sft | 233 sft',
    description: 'Well established in one of the major commercial center\'s of Dhaka division.'
  }
];

export default function About({ onExploreBranch }: { onExploreBranch: () => void }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* Hero Section with Slider */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-luxury-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">Identity</span>
            <h1 className="text-5xl md:text-7xl font-serif uppercase tracking-tighter">
              About Hotel X <span className="text-luxury-gold italic">Hospitality</span>
            </h1>
          </motion.div>

          <div className="relative aspect-[21/9] w-full overflow-hidden border border-white/10 p-2 bg-luxury-card mb-24">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={SLIDER_IMAGES[currentImage]}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.5 }}
                className="w-full h-full object-cover grayscale-[20%]"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Slider Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
              {SLIDER_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    currentImage === i ? 'w-8 bg-luxury-gold' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* About Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-luxury-gold" />
                <h2 className="text-2xl uppercase tracking-widest font-serif text-luxury-gold">About Us</h2>
              </div>
              <div className="space-y-6 text-white/60 font-light leading-relaxed">
                <p>
                  Hotel X is the true combination of ultimate luxury, gracious hospitality. Our hotels are the ideal choice for professional gatherings and yet at the same time, it is the right choice for visitors who are searching for a combination of charm, peace and quality experience.
                </p>
                <p>
                  Established on December 31, 2017. Hotel X started its 1st hotel at the industrial hub Rajendrapur, near Dhaka. Since then we have added two more quality hotels to our brand, second being at another industrial hub Narsingdi well known for its Wholesale Fabric & Textile market, third at another major urban, commercial and educational center of Bangladesh Rajshahi.
                </p>
                <p>
                  Our each room has been carefully designed to make you experience luxury and comfort together in the safe heaven of HOTEL X, with all modern facilities to cater to the basic & luxurious requirements of a guest, as its own character.
                </p>
              </div>
            </div>
            
            <div className="space-y-16">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <Target className="text-luxury-gold" size={24} />
                  <h2 className="text-xl uppercase tracking-widest font-serif text-white">Our Mission</h2>
                </div>
                <ul className="space-y-4 text-white/50 font-light">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                    <span>Provide smart & quality living space to every traveler</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                    <span>Excellence in service and hospitality</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                    <span>Constant innovation in guest experience</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                    <span>Safety and secure environment for all guests</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-8">
                  <Eye className="text-luxury-gold" size={24} />
                  <h2 className="text-xl uppercase tracking-widest font-serif text-white">Our Vision</h2>
                </div>
                <p className="text-white/50 font-light italic leading-relaxed">
                  "To redefine the ways of hospitality and bring forward a new dimension in the ways quality assured services, aiming to be the leading boutique hotel chain in Bangladesh."
                </p>
              </div>
            </div>
          </div>

          {/* Explore Hotel Branches */}
          <div className="text-center mb-24">
            <h2 className="text-5xl font-serif uppercase tracking-tight mb-4">Explore Our <span className="text-luxury-gold">Hotel Branches</span></h2>
            <div className="w-24 h-[1px] bg-luxury-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {BRANCHES.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group p-4 border border-white/5 bg-luxury-card hover:border-luxury-gold/30 transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden mb-8">
                  <img 
                    src={branch.image} 
                    alt={branch.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-luxury-gold transition-colors italic">{branch.name}</h3>
                <div className="space-y-2 mb-8">
                  <p className="text-[10px] text-luxury-gold uppercase tracking-widest font-bold">Accommodations</p>
                  <p className="text-xs text-white/40 line-clamp-2">{branch.rooms}</p>
                </div>
                <button 
                  onClick={onExploreBranch}
                  className="w-full py-4 border border-white/10 text-[10px] uppercase tracking-widest hover:bg-luxury-gold hover:text-black transition-all font-bold"
                >
                  View Branch Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
