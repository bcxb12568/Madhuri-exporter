import { RoomType, LocationInfo, Facility } from './types';

export const LOCATIONS: LocationInfo[] = [
  {
    id: 'gazipur',
    name: 'Gazipur',
    slug: 'gazipur',
    description: 'A business boutique hotel located on the Dhaka–Mymensingh Highway, near the serene Bhawal forest. Perfect for corporate travelers and nature lovers alike.',
    image: '/src/assets/images/hotel_hero_1776927931269.png',
    amenities: ['Business Lounge', 'Forest View', 'Corporate Suites'],
    attractions: ['Bhawal Forest', 'Industrial Hub']
  },
  {
    id: 'rajshahi',
    name: 'Rajshahi',
    slug: 'rajshahi',
    description: 'Located in the heart of the urban, commercial, and education center, our Rajshahi property focuses on privacy and premium comfort.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    amenities: ['City Center', 'Privacy Focus', 'Education Hub Access'],
    attractions: ['Varendra Research Museum', 'Padma Garden', 'Boro Kuthi']
  },
  {
    id: 'narsingdi',
    name: 'Narsingdi',
    slug: 'narsingdi',
    description: 'A business-focused hotel serving the vibrant textile and commercial community of Narsingdi.',
    image: 'https://images.unsplash.com/photo-1582719478237-affe303e1ba7?auto=format&fit=crop&q=80',
    amenities: ['Textile Hub', 'Commercial Center', 'Proximity to Parks'],
    attractions: ['Zinda Park', 'Dream Holiday Park', 'Egarosindur Fort']
  }
];

export const ROOM_TYPES: RoomType[] = [
  {
    id: 'standard',
    name: 'Standard Room',
    size: '154 sq ft',
    description: 'Elegant design and essential comfort for the modern business traveler.',
    image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&q=80',
    features: ['Air-conditioned', 'LED TV', 'Heavenly Bed', 'Electronic Safe']
  },
  {
    id: 'deluxe-double',
    name: 'Deluxe Double Room',
    size: '185 sq ft',
    description: 'Spacious and refined, featuring our signature Heavenly Bed for a restful night.',
    image: '/src/assets/images/hotel_room_deluxe_1776927953059.png',
    features: ['Signature Bed', 'Premium Toiletries', 'High-speed WiFi', 'Tea/Coffee setup']
  },
  {
    id: 'deluxe-twin',
    name: 'Deluxe Twin Room',
    size: '185 sq ft',
    description: 'Ideal for corporate partners traveling together, offering flexibility and style.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80',
    features: ['Twin Beds', 'Work Desk', 'Mini Fridge', 'Electronic Safe']
  },
  {
    id: 'premium-suite',
    name: 'Premium Suite',
    size: '233–300 sq ft',
    description: 'The ultimate in luxury and space, designed for extended stays and business discussions.',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7761a9e844?auto=format&fit=crop&q=80',
    features: ['Lounge Area', 'Priority Service', 'Panoramic View', 'Luxury Bath']
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'dining',
    name: 'Fine Dining',
    description: 'Full-service restaurant with professional chefs focusing on high-quality ingredients and a refined experience.',
    icon: 'Utensils',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80'
  },
  {
    id: 'gym',
    name: 'Fitness Center',
    description: 'Fully equipped gym with top-of-the-line equipment to maintain your routine while traveling.',
    icon: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80'
  },
  {
    id: 'banquet',
    name: 'Banquet & Events',
    description: 'World-class conference halls and convention centers suitable for corporate meetings and social celebrations.',
    icon: 'Users',
    image: '/src/assets/images/hotel_banquet_1776927972688.png'
  }
];
