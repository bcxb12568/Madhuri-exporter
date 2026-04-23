export interface RoomType {
  id: string;
  name: string;
  size: string;
  description: string;
  image: string;
  features: string[];
}

export interface LocationInfo {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  amenities: string[];
  attractions: string[];
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}
