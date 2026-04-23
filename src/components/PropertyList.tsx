import { motion } from 'motion/react';
import { Star, ArrowRight, MapPin } from 'lucide-react';

const PROPERTIES = [
  {
    id: 'gazipur',
    name: 'Hotel X - Gazipur',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    rooms: 'Standard Room | Deluxe Twin Room | Premium Suite Room',
    size: '154 sft | 185 sft | 233 sft',
    description: 'Hotel X, Gazipur is a new Business Boutique Hotel on the Dhaka-Mymensingh Highway in Rajendrapur. With its 50 tastefully decorated, well equipped rooms adhering with the safety & security standards in the industry it stands just on the edges of BHAWAL forest.',
    stars: 5
  },
  {
    id: 'rajshahi',
    name: 'Hotel X - Rajshahi',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
    rooms: 'Suite Room | Standard Room | Deluxe Double Room | Deluxe Twin Room',
    size: '300 | 154 | 185 | 233',
    description: "Hotel X is proud to bring it's latest property to the city of Rajshahi. The property stands tall and offers a new and unique hospitality experience to it's guests. Complete privacy and ultimate comfort has been the major priority for us.",
    stars: 5
  },
  {
    id: 'narsingdi',
    name: 'Hotel X - Narsingdi',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80',
    rooms: 'Standard Room | Deluxe Double Room | Deluxe Twin Room',
    size: '154 sft | 185 sft | 233 sft',
    description: 'Well established in one of the major commercial center\'s of Dhaka division. Hotel X has been serving to the daily needs and desires of all business travelers to Narsingdi. The modern and smart tech facilities with Hotel X experienced staff we provide an everlasting, rejoiced experience.',
    stars: 5
  }
];

export default function PropertyList({ onOpenBranch }: { onOpenBranch: () => void }) {
  return (
    <section className="bg-[#0A0A0A] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-luxury-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">Our Collection</span>
            <h1 className="text-6xl md:text-8xl font-serif uppercase tracking-tighter mb-4">
              Property <span className="text-luxury-gold">List</span>
            </h1>
            <div className="flex justify-center mb-10">
              <div className="w-24 h-[1px] bg-luxury-gold/50" />
              <div className="w-4 h-4 border border-luxury-gold rotate-45 -mt-[7px] mx-4" />
              <div className="w-24 h-[1px] bg-luxury-gold/50" />
            </div>
          </motion.div>
        </div>

        <div className="space-y-32">
          {PROPERTIES.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center group"
            >
              <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative aspect-[4/3] overflow-hidden border border-white/10 p-2 bg-luxury-card group-hover:border-luxury-gold/50 transition-colors">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                  
                  {/* Property Tag */}
                  <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-white">
                    {property.name.split(' - ')[1]}
                  </div>
                </div>
              </div>

              <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex items-center gap-1 text-luxury-gold mb-6">
                  {[...Array(property.stars)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 uppercase tracking-tight">
                  {property.name}
                </h3>

                <div className="space-y-6 mb-10">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold">Available Accommodations</span>
                    <p className="text-white/60 font-light text-sm italic">{property.rooms}</p>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold">Room Dimensions</span>
                    <p className="text-white/40 font-mono text-xs">{property.size}</p>
                  </div>

                  <p className="text-white/50 font-light leading-relaxed text-sm">
                    {property.description}
                  </p>
                </div>

                <button 
                  onClick={onOpenBranch}
                  className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold text-luxury-gold hover:text-white transition-all group/btn"
                >
                  <span className="border-b border-luxury-gold pb-1">View Property Details</span>
                  <div className="w-10 h-10 border border-luxury-gold/30 rounded-full flex items-center justify-center group-hover/btn:border-white transition-colors">
                    <ArrowRight size={14} />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
