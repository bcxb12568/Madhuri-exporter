/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import Locations from './components/Locations';
import Rooms from './components/Rooms';
import Facilities from './components/Facilities';
import Footer from './components/Footer';
import DetailOverlay, { OffersContent, ReservationContent } from './components/DetailOverlay';
import RestaurantPanorama from './components/RestaurantPanorama';
import PropertyList from './components/PropertyList';
import About from './components/About';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'locations' | 'rooms' | 'facilities' | 'about' | 'offers' | 'dining' | 'properties'>('home');
  const [activeDetail, setActiveDetail] = useState<{ type: 'reservation' | 'branch' | 'room' | 'offers' | null, data?: any }>(null);

  const openDetail = (type: 'reservation' | 'branch' | 'room' | 'offers', data?: any) => {
    setActiveDetail({ type, data });
  };

  const renderContent = () => {
    switch (activePage) {
      case 'locations':
        return (
          <div className="pt-32 min-h-screen">
             <Locations onExplore={() => openDetail('branch')} />
          </div>
        );
      case 'properties':
        return (
          <div className="pt-32 min-h-screen">
             <PropertyList onOpenBranch={() => openDetail('branch')} />
          </div>
        );
      case 'rooms':
        return (
          <div className="pt-32 min-h-screen">
             <Rooms onOpenRoom={(room) => openDetail('room', room)} />
          </div>
        );
      case 'facilities':
        return (
          <div className="pt-32 min-h-screen">
             <Facilities />
          </div>
        );
      case 'about':
        return (
          <About onExploreBranch={() => openDetail('branch')} />
        );
      case 'offers':
        return (
          <div className="pt-40 min-h-screen pb-32">
             <OffersContent />
          </div>
        );
      case 'dining':
        return (
          <div className="pt-32 min-h-screen">
             <RestaurantPanorama />
          </div>
        );
      default:
        return (
          <>
            <Hero 
              onReserve={() => openDetail('reservation')} 
              onExplore={() => {
                setActivePage('locations');
                window.scrollTo(0, 0);
              }} 
            />
            <BrandStory />
            {/* Optional: Add small previews/cards for other sections here if "Home' should have summary info */}
            <div className="bg-[#0A0A0A] py-20 border-t border-white/5">
              <div className="container mx-auto px-6 text-center">
                <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold mb-6 block">Refined Selection</span>
                <h3 className="text-4xl font-serif text-white mb-12">Discover Our Collection</h3>
                <div className="flex flex-wrap justify-center gap-10">
                   {['rooms', 'locations', 'facilities'].map(p => (
                     <button 
                       key={p}
                       onClick={() => { setActivePage(p as any); window.scrollTo(0, 0); }}
                       className="text-xs uppercase tracking-[0.3em] font-bold text-white/40 hover:text-luxury-gold transition-colors"
                     >
                       Explore {p}
                     </button>
                   ))}
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <main className="relative bg-[#0A0A0A] min-h-screen">
      <Navigation 
        activePage={activePage}
        onPageChange={(page) => {
          setActivePage(page);
          window.scrollTo(0, 0);
        }}
        onReserve={() => openDetail('reservation')} 
      />
      
      {renderContent()}

      <Footer />

      <DetailOverlay 
        isOpen={!!activeDetail} 
        onClose={() => setActiveDetail(null)}
        type={activeDetail?.type || null}
        data={activeDetail?.data}
      />
    </main>
  );
}
