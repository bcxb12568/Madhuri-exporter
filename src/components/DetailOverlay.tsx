import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Utensils, Dumbbell, MapPin, CheckCircle2, Send, Phone, Mail, Globe, Facebook, Instagram, Twitter, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { RoomType, LocationInfo, Facility } from '../types';
import { ROOM_TYPES, LOCATIONS, FACILITIES } from '../constants';

interface DetailOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'reservation' | 'branch' | 'room' | 'offers' | null;
  data?: any;
}

export default function DetailOverlay({ isOpen, onClose, type, data }: DetailOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[100] bg-[#0A0A0A] overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 z-[110] bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5 py-4 px-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-luxury-gold font-serif text-xl font-bold uppercase">Hotel X</span>
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Details View</span>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-cream transition-all"
            >
              <X size={20} />
            </button>
          </div>

          <div className="container mx-auto px-6 py-20 pb-32">
            {type === 'reservation' && <ReservationContent />}
            {type === 'branch' && <BranchContent />}
            {type === 'offers' && <OffersContent />}
            {type === 'room' && <RoomDetailContent room={data as RoomType} />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ReservationContent() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 uppercase tracking-tighter">
            WELCOME TO <span className="text-luxury-gold">Hotel X</span> Hospitality
          </h2>
          <div className="flex justify-center mb-10">
            <div className="w-24 h-[1px] bg-luxury-gold/50" />
            <div className="w-4 h-4 border border-luxury-gold rotate-45 -mt-[7px] mx-4" />
            <div className="w-24 h-[1px] bg-luxury-gold/50" />
          </div>
          <p className="max-w-3xl mx-auto text-white/70 text-lg md:text-xl font-light leading-relaxed italic">
            "Hotel X is the true combination of ultimate luxury, gracious hospitality. Our hotels are the ideal choice for professional gatherings and yet at the same time, it is the right choice for visitors who are searching for a combination of charm, peace and quality experience. Your safety is our top priority and hence we at Hotel X adhere to all the norms, rules & regulations without any compromise."
          </p>
        </motion.div>
      </div>

      {/* Branches Section */}
      <div className="mb-32">
        <div className="max-w-xl mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 tracking-tight uppercase">Hotel <span className="text-luxury-gold italic">X</span> Branches</h2>
          <p className="text-white/50 font-light leading-relaxed">
            Hotel X is the true combination of ultimate luxury, gracious hospitality. Our hotels are the ideal choice for professional gatherings and yet at the same time, it is the right choice for visitors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Gazipur', image: '/src/assets/images/hotel_hero_1776927931269.png' },
            { name: 'Rajshahi', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80' },
            { name: 'Narsingdi', image: 'https://images.unsplash.com/photo-1582719478237-affe303e1ba7?auto=format&fit=crop&q=80' }
          ].map((branch) => (
            <div key={branch.name} className="group relative">
              <div className="aspect-[4/5] overflow-hidden border border-white/5 bg-luxury-card p-1">
                <img src={branch.image} alt={branch.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="bg-[#AEE2FF]/90 backdrop-blur-sm text-[#2D3142] px-6 py-2 text-xs font-bold whitespace-nowrap shadow-xl">
                  Hotel X - {branch.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facilities Section */}
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">Hotel X <span className="text-luxury-gold italic">Facilities</span></h2>
        <div className="flex justify-center mb-10">
          <div className="w-24 h-[2px] bg-luxury-gold opacity-30" />
        </div>
        <p className="max-w-4xl mx-auto text-white/40 font-light leading-relaxed mb-20 text-lg">
          Established on December 31, 2017. Hotel X started its journey at the industrial hub of Rajendrapur, Gazipur near Dhaka. Since then, we have added two more hotels to our brand, second being at another industrial hub of Narsingdi which is well known for its Wholesale Fabric & Textile market and third at another major urban, commercial and educational center of Bangladesh, Rajshahi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
          {/* Facility 1: Fine Dining */}
          <div className="group">
            <div className="aspect-video overflow-hidden border border-white/5 mb-8">
              <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" alt="Dining" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-3xl font-serif text-white mb-4">Fine Dining</h3>
            <p className="text-white/50 font-light text-sm leading-relaxed mb-8">
              Our hotels offer full service restaurants with finest menu, service and atmosphere. The menu includes extremely classy with high quality ingredients and prepared by a well-known and talented chef.
            </p>
            <ReviewSection label="Dining Experience" />
          </div>

          {/* Facility 2: Gym */}
          <div className="group">
            <div className="aspect-video overflow-hidden border border-white/5 mb-8">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" alt="Gym" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-3xl font-serif text-white mb-4">Gym</h3>
            <p className="text-white/50 font-light text-sm leading-relaxed mb-8">
              All our hotels are equipped with top-of-the line equipment. We make sure that we have all that's necessary for a fantastic workout no matter what your style may be.
            </p>
            <ReviewSection label="Fitness Center" />
          </div>

          {/* Facility 3: Banquet Hall */}
          <div className="group">
            <div className="aspect-video overflow-hidden border border-white/5 mb-8">
              <img src="/src/assets/images/hotel_banquet_1776927972688.png" alt="Banquet" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-3xl font-serif text-white mb-4">Banquet Hall</h3>
            <p className="text-white/50 font-light text-sm leading-relaxed mb-8">
              Sophisticated convention hall and conference centers are available in all our hotels with five-star facilities, where your dream for a grand celebration comes into reality. Whether it's social or corporate gathering.
            </p>
            <ReviewSection label="Events" />
          </div>

          {/* Facility 4: Heavenly Bed */}
          <div className="group">
            <div className="aspect-video overflow-hidden border border-white/5 mb-8">
              <img src="/src/assets/images/hotel_room_deluxe_1776927953059.png" alt="Heavenly Bed" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-3xl font-serif text-white mb-4">Heavenly Bed</h3>
            <p className="text-white/50 font-light text-sm leading-relaxed mb-8">
              All the hotel rooms are equipped with heavenly beds which will ease all our hotel guests into deep, restful sleep. Experience the ultimate comfort and luxury during your stay.
            </p>
            <ReviewSection label="Room Comfort" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BranchContent() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl md:text-7xl font-serif text-white mb-16 text-center">Explore Our <span className="text-luxury-gold italic">Branches</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {LOCATIONS.map((loc) => (
          <div key={loc.id} className="bg-luxury-card border border-white/5 p-8 group">
            <div className="aspect-[4/5] overflow-hidden mb-8 border border-white/10">
              <img src={loc.image} alt={loc.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="flex items-center gap-2 text-luxury-gold mb-4">
              <MapPin size={14} />
              <span className="text-[10px] uppercase tracking-widest font-bold">{loc.name} Branch</span>
            </div>
            <h3 className="text-3xl font-serif text-white mb-6">{loc.name}</h3>
            <p className="text-white/50 font-light text-sm leading-relaxed mb-8">{loc.description}</p>
            
            <div className="space-y-4 mb-8">
              <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Key Attractions</h4>
              <ul className="grid grid-cols-1 gap-2">
                {loc.attractions.map(attr => (
                  <li key={attr} className="text-xs text-luxury-gold flex items-center gap-2">
                    <CheckCircle2 size={12} /> {attr}
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full bg-luxury-gold text-luxury-cream py-4 font-bold uppercase tracking-widest text-[10px]">
              Branch Virtual Tour
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RoomDetailContent({ room }: { room: RoomType }) {
  if (!room) return <div>No Room Data</div>;
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
        <div>
          <div className="aspect-[4/3] border-2 border-luxury-gold/20 p-2 overflow-hidden mb-12">
            <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center gap-4 mb-12">
            <div className="stat-box">
              <div className="text-2xl text-luxury-gold font-serif">{room.size}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Total Area</div>
            </div>
            <div className="stat-box">
              <div className="text-2xl text-luxury-gold font-serif">4.9/5</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Guest Rating</div>
            </div>
          </div>
        </div>

        <div>
          <span className="text-luxury-gold text-[10px] uppercase font-bold tracking-widest block mb-4">Room Category</span>
          <h2 className="text-5xl font-serif text-white mb-8">{room.name}</h2>
          <p className="text-white/60 font-light leading-relaxed text-lg mb-12">{room.description}</p>
          
          <div className="mb-12">
            <h4 className="text-[11px] uppercase tracking-widest text-white/30 font-bold mb-8">Premium Amenities</h4>
            <div className="grid grid-cols-2 gap-y-6">
              {room.features.map(feat => (
                <div key={feat} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 size={16} className="text-luxury-gold" />
                  <span className="text-xs uppercase tracking-wider font-medium">{feat}</span>
                </div>
              ))}
              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle2 size={16} className="text-luxury-gold" />
                <span className="text-xs uppercase tracking-wider font-medium">Free High Speed WiFi</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle2 size={16} className="text-luxury-gold" />
                <span className="text-xs uppercase tracking-wider font-medium">Welcome Drink</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-luxury-gold text-luxury-cream py-6 font-bold uppercase tracking-widest text-sm shadow-2xl hover:bg-white hover:text-black transition-all">
            Confirm Booking for {room.name}
          </button>
        </div>
      </div>

      {/* Guest Reviews Section */}
      <div className="mb-32 pt-20 border-t border-white/5">
        <h3 className="text-4xl font-serif text-white mb-16">Guest Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ReviewCard name="Rafiq Ahmed" rate={5} comment="The Heavenly Bed really lived up to its name. Strategic location and excellent room service." />
          <ReviewCard name="Sophia Ali" rate={4} comment="Perfect for my business trip. Quiet, clean, and very professional staff." />
        </div>
      </div>

      {/* Universal Brand Sections (Requested from Screenshot) */}
      <div className="pt-32 border-t border-white/5">
        {/* Branches */}
        <div className="mb-32">
          <div className="max-w-xl mb-16">
            <h2 className="text-4xl font-serif text-white mb-8 tracking-tight uppercase">Hotel <span className="text-luxury-gold italic">X</span> Branches</h2>
            <p className="text-white/50 font-light leading-relaxed">
              Hotel X is the true combination of ultimate luxury, gracious hospitality. Our hotels are the ideal choice for professional gatherings and yet at the same time, it is the right choice for visitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Gazipur', image: '/src/assets/images/hotel_hero_1776927931269.png' },
              { name: 'Rajshahi', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80' },
              { name: 'Narsingdi', image: 'https://images.unsplash.com/photo-1582719478237-affe303e1ba7?auto=format&fit=crop&q=80' }
            ].map((branch) => (
              <div key={branch.name} className="group relative">
                <div className="aspect-[4/5] overflow-hidden border border-white/5 bg-luxury-card p-1">
                  <img src={branch.image} alt={branch.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <div className="bg-[#AEE2FF]/90 backdrop-blur-sm text-[#2D3142] px-6 py-2 text-xs font-bold whitespace-nowrap shadow-xl">
                    Hotel X - {branch.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-serif text-white mb-6">Hotel X <span className="text-luxury-gold italic">Facilities</span></h2>
          <div className="flex justify-center mb-10">
            <div className="w-24 h-[2px] bg-luxury-gold opacity-30" />
          </div>
          <p className="max-w-4xl mx-auto text-white/40 font-light leading-relaxed mb-20 text-lg">
            Established on December 31, 2017. Hotel X started its journey at the industrial hub of Rajendrapur, Gazipur near Dhaka.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { title: 'Fine Dining', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80', desc: 'Full service restaurants with finest menu and atmosphere.' },
              { title: 'Gym', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80', desc: 'Equipped with top-of-the line modern fitness equipment.' },
              { title: 'Banquet Hall', img: '/src/assets/images/hotel_banquet_1776927972688.png', desc: 'Sophisticated convention centers for your grand celebrations.' },
              { title: 'Heavenly Bed', img: '/src/assets/images/hotel_room_deluxe_1776927953059.png', desc: 'Experience deep, restful sleep in our signature rooms.' }
            ].map((fac) => (
              <div key={fac.title} className="group">
                <div className="aspect-[4/5] overflow-hidden border border-white/5 mb-6">
                  <img src={fac.img} alt={fac.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{fac.title}</h3>
                <p className="text-white/40 text-[10px] leading-relaxed uppercase tracking-widest">{fac.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function OffersContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const offers = [
    {
      id: 1,
      image: '/src/assets/images/hotel_offer_valentine_food_1776928920150.png',
      title: "Valentine's Package",
      desc: "Buffet lunch, dinner, breakfast. Special romantic setting for couples.",
      discount: "18% OFF",
      code: "CD212564"
    },
    {
      id: 2,
      image: '/src/assets/images/hotel_offer_valentine_bed_1776928945620.png',
      title: "Valentine's Day Hotel Offer 2021",
      desc: "Romantic dinner for 2 in our fine dining restaurants. Serious 'we time'.",
      price: "tk 2500",
      oldPrice: "tk 3200",
      code: "VD231564"
    },
    {
      id: 3,
      image: '/src/assets/images/hotel_offer_valentine_room_1776929112288.png',
      title: "Valentine Offer",
      desc: "Per night rent premier room. Valid for 13th Feb - 14th Feb.",
      discount: "15% OFF",
      code: "CF212580"
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % offers.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-6xl md:text-8xl font-serif text-white mb-6 uppercase tracking-tighter">
          CURRENT <span className="text-luxury-gold italic">OFFERS</span>
        </h2>
        <div className="flex justify-center mb-10">
          <div className="w-24 h-[1px] bg-luxury-gold/50" />
          <div className="w-4 h-4 border border-luxury-gold rotate-45 -mt-[7px] mx-4" />
          <div className="w-24 h-[1px] bg-luxury-gold/50" />
        </div>
      </div>

      <div className="relative group">
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-luxury-card border border-white/5 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
                <img 
                  src={offers[currentIndex].image} 
                  alt={offers[currentIndex].title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:hidden" />
              </div>
              
              <div className="w-full md:w-1/2 h-1/2 md:h-full bg-luxury-card p-8 md:p-16 flex flex-col justify-center relative">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 blur-3xl rounded-full -mr-16 -mt-16" />
                
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-luxury-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
                >
                  Limited Time Promotion
                </motion.span>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight"
                >
                  {offers[currentIndex].title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-white/50 font-light leading-relaxed mb-10 text-sm md:text-base max-w-md"
                >
                  {offers[currentIndex].desc}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap items-center gap-8"
                >
                  {offers[currentIndex].discount && (
                    <div className="text-5xl md:text-6xl font-serif text-luxury-gold tracking-tighter">
                      {offers[currentIndex].discount}
                    </div>
                  )}
                  {offers[currentIndex].price && (
                    <div className="flex flex-col">
                      <span className="text-white/30 text-xs line-through uppercase tracking-widest">{offers[currentIndex].oldPrice}</span>
                      <span className="text-4xl md:text-5xl font-serif text-luxury-gold tracking-tighter">{offers[currentIndex].price}</span>
                    </div>
                  )}
                  
                  <div className="bg-white/5 border border-white/10 px-6 py-3">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-1">Coupon Code</span>
                    <span className="text-white font-mono font-bold tracking-widest uppercase">{offers[currentIndex].code}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <button 
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-luxury-gold hover:text-black transition-all z-20"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-luxury-gold hover:text-black transition-all z-20"
        >
          <ChevronRight size={20} />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {offers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-500 ${currentIndex === idx ? 'w-12 bg-luxury-gold' : 'w-3 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-32 pt-20 border-t border-white/5 text-center">
        <h4 className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-8">Hotel X Loyalty Program</h4>
        <p className="text-white/60 font-light italic text-sm">"Join our exclusive club and unlock year-round privileges and bespoke experiences."</p>
      </div>
    </div>
  );
}

function ReviewSection({ label }: { label: string }) {
  return (
    <div className="pt-8 border-t border-white/10">
      <div className="flex items-center gap-1 text-luxury-gold mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
        <span className="text-[10px] text-white/40 ml-2 uppercase font-bold tracking-widest">{label} Reviews</span>
      </div>
      <div className="flex gap-4 items-center mb-6">
        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold">MK</div>
        <p className="text-xs italic text-white/40">"Absolutely impeccable service and quality."</p>
      </div>
    </div>
  );
}

function ReviewCard({ name, rate, comment }: { name: string, rate: number, comment: string }) {
  return (
    <div className="bg-luxury-card border border-white/5 p-8">
      <div className="flex items-center gap-1 text-luxury-gold mb-4">
        {[...Array(rate)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
      </div>
      <p className="text-white/60 font-light italic mb-6 leading-relaxed">"{comment}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-luxury-gold/20 flex items-center justify-center font-bold text-luxury-gold text-xs">{name[0]}</div>
        <span className="text-xs font-bold uppercase tracking-widest text-white">{name}</span>
      </div>
    </div>
  );
}
