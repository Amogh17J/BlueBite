import React, { useState, useEffect, useMemo, useRef } from 'react';
import './App.css';
import { CartProvider, useCart } from './context/CartContext';
import { AppHeader } from './components/AppHeader';
import { SearchBar } from './components/SearchBar';
import { SectionNavTabs } from './components/SectionNavTabs';
import { CategoryScroller } from './components/CategoryScroller';
import { CuratedCollections } from './components/CuratedCollections';
import { PromotionalBanner } from './components/PromotionalBanner';
import { FilterBar } from './components/FilterBar';
import { RestaurantList } from './components/RestaurantList';
import { RestaurantDetailModal } from './components/RestaurantDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { OrdersView } from './components/OrdersView';
import { LocationSelector } from './components/LocationSelector';
import { ProfileModal } from './components/ProfileModal';
import { AuthModal } from './components/AuthModal';
import { BottomNavigation } from './components/BottomNavigation';
import { fallbackRestaurants, fallbackFoodCategories } from './data/mockFallback';

function MainApp() {
  const { activeTab, setActiveTab } = useCart();
  const searchInputRef = useRef(null);

  // Centralized Page/Section Mode: 'all' | 'delivery' | 'dining' | 'cafes'
  const [activeSection, setActiveSection] = useState('delivery');

  // Data state
  const [restaurants, setRestaurants] = useState(fallbackRestaurants);
  const [foodCategories, setFoodCategories] = useState(fallbackFoodCategories);
  const [isLoading, setIsLoading] = useState(false);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [foodCategory, setFoodCategory] = useState('all');
  const [filters, setFilters] = useState({
    minRating: false,
    pureVeg: false,
    hasOffer: false,
    under200: false,
    fastDelivery: false
  });
  const [sortBy, setSortBy] = useState('default');

  // Fetch from backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Fetch categories & section tabs
        const catRes = await fetch('/api/restaurants/categories');
        if (catRes.ok) {
          const catJson = await catRes.json();
          if (catJson.success && catJson.data?.foodCategories) {
            setFoodCategories(catJson.data.foodCategories);
          }
        }

        // Fetch restaurants
        const restRes = await fetch('/api/restaurants');
        if (restRes.ok) {
          const restJson = await restRes.json();
          if (restJson.success && restJson.data) {
            setRestaurants(restJson.data);
          }
        }
      } catch (err) {
        console.warn('Backend API connection check: using local verified data', err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Section spot counts
  const sectionCounts = useMemo(() => {
    const delivery = restaurants.filter(r => r.category?.includes('Delivery')).length;
    const dining = restaurants.filter(r => r.category?.includes('Dining Out')).length;
    const cafes = restaurants.filter(r => r.category?.includes('Cafes') || r.cuisines?.includes('Cafes') || r.cuisines?.includes('Bakery')).length;
    return {
      all: restaurants.length,
      delivery,
      dining,
      cafes
    };
  }, [restaurants]);

  // Filter count calculation
  const activeFilterCount = useMemo(() => {
    let count = Object.values(filters).filter(Boolean).length;
    if (sortBy !== 'default') count++;
    return count;
  }, [filters, sortBy]);

  // Reset filters
  const resetFilters = () => {
    setFilters({
      minRating: false,
      pureVeg: false,
      hasOffer: false,
      under200: false,
      fastDelivery: false
    });
    setSortBy('default');
    setFoodCategory('all');
    setSearchQuery('');
  };

  // Filtered & Sorted Restaurants
  const filteredRestaurants = useMemo(() => {
    let result = [...restaurants];

    // 1. High-level Section Filter (All / Delivery / Dining Out / Cafes)
    if (activeSection !== 'all') {
      if (activeSection === 'delivery') {
        result = result.filter(r => r.category?.includes('Delivery'));
      } else if (activeSection === 'dining') {
        result = result.filter(r => r.category?.includes('Dining Out'));
      } else if (activeSection === 'cafes') {
        result = result.filter(r => r.category?.includes('Cafes') || r.cuisines?.includes('Cafes') || r.cuisines?.includes('Bakery'));
      }
    }

    // 2. Food / Cuisine Category Filter
    if (foodCategory && foodCategory.toLowerCase() !== 'all' && foodCategory.toLowerCase() !== 'all dishes') {
      const targetCat = foodCategory.toLowerCase().replace('_', ' ');
      result = result.filter(r =>
        r.cuisines.some(c => c.toLowerCase().includes(targetCat)) ||
        (r.category && r.category.some(c => c.toLowerCase().includes(targetCat))) ||
        (r.menu && r.menu.some(m => m.category.toLowerCase().includes(targetCat) || m.name.toLowerCase().includes(targetCat)))
      );
    }

    // 3. Live search query
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.cuisines.some(c => c.toLowerCase().includes(q)) ||
        r.description.toLowerCase().includes(q) ||
        (r.menu && r.menu.some(m => m.name.toLowerCase().includes(q)))
      );
    }

    // 4. Filters
    if (filters.minRating) {
      result = result.filter(r => r.rating >= 4.0);
    }
    if (filters.pureVeg) {
      result = result.filter(r => r.pureVeg === true);
    }
    if (filters.hasOffer) {
      result = result.filter(r => r.hasOffer === true);
    }
    if (filters.under200) {
      result = result.filter(r => r.priceForTwo <= 250);
    }
    if (filters.fastDelivery) {
      result = result.filter(r => r.deliveryTime <= 25);
    }

    // 5. Sorting
    if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'deliveryTime') {
      result.sort((a, b) => a.deliveryTime - b.deliveryTime);
    } else if (sortBy === 'costLow') {
      result.sort((a, b) => a.priceForTwo - b.priceForTwo);
    } else if (sortBy === 'costHigh') {
      result.sort((a, b) => b.priceForTwo - a.priceForTwo);
    }

    return result;
  }, [restaurants, activeSection, foodCategory, searchQuery, filters, sortBy]);

  const handleSearchFocus = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
      searchInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="app-container">
      <AppHeader />

      <main className="main-content">
        {activeTab === 'orders' ? (
          <OrdersView />
        ) : (
          <>
            {/* Search Experience */}
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              inputRef={searchInputRef}
            />

            {/* Centralized Section Mode Navigation (All Spots | Delivery | Dining Out | Cafes) */}
            <SectionNavTabs
              activeSection={activeSection}
              setActiveSection={(sec) => {
                setActiveSection(sec);
                setFoodCategory('all');
              }}
              counts={sectionCounts}
            />

            {/* Section Specific Content */}
            {activeSection === 'dining' ? (
              <CuratedCollections section="dining" />
            ) : activeSection === 'cafes' ? (
              <CuratedCollections section="cafes" />
            ) : (
              <>
                {/* Food Cuisines Scroller (Only for Delivery & All Discovery) */}
                <CategoryScroller
                  categories={foodCategories}
                  activeCategory={foodCategory}
                  setActiveCategory={setFoodCategory}
                  title={activeSection === 'delivery' ? "Inspiration for Delivery" : "Popular Cuisines & Dishes"}
                />

                {/* Promotional Banner */}
                <PromotionalBanner
                  onExploreClick={() => {
                    setFilters(prev => ({ ...prev, hasOffer: true }));
                  }}
                />
              </>
            )}

            {/* Filter and Sorting Bar */}
            <FilterBar
              filters={filters}
              setFilters={setFilters}
              sortBy={sortBy}
              setSortBy={setSortBy}
              activeFilterCount={activeFilterCount}
              resetFilters={resetFilters}
            />

            {/* Restaurant Listings */}
            <RestaurantList
              restaurants={filteredRestaurants}
              isLoading={isLoading}
              searchQuery={searchQuery}
              activeCategory={foodCategory}
              activeSection={activeSection}
              onResetFilters={resetFilters}
            />
          </>
        )}
      </main>

      {/* Modals & Drawers */}
      <RestaurantDetailModal />
      <CartDrawer />
      <LocationSelector />
      <ProfileModal />
      <AuthModal />

      {/* Mobile Bottom Navigation */}
      <BottomNavigation onSearchClick={handleSearchFocus} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}
