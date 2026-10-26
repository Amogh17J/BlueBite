import React from 'react';
import { Sparkles, ChevronRight, Award, Wifi, Flame, Wine } from 'lucide-react';

const diningCollections = [
  {
    id: 'd-1',
    title: 'Top Rooftops & Views',
    places: '14 Places',
    tag: 'Trending',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'd-2',
    title: 'Candlelight & Romance',
    places: '9 Places',
    tag: 'Romantic',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'd-3',
    title: 'Craft Breweries & Pubs',
    places: '12 Places',
    tag: 'Nightlife',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'd-4',
    title: 'Grand Family Buffets',
    places: '8 Places',
    tag: 'Family',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&auto=format&fit=crop&q=80'
  }
];

const cafeCollections = [
  {
    id: 'c-1',
    title: 'Work-Friendly with WiFi',
    places: '11 Spots',
    tag: 'Remote Work',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'c-2',
    title: 'Pour-Overs & Cold Brews',
    places: '7 Spots',
    tag: 'Specialty',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'c-3',
    title: 'Artisan Bakes & Sourdough',
    places: '6 Spots',
    tag: 'Bakeries',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'c-4',
    title: 'Courtyard & Garden Cafes',
    places: '8 Spots',
    tag: 'Aesthetics',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&auto=format&fit=crop&q=80'
  }
];

export const CuratedCollections = ({ section, onSelectCategory }) => {
  if (section !== 'dining' && section !== 'cafes') return null;

  const collections = section === 'dining' ? diningCollections : cafeCollections;
  const heading = section === 'dining' ? 'Popular Dining Collections' : 'Curated Coffee & Cafe Trails';
  const subtitle = section === 'dining'
    ? 'Explore handpicked spots for romantic dates, rooftop drinks, and family feasts'
    : 'Discover the best specialty roasters, laptop-friendly cafes, and artisanal bakeries';

  return (
    <div className="curated-collections-section">
      <div className="collections-header">
        <div>
          <h3 className="collections-title">{heading}</h3>
          <p className="collections-subtitle">{subtitle}</p>
        </div>
      </div>

      <div className="collections-grid">
        {collections.map((item) => (
          <div key={item.id} className="collection-card">
            <img src={item.image} alt={item.title} className="collection-img" loading="lazy" />
            <div className="collection-overlay">
              <span className="collection-tag">{item.tag}</span>
              <h4 className="collection-name">{item.title}</h4>
              <span className="collection-count">{item.places} <ChevronRight size={13} /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
