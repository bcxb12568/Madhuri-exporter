import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowUpRight, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import { LOCATIONS } from '../constants';

export default function Locations({ onExplore }: { onExplore: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API delay for demo
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="locations" className="py-32 bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold mb-4 block">Destinations</span>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight text-white">
              Strategic Locations for <br /> Business & <span className="text-luxury-gold italic">Leisure</span>.
            </h2>
          </div>
          <p className="text-white/40 font-light max-w-sm mb-2">
            Located in the most vibrant commercial and industrial hubs of Bangladesh, each Hotel X property offers a unique experience tailored to its location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {LOCATIONS.map((location, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={location.id}
              className="group cursor-pointer bg-luxury-card border border-white/5 p-4 rounded-none"
              onClick={onExplore}
            >
              <div className="relative aspect-[4/5] rounded-none overflow-hidden mb-8 shadow-2xl">
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <button className="bg-luxury-gold text-luxury-cream px-6 py-3 rounded-none text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 w-full justify-center">
                    Explore Details <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>

              <div className="px-4 pb-4">
                <div className="flex items-center gap-2 text-luxury-gold mb-2">
                  <div className="w-2 h-2 rounded-full bg-luxury-gold" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{location.name} Branch</span>
                </div>
                <h3 className="text-3xl font-serif mb-4 text-white group-hover:text-luxury-gold transition-colors">
                  Hotel X <span className="italic">{location.name}</span>
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integrated Contact Section */}
        <div className="pt-32 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info & Map */}
            <div>
              <div className="bg-luxury-card border border-white/5 p-10 mb-10">
                <h3 className="text-2xl font-serif text-white mb-10 uppercase tracking-widest border-b border-luxury-gold/20 pb-4 inline-block">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-luxury-gold/10 flex items-center justify-center shrink-0 border border-luxury-gold/20">
                      <MapPin className="text-luxury-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-bold mb-2">Corporate Office</h4>
                      <p className="text-white/60 font-light leading-relaxed text-sm">
                        XIC Point, Kha-213/2, Kha-213/3 and Kha 213/5,<br />
                        Bir Uttam Rafiqul Islam Sarani, Middle Badda,<br />
                        Dhaka-1212, Bangladesh.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-luxury-gold/10 flex items-center justify-center shrink-0 border border-luxury-gold/20">
                      <Phone className="text-luxury-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-bold mb-2">Reservation Line</h4>
                      <p className="text-white/80 font-bold text-lg">+8802 9840 726</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-luxury-gold/10 flex items-center justify-center shrink-0 border border-luxury-gold/20">
                      <Mail className="text-luxury-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-bold mb-2">Email Correspondence</h4>
                      <p className="text-white/80 font-medium tracking-wide">info@hotelxhospitality.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-10 border-t border-white/5">
                  <h4 className="text-[10px] uppercase tracking-[3px] text-white/30 font-bold mb-8">Follow Our Journey</h4>
                  <div className="flex gap-4">
                    {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                      <a key={idx} href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/50 hover:text-luxury-gold hover:border-luxury-gold transition-all duration-500">
                        <Icon size={18} strokeWidth={1.5} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video w-full border border-white/5 relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80" 
                  className="w-full h-full object-cover opacity-30 grayscale group-hover:scale-105 transition-transform duration-1000" 
                  alt="Map" 
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center flex-col p-8 text-center">
                  <div className="w-16 h-16 border border-luxury-gold rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <MapPin className="text-luxury-gold" size={24} />
                  </div>
                  <h5 className="text-white font-serif text-xl mb-2">Our Urban Center</h5>
                  <p className="text-white/40 text-xs uppercase tracking-widest">Dhaka-Mymensingh Highway, Gazipur</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/[0.02] border border-white/5 p-12 lg:p-16">
              <h3 className="text-4xl font-serif text-white mb-10 tracking-tight">Direct <span className="text-luxury-gold italic">Inquiry</span></h3>
              
              {!submitted ? (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                      <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-3 font-bold group-focus-within:text-luxury-gold transition-colors">First Name</label>
                      <input name="firstName" type="text" required className="w-full bg-[#0F0F0F] border-b border-white/10 px-0 py-3 text-white text-sm outline-none focus:border-luxury-gold transition-colors" placeholder="e.g. John" />
                    </div>
                    <div className="group">
                      <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-3 font-bold group-focus-within:text-luxury-gold transition-colors">Last Name</label>
                      <input name="lastName" type="text" required className="w-full bg-[#0F0F0F] border-b border-white/10 px-0 py-3 text-white text-sm outline-none focus:border-luxury-gold transition-colors" placeholder="e.g. Doe" />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-3 font-bold group-focus-within:text-luxury-gold transition-colors">Electronic Mail</label>
                    <input name="email" type="email" required className="w-full bg-[#0F0F0F] border-b border-white/10 px-0 py-3 text-white text-sm outline-none focus:border-luxury-gold transition-colors" placeholder="john@example.com" />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-3 font-bold group-focus-within:text-luxury-gold transition-colors">Subject</label>
                    <input name="subject" type="text" required className="w-full bg-[#0F0F0F] border-b border-white/10 px-0 py-3 text-white text-sm outline-none focus:border-luxury-gold transition-colors" placeholder="Topic of inquiry" />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-3 font-bold group-focus-within:text-luxury-gold transition-colors">Your Message</label>
                    <textarea name="message" rows={4} required className="w-full bg-[#0F0F0F] border-b border-white/10 px-0 py-3 text-white text-sm outline-none focus:border-luxury-gold transition-colors resize-none" placeholder="How can we assist you today?"></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-luxury-gold text-luxury-cream py-6 font-bold uppercase tracking-widest text-sm shadow-2xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {loading ? 'Transmitting...' : 'Transmit Inquiry'} <Send size={18} />
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 bg-luxury-gold/20 rounded-full flex items-center justify-center mb-8 border border-luxury-gold/50">
                    <CheckCircle2 className="text-luxury-gold" size={40} />
                  </div>
                  <h4 className="text-3xl font-serif text-white mb-6 uppercase tracking-tight">Thank You</h4>
                  <p className="text-white/60 font-light leading-relaxed max-w-sm mb-10">
                    Your verification is complete. We have received your inquiry and will review it to get back to you or call you shortly. Thank you.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold border-b border-luxury-gold/30 pb-1 hover:border-luxury-gold transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
