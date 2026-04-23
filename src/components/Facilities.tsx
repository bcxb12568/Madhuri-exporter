import { motion } from 'motion/react';
import { Utensils, Dumbbell, Users as UsersIcon, CheckCircle2 } from 'lucide-react';
import { FACILITIES } from '../constants';

const ICON_MAP: Record<string, any> = {
  Utensils,
  Dumbbell,
  Users: UsersIcon,
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="aspect-square rounded-none overflow-hidden mt-12 shadow-2xl border border-white/5 p-2 bg-luxury-card"
              >
                <img src={FACILITIES[0].image} alt={FACILITIES[0].name} className="w-full h-full object-cover opacity-80" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-[3/4] rounded-none overflow-hidden shadow-2xl border border-white/5 p-2 bg-luxury-card"
              >
                <img src={FACILITIES[1].image} alt={FACILITIES[1].name} className="w-full h-full object-cover opacity-80" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="col-span-2 aspect-[16/9] rounded-none overflow-hidden -mt-12 shadow-2xl border border-white/5 p-2 bg-luxury-card"
              >
                <img src={FACILITIES[2].image} alt={FACILITIES[2].name} className="w-full h-full object-cover opacity-80" />
              </motion.div>
            </div>
            {/* Abstract decoration */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-luxury-gold/5 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl -z-0" />
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold mb-6 block">Beyond Stay</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-10 leading-tight text-white">
              Premium <span className="text-luxury-gold italic">Facilities</span> for Seamless Life.
            </h2>
            
            <div className="space-y-12">
              {FACILITIES.map((facility) => {
                const Icon = ICON_MAP[facility.icon] || CheckCircle2;
                return (
                  <motion.div 
                    key={facility.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-8 group"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-none bg-luxury-card border border-white/10 flex items-center justify-center group-hover:bg-luxury-gold transition-colors duration-500">
                      <Icon size={30} className="text-luxury-gold group-hover:text-luxury-cream transition-colors duration-500" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-serif mb-3 text-white">{facility.name}</h4>
                      <p className="text-white/50 font-light leading-relaxed max-w-sm">
                        {facility.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-16 bg-luxury-card p-10 rounded-none text-white relative overflow-hidden group border border-white/5">
              <div className="relative z-10">
                <h5 className="text-xl font-serif mb-4 flex items-center gap-3 text-luxury-gold">
                  <CheckCircle2 size={18} /> Included Amenities
                </h5>
                <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-[11px] uppercase tracking-widest font-medium text-white/40">
                  <span className="flex items-center gap-2">Free High-speed WiFi</span>
                  <span className="flex items-center gap-2">Complimentary Breakfast</span>
                  <span className="flex items-center gap-2">Welcome Drink</span>
                  <span className="flex items-center gap-2">Free Gym Access</span>
                  <span className="flex items-center gap-2">Tea/Coffee Setup</span>
                  <span className="flex items-center gap-2">Housekeeping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
