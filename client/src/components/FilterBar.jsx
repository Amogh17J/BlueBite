import React from 'react';
import { SlidersHorizontal, ArrowUpDown, Star, Leaf, Percent, Zap, DollarSign } from 'lucide-react';

export const FilterBar = ({
  filters,
  setFilters,
  sortBy,
  setSortBy,
  activeFilterCount,
  resetFilters
}) => {
  const toggleFilter = (key) => {
    setFilters(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSortCycle = () => {
    const sequence = ['default', 'rating', 'deliveryTime', 'costLow', 'costHigh'];
    const currentIndex = sequence.indexOf(sortBy);
    const nextSort = sequence[(currentIndex + 1) % sequence.length];
    setSortBy(nextSort);
  };

  const getSortLabel = () => {
    switch (sortBy) {
      case 'rating': return 'Rating: High to Low';
      case 'deliveryTime': return 'Fastest Delivery';
      case 'costLow': return 'Cost: Low to High';
      case 'costHigh': return 'Cost: High to Low';
      default: return 'Sort';
    }
  };

  return (
    <div className="filter-bar-wrapper">
      <div className="filter-bar">
        {/* Active Filter Counter / Reset */}
        <button
          className={`filter-pill ${activeFilterCount > 0 ? 'active-primary' : ''}`}
          onClick={resetFilters}
          title={activeFilterCount > 0 ? 'Click to reset all filters' : 'Filters'}
        >
          <SlidersHorizontal size={15} />
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="filter-count-badge">{activeFilterCount}</span>
          )}
        </button>

        {/* Sort Pill */}
        <button
          className={`filter-pill ${sortBy !== 'default' ? 'active' : ''}`}
          onClick={handleSortCycle}
        >
          <ArrowUpDown size={15} />
          <span>{getSortLabel()}</span>
        </button>

        {/* Rating 4.0+ */}
        <button
          className={`filter-pill ${filters.minRating ? 'active' : ''}`}
          onClick={() => toggleFilter('minRating')}
        >
          <Star size={14} className={filters.minRating ? 'fill-star' : ''} />
          <span>Rating 4.0+</span>
        </button>

        {/* Pure Veg */}
        <button
          className={`filter-pill ${filters.pureVeg ? 'active' : ''}`}
          onClick={() => toggleFilter('pureVeg')}
        >
          <Leaf size={14} className={filters.pureVeg ? 'text-green' : ''} />
          <span>Pure Veg</span>
        </button>

        {/* Offers */}
        <button
          className={`filter-pill ${filters.hasOffer ? 'active' : ''}`}
          onClick={() => toggleFilter('hasOffer')}
        >
          <Percent size={14} />
          <span>Offers</span>
        </button>

        {/* Under ₹200 */}
        <button
          className={`filter-pill ${filters.under200 ? 'active' : ''}`}
          onClick={() => toggleFilter('under200')}
        >
          <DollarSign size={14} />
          <span>Under ₹250</span>
        </button>

        {/* Fast Delivery (< 25 mins) */}
        <button
          className={`filter-pill ${filters.fastDelivery ? 'active' : ''}`}
          onClick={() => toggleFilter('fastDelivery')}
        >
          <Zap size={14} />
          <span>Fast Delivery (&le;25m)</span>
        </button>
      </div>
    </div>
  );
};
