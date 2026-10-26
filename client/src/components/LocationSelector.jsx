import React, { useState, useEffect } from 'react';
import { 
  X, 
  MapPin, 
  Home, 
  Briefcase, 
  Building2, 
  Plus, 
  Check, 
  Trash2, 
  Search, 
  ArrowLeft, 
  User, 
  Phone, 
  Navigation, 
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const BANGALORE_PINCODES = [
  { pin: '560034', area: 'Koramangala 4th Block', label: 'Koramangala' },
  { pin: '560038', area: '100 Feet Road, Indiranagar', label: 'Indiranagar' },
  { pin: '560103', area: 'Outer Ring Road, Bellandur', label: 'Bellandur' },
  { pin: '560095', area: '27th Main, Sector 1, HSR Layout', label: 'HSR Layout' },
  { pin: '560066', area: 'ITPL Main Road, Whitefield', label: 'Whitefield' },
  { pin: '560001', area: 'MG Road / Brigade Road', label: 'Central BLR' }
];

export const LocationSelector = () => {
  const { 
    isLocationModalOpen, 
    setIsLocationModalOpen, 
    savedAddresses, 
    currentLocation, 
    selectAddress, 
    addAddress, 
    deleteAddress, 
    user 
  } = useCart();

  const [viewMode, setViewMode] = useState('list'); // 'list' | 'add'
  const [searchQuery, setSearchQuery] = useState('');
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  // Form State
  const [category, setCategory] = useState('Hostel');
  const [customCategoryLabel, setCustomCategoryLabel] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [phone, setPhone] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [street, setStreet] = useState('');
  const [pincode, setPincode] = useState('560034');
  const [city, setCity] = useState('Bengaluru');
  const [landmark, setLandmark] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync initial user details when modal opens or user changes
  useEffect(() => {
    if (isLocationModalOpen) {
      if (user) {
        setRecipientName(user.name || 'Alex Taylor');
        setPhone(user.phone || '+91 91234 56789');
      } else {
        setRecipientName('Alex Taylor');
        setPhone('+91 91234 56789');
      }
      setStatusMessage({ type: '', text: '' });
      setViewMode('list');
      setSearchQuery('');
    }
  }, [isLocationModalOpen, user]);

  if (!isLocationModalOpen) return null;

  const getCategoryIcon = (cat, size = 16) => {
    switch (cat) {
      case 'Hostel':
        return <Building2 size={size} />;
      case 'Work':
        return <Briefcase size={size} />;
      case 'Home':
        return <Home size={size} />;
      case 'Other':
      default:
        return <MapPin size={size} />;
    }
  };

  const getCategoryBadgeClass = (cat) => {
    switch (cat) {
      case 'Hostel':
        return 'cat-badge-hostel';
      case 'Work':
        return 'cat-badge-work';
      case 'Home':
        return 'cat-badge-home';
      case 'Other':
      default:
        return 'cat-badge-other';
    }
  };

  const filteredAddresses = savedAddresses.filter(addr => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      (addr.category && addr.category.toLowerCase().includes(q)) ||
      (addr.displayCategory && addr.displayCategory.toLowerCase().includes(q)) ||
      (addr.recipientName && addr.recipientName.toLowerCase().includes(q)) ||
      (addr.street && addr.street.toLowerCase().includes(q)) ||
      (addr.pincode && addr.pincode.includes(q)) ||
      (addr.houseNo && addr.houseNo.toLowerCase().includes(q)) ||
      (addr.address && addr.address.toLowerCase().includes(q))
    );
  });

  const handleQuickPincode = (item) => {
    setPincode(item.pin);
    if (!street || street.trim() === '') {
      setStreet(item.area);
    }
  };

  const handleSaveAddress = async (e) => {
    e.preventDefault();
    setStatusMessage({ type: '', text: '' });

    // Validation
    if (!recipientName.trim()) {
      setStatusMessage({ type: 'error', text: 'Please enter the recipient name' });
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setStatusMessage({ type: 'error', text: 'Please enter a valid phone number' });
      return;
    }
    if (!houseNo.trim()) {
      setStatusMessage({ 
        type: 'error', 
        text: category === 'Hostel' 
          ? 'Please enter Hostel Name & Room/Block Number' 
          : 'Please enter House / Flat / Room Number' 
      });
      return;
    }
    if (!street.trim()) {
      setStatusMessage({ type: 'error', text: 'Please enter the street or locality' });
      return;
    }
    if (!pincode.trim() || pincode.trim().length !== 6) {
      setStatusMessage({ type: 'error', text: 'Please enter a valid 6-digit Pincode (e.g. 560034)' });
      return;
    }

    setIsSubmitting(true);
    try {
      await addAddress({
        category,
        customCategoryLabel: category === 'Other' ? customCategoryLabel : '',
        recipientName: recipientName.trim(),
        phone: phone.trim(),
        houseNo: houseNo.trim(),
        street: street.trim(),
        pincode: pincode.trim(),
        city: city.trim() || 'Bengaluru',
        landmark: landmark.trim()
      });

      setStatusMessage({ type: 'success', text: 'Address added and set as active delivery location!' });
      setTimeout(() => {
        setIsSubmitting(false);
        setIsLocationModalOpen(false);
      }, 700);
    } catch (err) {
      setStatusMessage({ type: 'error', text: 'Failed to save address. Please try again.' });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsLocationModalOpen(false)}>
      <div className="address-modal-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="address-modal-header">
          <div className="address-modal-header-left">
            {viewMode === 'add' && (
              <button 
                className="address-back-btn" 
                onClick={() => setViewMode('list')}
                title="Back to saved addresses"
              >
                <ArrowLeft size={18} />
              </button>
            )}
            <div>
              <h3 className="address-modal-title">
                {viewMode === 'list' ? 'Select Delivery Address' : 'Add New Address'}
              </h3>
              <p className="address-modal-subtitle">
                {viewMode === 'list' 
                  ? 'Choose from saved addresses or add a new delivery location' 
                  : 'Enter complete address, recipient details & category'}
              </p>
            </div>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={() => setIsLocationModalOpen(false)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Status Alert Banner */}
        {statusMessage.text && (
          <div className={`address-status-banner ${statusMessage.type}`}>
            {statusMessage.type === 'error' ? <AlertCircle size={16} /> : <CheckCircle2 size={16} />}
            <span>{statusMessage.text}</span>
          </div>
        )}

        {/* ----------------- VIEW 1: SAVED ADDRESSES LIST ----------------- */}
        {viewMode === 'list' && (
          <div className="address-list-view">
            {/* Top Toolbar */}
            <div className="address-list-toolbar">
              <div className="address-search-box">
                <Search size={16} className="address-search-icon" />
                <input 
                  type="text" 
                  placeholder="Search by area, pincode, hostel, name..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="address-search-input"
                />
                {searchQuery && (
                  <button className="address-search-clear" onClick={() => setSearchQuery('')}>
                    <X size={14} />
                  </button>
                )}
              </div>

              <button 
                className="add-new-address-btn"
                onClick={() => {
                  setViewMode('add');
                  setStatusMessage({ type: '', text: '' });
                }}
              >
                <Plus size={16} />
                <span>Add Address</span>
              </button>
            </div>

            {/* Saved Addresses Cards List */}
            <div className="saved-address-cards-scroll">
              {filteredAddresses.length === 0 ? (
                <div className="address-empty-search">
                  <MapPin size={32} className="empty-pin-icon" />
                  <h4>No addresses match "{searchQuery}"</h4>
                  <p>Try searching another keyword or create a new address.</p>
                  <button 
                    className="secondary-btn-outline"
                    onClick={() => {
                      setSearchQuery('');
                      setViewMode('add');
                    }}
                  >
                    <Plus size={15} /> Add New Address
                  </button>
                </div>
              ) : (
                filteredAddresses.map((addr) => {
                  const isCurrent = currentLocation && currentLocation.id === addr.id;
                  const displayCat = addr.displayCategory || addr.category || 'Home';

                  return (
                    <div 
                      key={addr.id} 
                      className={`saved-address-card ${isCurrent ? 'active-address' : ''}`}
                      onClick={() => selectAddress(addr)}
                    >
                      <div className="saved-address-card-top">
                        <div className="saved-address-cat-group">
                          <span className={`category-pill-tag ${getCategoryBadgeClass(addr.category)}`}>
                            {getCategoryIcon(addr.category, 14)}
                            <span>{displayCat}</span>
                          </span>

                          <span className="pincode-highlight-chip">
                            PIN: {addr.pincode || '560038'}
                          </span>

                          {isCurrent && (
                            <span className="current-delivering-tag">
                              <CheckCircle2 size={13} />
                              <span>Delivering Here</span>
                            </span>
                          )}
                        </div>

                        {savedAddresses.length > 1 && (
                          <button 
                            className="delete-address-btn"
                            title="Delete this address"
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteAddress(addr.id);
                            }}
                          >
                            <Trash2 size={15} />
                          </button>
                        )}
                      </div>

                      {/* Recipient Details */}
                      <div className="saved-address-recipient-row">
                        <div className="recipient-item">
                          <User size={13} className="contact-icon" />
                          <span className="recipient-name-text">{addr.recipientName || 'Alex Taylor'}</span>
                        </div>
                        <span className="bullet-sep">•</span>
                        <div className="recipient-item">
                          <Phone size={13} className="contact-icon" />
                          <span className="recipient-phone-text">{addr.phone || '+91 91234 56789'}</span>
                        </div>
                      </div>

                      {/* Full Address Details */}
                      <div className="saved-address-body">
                        <p className="saved-address-full">
                          <strong>{addr.houseNo ? `${addr.houseNo}, ` : ''}</strong>
                          {addr.street || ''}, {addr.city || 'Bengaluru'} - {addr.pincode || ''}
                        </p>
                        {addr.landmark && (
                          <div className="saved-address-landmark">
                            <Navigation size={12} className="landmark-icon" />
                            <span>Landmark: {addr.landmark}</span>
                          </div>
                        )}
                      </div>

                      {/* Bottom action */}
                      <div className="saved-address-footer">
                        {isCurrent ? (
                          <div className="selected-indicator-text">
                            <Check size={14} /> Active Location
                          </div>
                        ) : (
                          <button 
                            className="deliver-here-action-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              selectAddress(addr);
                            }}
                          >
                            Deliver Here
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* ----------------- VIEW 2: DETAILED ADD ADDRESS FORM ----------------- */}
        {viewMode === 'add' && (
          <form className="add-address-form" onSubmit={handleSaveAddress}>
            <div className="add-address-form-body">
              {/* 1. Category Selection */}
              <div className="form-section-block">
                <label className="form-section-label">
                  1. Select Category / Address Type <span className="req-star">*</span>
                </label>
                <div className="category-selection-grid">
                  {[
                    { id: 'Hostel', label: 'Hostel / PG', icon: <Building2 size={16} />, hint: 'Student hostel, PG or campus hall' },
                    { id: 'Home', label: 'Home', icon: <Home size={16} />, hint: 'Apartment, villa or flat' },
                    { id: 'Work', label: 'Work', icon: <Briefcase size={16} />, hint: 'Office, IT park or workspace' },
                    { id: 'Other', label: 'Other', icon: <MapPin size={16} />, hint: 'Library, friend’s place, studio' }
                  ].map((catItem) => (
                    <button
                      key={catItem.id}
                      type="button"
                      className={`cat-select-card ${category === catItem.id ? 'active' : ''}`}
                      onClick={() => setCategory(catItem.id)}
                    >
                      <div className="cat-select-icon">{catItem.icon}</div>
                      <span className="cat-select-title">{catItem.label}</span>
                      <span className="cat-select-hint">{catItem.hint}</span>
                    </button>
                  ))}
                </div>

                {category === 'Other' && (
                  <div className="custom-category-input-wrap">
                    <label className="sub-field-label">Specify Custom Name (e.g. Friends PG, Library, Gym)</label>
                    <input 
                      type="text" 
                      className="form-text-input" 
                      placeholder="e.g. Study Hall / Friend's Flat"
                      value={customCategoryLabel}
                      onChange={(e) => setCustomCategoryLabel(e.target.value)}
                    />
                  </div>
                )}
              </div>

              {/* 2. Recipient Contact Info */}
              <div className="form-section-block">
                <label className="form-section-label">
                  2. Recipient Contact Details <span className="req-star">*</span>
                </label>
                <div className="form-two-col-grid">
                  <div className="form-field-group">
                    <label className="sub-field-label">Recipient Full Name</label>
                    <div className="input-with-icon-wrap">
                      <User size={16} className="field-icon" />
                      <input 
                        type="text" 
                        required
                        className="form-text-input with-icon"
                        placeholder="e.g. Alex Taylor"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-field-group">
                    <label className="sub-field-label">10-Digit Mobile Number</label>
                    <div className="input-with-icon-wrap">
                      <Phone size={16} className="field-icon" />
                      <input 
                        type="tel" 
                        required
                        className="form-text-input with-icon"
                        placeholder="e.g. +91 91234 56789"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/[^\d+ -]/g, '').slice(0, 16))}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Address Specifics */}
              <div className="form-section-block">
                <label className="form-section-label">
                  3. Full Address & Pincode <span className="req-star">*</span>
                </label>

                {/* House/Room Number */}
                <div className="form-field-group">
                  <label className="sub-field-label">
                    {category === 'Hostel' 
                      ? 'Hostel Name, Block & Room Number *' 
                      : category === 'Work' 
                      ? 'Company, Building & Floor / Unit *' 
                      : 'Flat / House / Apartment / Floor *'}
                  </label>
                  <input 
                    type="text" 
                    required
                    className="form-text-input"
                    placeholder={
                      category === 'Hostel' 
                        ? 'e.g. Kaveri Hostel Block B, Room 304' 
                        : category === 'Work'
                        ? 'e.g. 5th Floor, Tower B, WeWork'
                        : 'e.g. Flat 402, Palm Grove Apartments'
                    }
                    value={houseNo}
                    onChange={(e) => setHouseNo(e.target.value)}
                  />
                </div>

                {/* Street / Locality */}
                <div className="form-field-group">
                  <label className="sub-field-label">Street / Area / Locality / Sector *</label>
                  <input 
                    type="text" 
                    required
                    className="form-text-input"
                    placeholder="e.g. 80 Feet Road, 4th Block, Koramangala"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </div>

                {/* Pincode & City */}
                <div className="form-two-col-grid">
                  <div className="form-field-group">
                    <label className="sub-field-label">6-Digit Pincode *</label>
                    <input 
                      type="text" 
                      required
                      maxLength={6}
                      className="form-text-input pincode-bold"
                      placeholder="e.g. 560034"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="sub-field-label">City *</label>
                    <input 
                      type="text" 
                      required
                      className="form-text-input"
                      placeholder="Bengaluru"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>

                {/* Quick Pincode helper chips */}
                <div className="quick-pincodes-section">
                  <span className="quick-pincode-label">Quick Pincodes:</span>
                  <div className="quick-pincode-chips">
                    {BANGALORE_PINCODES.map((item) => (
                      <button
                        key={item.pin}
                        type="button"
                        className={`pincode-chip-btn ${pincode === item.pin ? 'selected' : ''}`}
                        onClick={() => handleQuickPincode(item)}
                      >
                        {item.pin} ({item.label})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Nearby Landmark */}
                <div className="form-field-group">
                  <label className="sub-field-label">Nearby Landmark (Optional)</label>
                  <div className="input-with-icon-wrap">
                    <Navigation size={15} className="field-icon" />
                    <input 
                      type="text" 
                      className="form-text-input with-icon"
                      placeholder="e.g. Near Sony World Signal / Opposite Metro Pillar 84"
                      value={landmark}
                      onChange={(e) => setLandmark(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* 4. Live Address Preview Card */}
              <div className="address-live-preview-box">
                <div className="preview-box-header">
                  <Sparkles size={14} className="preview-sparkle" />
                  <span>Live Preview of Address Label</span>
                </div>
                <div className="preview-card-body">
                  <div className="preview-card-top">
                    <span className={`category-pill-tag ${getCategoryBadgeClass(category)}`}>
                      {getCategoryIcon(category, 13)}
                      <span>{category === 'Other' && customCategoryLabel ? customCategoryLabel : category}</span>
                    </span>
                    <span className="pincode-highlight-chip">PIN: {pincode || '560034'}</span>
                  </div>
                  <div className="preview-recipient">
                    <strong>{recipientName || 'Alex Taylor'}</strong> · {phone || '+91 91234 56789'}
                  </div>
                  <div className="preview-full-addr">
                    {houseNo ? `${houseNo}, ` : ''}{street || 'Area / Locality'}, {city || 'Bengaluru'} - {pincode || '560034'}
                    {landmark ? ` (Landmark: ${landmark})` : ''}
                  </div>
                </div>
              </div>
            </div>

            {/* Form Footer Actions */}
            <div className="add-address-form-footer">
              <button 
                type="button" 
                className="address-cancel-btn"
                onClick={() => setViewMode('list')}
                disabled={isSubmitting}
              >
                Cancel
              </button>

              <button 
                type="submit" 
                className="address-submit-btn"
                disabled={isSubmitting}
              >
                <Check size={16} />
                <span>{isSubmitting ? 'Saving Address...' : 'Save & Deliver Here'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
