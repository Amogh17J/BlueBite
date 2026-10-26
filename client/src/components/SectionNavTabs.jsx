import React from 'react';
import { Compass, Bike, Utensils, Coffee } from 'lucide-react';

export const SectionNavTabs = ({ activeSection, setActiveSection, counts }) => {
  const tabs = [
    { id: 'all', label: 'All Spots', icon: Compass, badge: counts?.all },
    { id: 'delivery', label: 'Delivery', icon: Bike, badge: counts?.delivery },
    { id: 'dining', label: 'Dining Out', icon: Utensils, badge: counts?.dining },
    { id: 'cafes', label: 'Cafes', icon: Coffee, badge: counts?.cafes }
  ];

  return (
    <nav className="section-nav-tabs-container" aria-label="Main Section Modes">
      <div className="section-nav-tabs">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              className={`section-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => setActiveSection(tab.id)}
              type="button"
            >
              <div className="section-tab-icon-wrap">
                <Icon size={19} className="section-tab-icon" />
              </div>
              <span className="section-tab-label">{tab.label}</span>
              {typeof tab.badge === 'number' && (
                <span className="section-tab-badge">{tab.badge}</span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
