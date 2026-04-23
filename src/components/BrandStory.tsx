import { motion } from 'motion/react';

export default function BrandStory() {
  return (
    <section id="about" className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold mb-6 block">Our Vision</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-12 leading-[1.2] text-white">
              We define hospitality by the <span className="text-luxury-gold italic">consistent quality</span> of service and the premium experience delivered to every guest.
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="stat-box text-left"
            >
              <span className="text-4xl font-serif text-luxury-gold mb-2 block tracking-tight">Dec 2017</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">Established Early On</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="stat-box text-left"
            >
              <span className="text-4xl font-serif text-luxury-gold mb-2 block tracking-tight">3 Key Hubs</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">Industrial Locations</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="stat-box text-left"
            >
              <span className="text-4xl font-serif text-luxury-gold mb-2 block tracking-tight">Boutique</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">Focused Hospitality</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
