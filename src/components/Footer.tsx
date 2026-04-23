import { Hotel, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="about" className="bg-luxury-card text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <h4 className="font-serif text-3xl tracking-tighter uppercase">Hotel <span className="text-luxury-gold">X</span></h4>
            </div>
            <p className="text-white/40 font-light text-lg max-w-md leading-relaxed mb-10">
              Redefining business luxury with a focus on quality, comfort, and professional service. Member of Index Holdings Limited.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/5 rounded-none flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-cream transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-10 opacity-70">Pages</h4>
            <ul className="space-y-6 text-white/50">
              <li><button onClick={() => window.scrollTo(0, 0)} className="text-[11px] uppercase tracking-widest hover:text-luxury-gold transition-colors">Home</button></li>
              <li><button className="text-[11px] uppercase tracking-widest hover:text-luxury-gold transition-colors">About Us</button></li>
              <li><button className="text-[11px] uppercase tracking-widest hover:text-luxury-gold transition-colors">Property List</button></li>
              <li><button className="text-[11px] uppercase tracking-widest hover:text-luxury-gold transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-10 opacity-70">Contact</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <MapPin className="text-luxury-gold shrink-0" size={16} />
                <div className="text-white/50 text-[11px] uppercase tracking-wider leading-relaxed">
                  XIC Point, Kha-213/2, Kha-213/3 and<br />
                  Kha 213/5, Bir Uttam Rafiqul Islam<br />
                  Sarani, Middle Badda, Dhaka-1212.
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-luxury-gold shrink-0" size={16} />
                <div className="text-white/50 text-[11px] uppercase tracking-wider">+8802 9840 726</div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-luxury-gold shrink-0" size={16} />
                <div className="text-white/50 text-[11px] uppercase tracking-wider">info@hotelxhospitality.com</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/20">
          <p>© 2024 Hotel X Hospitality Group</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Index Holdings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
