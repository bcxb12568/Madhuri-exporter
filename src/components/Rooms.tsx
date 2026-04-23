import { motion } from 'motion/react';
import { Maximize2, Shield, Tv, Wind, Coffee, Star } from 'lucide-react';
import { ROOM_TYPES } from '../constants';

import { RoomType } from '../types';

export default function Rooms({ onOpenRoom }: { onOpenRoom: (room: RoomType) => void }) {
  return (
    <section id="rooms" className="py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6 mb-20 text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold mb-4 block">Accommodations</span>
        <h2 className="text-5xl md:text-6xl font-serif text-white">
          Experience <span className="italic text-luxury-gold">Superior</span> Comfort.
        </h2>
        <div className="w-20 h-[1px] bg-luxury-gold mx-auto mt-8 opacity-30" />
      </div>

      <div className="px-6 md:px-0">
        <div className="flex flex-col gap-32 max-w-6xl mx-auto">
          {ROOM_TYPES.map((room, index) => (
            <div 
              key={room.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 md:gap-24`}
            >
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 w-full"
              >
                <div 
                  className="relative aspect-[4/3] rounded-none overflow-hidden shadow-2xl group border border-white/5 p-2 bg-luxury-card cursor-pointer"
                  onClick={() => onOpenRoom(room)}
                >
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-luxury-gold text-luxury-cream px-4 py-2 rounded-none text-[10px] uppercase tracking-widest font-bold shadow-lg">
                      {room.size}
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1"
              >
                <div className="flex items-center gap-2 mb-4 text-luxury-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
                <h3 className="text-4xl md:text-5xl font-serif mb-6 text-white">{room.name}</h3>
                <p className="text-white/60 font-light text-lg mb-10 leading-relaxed max-w-md">
                  {room.description}
                </p>

                <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-12">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center group-hover:bg-luxury-gold group-hover:border-luxury-gold transition-colors">
                      <Wind size={16} className="text-white/40 group-hover:text-luxury-cream transition-colors" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/70">Air Conditioned</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center group-hover:bg-luxury-gold group-hover:border-luxury-gold transition-colors">
                      <Tv size={16} className="text-white/40 group-hover:text-luxury-cream transition-colors" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/70">LED Smart TV</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center group-hover:bg-luxury-gold group-hover:border-luxury-gold transition-colors">
                      <Shield size={16} className="text-white/40 group-hover:text-luxury-cream transition-colors" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/70">Electronic Safe</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center group-hover:bg-luxury-gold group-hover:border-luxury-gold transition-colors">
                      <Coffee size={16} className="text-white/40 group-hover:text-luxury-cream transition-colors" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/70">Tea/Coffee</span>
                  </div>
                </div>

                <button 
                  onClick={() => onOpenRoom(room)}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] py-3 border-b border-luxury-gold/30 hover:border-luxury-gold text-luxury-gold transition-all"
                >
                  View Room Details
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
