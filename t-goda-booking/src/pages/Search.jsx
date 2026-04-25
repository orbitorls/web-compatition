import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Search.css';

const filterGroups = [
  {
    title: 'Property Type',
    options: ['Hotels', 'Resorts', 'Apartments', 'Villas'],
  },
  {
    title: 'Star Rating',
    options: ['5 stars', '4 stars'],
    starLabels: true,
  },
  {
    title: 'Facilities',
    options: ['Free Wi-Fi', 'Swimming Pool', 'Fitness Center', 'Spa', 'Parking', 'Pet Friendly'],
  },
  {
    title: 'Review Score',
    options: ['Superb 9+', 'Very Good 8+', 'Good 7+'],
  },
  {
    title: 'Neighborhood',
    options: ['Patong', 'Karon', 'Kata', 'Kamala'],
  },
  {
    title: 'Bed Type',
    options: ['Single', 'Double', 'King'],
  },
];

const flashDeals = [
  {
    id: 1,
    name: 'Mandala Sky Luxury Villas',
    rating: 5,
    detail: 'Uluwatu, Bali • Cliff-top view',
    discount: '60% OFF',
    oldPrice: '$1,200',
    price: '$480',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80',
  },
  {
    id: 2,
    name: 'Emerald Jungle Retreat',
    rating: 4,
    detail: 'Ubud, Bali • Private Sanctuary',
    discount: '45% OFF',
    oldPrice: '$450',
    price: '$247',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  },
  {
    id: 3,
    name: 'Seminyak Shores Club',
    rating: 5,
    detail: 'Seminyak, Bali • Beachfront Bliss',
    discount: '35% OFF',
    oldPrice: '$680',
    price: '$442',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
  },
];

const allResults = [
  {
    id: 1,
    name: 'The Azure Serenity Resort',
    rating: 5,
    location: 'Ubud, Bali • 2.5 km from center',
    score: '8.9',
    scoreLabel: 'Excellent',
    reviews: '1,240 reviews',
    note: 'Only 2 rooms left at this price!',
    oldPrice: '$320',
    price: '$284',
    badge: 'Top Choice',
    amenities: ['Free Wi-Fi', 'Pool', 'Breakfast'],
    type: 'Resort',
    facilities: ['Free Wi-Fi', 'Swimming Pool', 'Spa', 'Fitness Center'],
    neighborhood: 'Ubud',
    bedType: 'King',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80',
  },
  {
    id: 2,
    name: 'Lumina Beach Villas',
    rating: 4,
    location: 'Seminyak, Bali • Beachfront',
    score: '9.2',
    scoreLabel: 'Exceptional',
    reviews: '856 reviews',
    note: 'Free cancellation before Oct 10',
    price: '$415',
    amenities: ['Private Beach', 'Spa'],
    type: 'Villas',
    facilities: ['Free Wi-Fi', 'Swimming Pool', 'Spa', 'Parking'],
    neighborhood: 'Seminyak',
    bedType: 'King',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80',
  },
  {
    id: 3,
    name: 'The Palms Sanctuary',
    rating: 4,
    location: 'Nusa Dua, Bali • 0.8 km from beach',
    score: '8.4',
    scoreLabel: 'Great',
    reviews: '2,102 reviews',
    note: 'Breakfast + Dinner deal available',
    price: '$189',
    amenities: ['Airport Shuttle', 'Gym'],
    type: 'Hotel',
    facilities: ['Fitness Center', 'Parking', 'Pet Friendly'],
    neighborhood: 'Kuta',
    bedType: 'Double',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80',
  },
  {
    id: 4,
    name: 'Ocean Breeze Hotel',
    rating: 3,
    location: 'Kuta, Bali • 0.5 km from beach',
    score: '7.5',
    scoreLabel: 'Good',
    reviews: '543 reviews',
    note: 'Last minute deal!',
    price: '$95',
    amenities: ['Free Wi-Fi', 'Breakfast'],
    type: 'Hotel',
    facilities: ['Free Wi-Fi', 'Parking'],
    neighborhood: 'Kuta',
    bedType: 'Single',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  },
  {
    id: 5,
    name: 'Royal Garden Apartments',
    rating: 4,
    location: 'Ubud, Bali • 1.2 km from center',
    score: '8.7',
    scoreLabel: 'Very Good',
    reviews: '892 reviews',
    note: 'Spacious apartments with kitchen',
    price: '$156',
    amenities: ['Kitchen', 'Pool', 'Gym'],
    type: 'Apartments',
    facilities: ['Swimming Pool', 'Fitness Center', 'Parking', 'Pet Friendly'],
    neighborhood: 'Ubud',
    bedType: 'Double',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
  },
  {
    id: 6,
    name: 'Sunset Cliff Resort',
    rating: 5,
    location: 'Uluwatu, Bali • Cliff-top view',
    score: '9.5',
    scoreLabel: 'Superb',
    reviews: '1,567 reviews',
    note: 'Private infinity pool in every villa',
    oldPrice: '$580',
    price: '$445',
    badge: 'Top Choice',
    amenities: ['Private Pool', 'Spa', 'Free Wi-Fi'],
    type: 'Resort',
    facilities: ['Free Wi-Fi', 'Swimming Pool', 'Spa', 'Fitness Center', 'Parking'],
    neighborhood: 'Uluwatu',
    bedType: 'King',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80',
  },
];

const Search = () => {
  const handleImageError = (event) => {
    event.currentTarget.classList.add('image-load-failed');
    event.currentTarget.removeAttribute('src');
  };

  const getStoredSearchData = () => {
    try {
      const stored = localStorage.getItem('searchData');
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          destination: parsed.destination || 'Bali, Indonesia',
          checkIn: new Date(parsed.checkIn || '2024-10-12'),
          checkOut: new Date(parsed.checkOut || '2024-10-19'),
          adults: parsed.adults || 2,
          children: parsed.children || 0,
          rooms: parsed.rooms || 1,
        };
      }
    } catch (e) {
      console.error('Failed to parse search data', e);
    }
    return {
      destination: 'Bali, Indonesia',
      checkIn: new Date('2024-10-12'),
      checkOut: new Date('2024-10-19'),
      adults: 2,
      children: 0,
      rooms: 1,
    };
  };

  const [mapOpen, setMapOpen] = useState(false);
  const [editModal, setEditModal] = useState(null);
  const [searchData, setSearchData] = useState(getStoredSearchData);
  const [selectedFilters, setSelectedFilters] = useState({
    propertyType: [],
    starRating: [],
    facilities: [],
    reviewScore: [],
    neighborhood: [],
    bedType: [],
  });
  const [priceRange, setPriceRange] = useState(1000);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const updateSearchData = (field, value) => {
    setSearchData((prev) => {
      const updated = { ...prev, [field]: value };
      localStorage.setItem('searchData', JSON.stringify({
        destination: updated.destination,
        checkIn: updated.checkIn.toISOString(),
        checkOut: updated.checkOut.toISOString(),
        adults: updated.adults,
        children: updated.children,
        rooms: updated.rooms,
      }));
      return updated;
    });
  };

  const handleSaveEdit = () => {
    setEditModal(null);
  };

  const toggleFilter = (category, value) => {
    setSelectedFilters((prev) => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      propertyType: [],
      starRating: [],
      facilities: [],
      reviewScore: [],
      neighborhood: [],
      bedType: [],
    });
    setPriceRange(1000);
  };

  const filteredResults = allResults.filter((hotel) => {
    const numericPrice = parseInt(hotel.price.replace(/[^0-9]/g, ''));
    if (numericPrice > priceRange) return false;

    if (selectedFilters.propertyType.length > 0 && !selectedFilters.propertyType.includes(hotel.type)) {
      return false;
    }

    if (selectedFilters.starRating.length > 0) {
      const matches = selectedFilters.starRating.some((rating) => hotel.rating === parseInt(rating[0]));
      if (!matches) return false;
    }

    if (selectedFilters.facilities.length > 0) {
      const hasAllFacilities = selectedFilters.facilities.every((facility) =>
        hotel.facilities.includes(facility)
      );
      if (!hasAllFacilities) return false;
    }

    if (selectedFilters.reviewScore.length > 0) {
      const score = parseFloat(hotel.score);
      const matches = selectedFilters.reviewScore.some((scoreLabel) => {
        const minScore = parseInt(scoreLabel.match(/\d+/)[0]);
        return score >= minScore;
      });
      if (!matches) return false;
    }

    if (selectedFilters.neighborhood.length > 0) {
      const matches = selectedFilters.neighborhood.some((n) =>
        hotel.location.toLowerCase().includes(n.toLowerCase())
      );
      if (!matches) return false;
    }

    if (selectedFilters.bedType.length > 0 && !selectedFilters.bedType.includes(hotel.bedType)) {
      return false;
    }

    return true;
  });

  const activeFilterCount = Object.values(selectedFilters).flat().length + (priceRange < 1000 ? 1 : 0);

  const [sortBy, setSortBy] = useState('recommended');

  const sortOptions = [
    { value: 'recommended', label: 'Recommended', icon: '✨' },
    { value: 'price-low', label: 'Price: Low to High', icon: '↓' },
    { value: 'price-high', label: 'Price: High to Low', icon: '↑' },
    { value: 'rating', label: 'Guest Rating', icon: '★' },
  ];

  const sortedResults = [...filteredResults].sort((a, b) => {
    if (sortBy === 'price-low') {
      return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
    }
    if (sortBy === 'price-high') {
      return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
    }
    if (sortBy === 'rating') {
      return parseFloat(b.score) - parseFloat(a.score);
    }
    return 0;
  });

  const [timeLeft, setTimeLeft] = useState(8 * 3600 + 45 * 60 + 12);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 8 * 3600 + 45 * 60 + 12;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h} : ${m} : ${s}`;
  };

  return (
    <div className="search-page">
      <Header />
      <main className="main-content">
        <div className="page-container search-container">
          <section className="search-summary" aria-label="Current search">
            <div className="summary-field summary-destination" onClick={() => setEditModal('destination')} role="button" tabIndex={0}>
              <span className="summary-icon" aria-hidden="true">⌖</span>
              <div>
                <span className="summary-label">Destination</span>
                <strong>{searchData.destination}</strong>
              </div>
              <span className="edit-icon" aria-hidden="true">✎</span>
            </div>
            <div className="summary-field" onClick={() => setEditModal('dates')} role="button" tabIndex={0}>
              <span className="summary-icon" aria-hidden="true">▣</span>
              <div>
                <span className="summary-label">Dates</span>
                <strong>{formatDate(searchData.checkIn)} - {formatDate(searchData.checkOut)}, {searchData.checkIn.getFullYear()}</strong>
              </div>
              <span className="edit-icon" aria-hidden="true">✎</span>
            </div>
            <div className="summary-field" onClick={() => setEditModal('travelers')} role="button" tabIndex={0}>
              <span className="summary-icon" aria-hidden="true">♙</span>
              <div>
                <span className="summary-label">Travelers</span>
                <strong>{searchData.adults} Adults{searchData.children > 0 ? `, ${searchData.children} Children` : ''}, {searchData.rooms} Room{searchData.rooms > 1 ? 's' : ''}</strong>
              </div>
              <span className="edit-icon" aria-hidden="true">✎</span>
            </div>
            <button type="button" className="btn btn-primary update-search-btn" onClick={() => setEditModal('all')}>
              Update Search
            </button>
          </section>

          <div className="search-results-layout">
            <aside className="search-sidebar" aria-label="Filters">
              <div className="filters-card">
                <h3 className="filters-heading">
                  <span aria-hidden="true">≡</span>
                  Filters
                </h3>

                {activeFilterCount > 0 && (
                  <div className="active-filters-bar">
                    <span>{activeFilterCount} filter{activeFilterCount > 1 ? 's' : ''} active</span>
                    <button className="clear-filters-btn" onClick={clearAllFilters}>
                      Clear all
                    </button>
                  </div>
                )}

                <section className="filter-section">
                  <h4 className="filter-title">Price Range</h4>
                  <div className="price-labels">
                    <span>$0</span>
                    <span>${priceRange}{priceRange === 1000 ? '+' : ''}</span>
                  </div>
                  <input
                    type="range"
                    className="price-slider"
                    min="0"
                    max="1000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    aria-label="Price range"
                  />
                </section>

                {filterGroups.map((group) => {
                  const categoryMap = {
                    'Property Type': 'propertyType',
                    'Star Rating': 'starRating',
                    'Facilities': 'facilities',
                    'Review Score': 'reviewScore',
                    'Neighborhood': 'neighborhood',
                    'Bed Type': 'bedType',
                  };
                  const category = categoryMap[group.title];

                  return (
                    <section className="filter-section" key={group.title}>
                      <h4 className="filter-title">{group.title}</h4>
                      <div className="filter-options">
                        {group.options.map((option) => (
                          <label className="filter-option" key={option}>
                            <input
                              type="checkbox"
                              className="filter-checkbox"
                              checked={selectedFilters[category]?.includes(option)}
                              onChange={() => toggleFilter(category, option)}
                            />
                            <span className={group.starLabels ? 'star-label' : ''}>
                              {group.starLabels ? '★★★★★'.slice(0, Number(option[0])) : option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>

              <div className="map-card" aria-label="Bali map preview">
                <button type="button" className="map-button" onClick={() => setMapOpen(true)}>View Map</button>
              </div>
            </aside>

            <section className="results-content" aria-label="Bali properties">
              <div className="results-header">
                <h1>{sortedResults.length} {sortedResults.length === 1 ? 'property' : 'properties'} in Bali</h1>
                <div className="sort-control">
                  <span>Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <section className="flash-deals" aria-label="Flash deals">
                <div className="flash-header">
                  <h2>♨ Flash Deals for You</h2>
                  <div className="flash-timer">
                    <span>Ends in:</span>
                    <strong>{formatTime(timeLeft)}</strong>
                  </div>
                </div>
                <div className="flash-list">
                  {flashDeals.map((deal) => (
                    <article className="flash-deal-card" key={deal.id}>
                      <div className="flash-image-wrap">
                        <img src={deal.image} alt={deal.name} className="flash-image" onError={handleImageError} />
                        <span className="discount-badge">{deal.discount}</span>
                      </div>
                      <div className="flash-body">
                        <div>
                          <h3>{deal.name} <span className="stars">{'★★★★★'.slice(0, deal.rating)}</span></h3>
                          <p>{deal.detail}</p>
                        </div>
                        <div className="flash-price">
                          <span className="old-price">{deal.oldPrice}</span>
                          <strong>{deal.price}</strong>
                          <span>/night</span>
                          <button type="button" className="claim-btn">Claim</button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <div className="result-list">
                {sortedResults.length === 0 ? (
                  <div className="no-results">
                    <h3>No properties found</h3>
                    <p>Try adjusting your filters to see more results.</p>
                    <button className="btn btn-primary" onClick={clearAllFilters}>
                      Clear all filters
                    </button>
                  </div>
                ) : sortedResults.map((hotel) => (
                  <article className="result-card" key={hotel.id}>
                    <div className="result-image-wrap">
                      <img src={hotel.image} alt={hotel.name} className="result-image" onError={handleImageError} />
                      {hotel.badge && <span className="choice-badge">✹ {hotel.badge}</span>}
                    </div>
                    <div className="result-info">
                      <div className="result-main">
                        <h2>{hotel.name} <span className="stars">{'★★★★★'.slice(0, hotel.rating)}</span></h2>
                        <p className="result-location">⌖ {hotel.location}</p>
                        <div className="amenity-list">
                          {hotel.amenities.map((amenity) => (
                            <span className="amenity-chip" key={amenity}>{amenity}</span>
                          ))}
                        </div>
                      </div>
                      <div className="review-badge">
                        <strong>{hotel.score} {hotel.scoreLabel}</strong>
                        <span>{hotel.reviews}</span>
                      </div>
                      <p className="result-note">{hotel.note}</p>
                      <div className="booking-column">
                        {hotel.oldPrice && <span className="old-price">{hotel.oldPrice}</span>}
                        <div><strong>{hotel.price}</strong><span>/night</span></div>
                        <button type="button" className="book-btn" onClick={() => { window.location.href = `/room/${hotel.id}`; }}>
                          Book Now
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <nav className="pagination" aria-label="Search results pages">
                <button type="button" aria-label="Previous page">‹</button>
                <button type="button" className="active">1</button>
                <button type="button">2</button>
                <button type="button">3</button>
                <span>...</span>
                <button type="button">12</button>
                <button type="button" aria-label="Next page">›</button>
              </nav>
            </section>
          </div>
        </div>
      </main>

      {editModal && (
        <div className="edit-modal-overlay" onClick={() => setEditModal(null)}>
          <div className="edit-modal" onClick={(e) => e.stopPropagation()}>
            <div className="edit-modal-header">
              <h3>
                {editModal === 'destination' && 'Edit Destination'}
                {editModal === 'dates' && 'Edit Dates'}
                {editModal === 'travelers' && 'Edit Travelers'}
                {editModal === 'all' && 'Update Search'}
              </h3>
              <button className="edit-modal-close" onClick={() => setEditModal(null)}>✕</button>
            </div>
            <div className="edit-modal-content">
              {(editModal === 'destination' || editModal === 'all') && (
                <div className="edit-field-group">
                  <label>Destination</label>
                  <input
                    type="text"
                    value={searchData.destination}
                    onChange={(e) => updateSearchData('destination', e.target.value)}
                    placeholder="Where are you going?"
                  />
                </div>
              )}
              {(editModal === 'dates' || editModal === 'all') && (
                <div className="edit-field-group">
                  <label>Check-in / Check-out</label>
                  <div className="date-inputs">
                    <div>
                      <span className="date-label">Check-in</span>
                      <input
                        type="date"
                        value={searchData.checkIn.toISOString().split('T')[0]}
                        onChange={(e) => updateSearchData('checkIn', new Date(e.target.value))}
                      />
                    </div>
                    <div>
                      <span className="date-label">Check-out</span>
                      <input
                        type="date"
                        value={searchData.checkOut.toISOString().split('T')[0]}
                        onChange={(e) => updateSearchData('checkOut', new Date(e.target.value))}
                      />
                    </div>
                  </div>
                </div>
              )}
              {(editModal === 'travelers' || editModal === 'all') && (
                <div className="edit-field-group">
                  <label>Travelers</label>
                  <div className="traveler-counters">
                    <div className="counter-row">
                      <div>
                        <strong>Adults</strong>
                        <span>Age 13+</span>
                      </div>
                      <div className="counter-btns">
                        <button type="button" onClick={() => updateSearchData('adults', Math.max(1, searchData.adults - 1))}>−</button>
                        <span>{searchData.adults}</span>
                        <button type="button" onClick={() => updateSearchData('adults', searchData.adults + 1)}>+</button>
                      </div>
                    </div>
                    <div className="counter-row">
                      <div>
                        <strong>Children</strong>
                        <span>Age 0-12</span>
                      </div>
                      <div className="counter-btns">
                        <button type="button" onClick={() => updateSearchData('children', Math.max(0, searchData.children - 1))}>−</button>
                        <span>{searchData.children}</span>
                        <button type="button" onClick={() => updateSearchData('children', searchData.children + 1)}>+</button>
                      </div>
                    </div>
                    <div className="counter-row">
                      <div>
                        <strong>Rooms</strong>
                        <span>Number of rooms</span>
                      </div>
                      <div className="counter-btns">
                        <button type="button" onClick={() => updateSearchData('rooms', Math.max(1, searchData.rooms - 1))}>−</button>
                        <span>{searchData.rooms}</span>
                        <button type="button" onClick={() => updateSearchData('rooms', searchData.rooms + 1)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <button type="button" className="btn btn-primary save-btn" onClick={handleSaveEdit}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {mapOpen && (
        <div className="map-modal-overlay" onClick={() => setMapOpen(false)}>
          <div className="map-modal" onClick={(e) => e.stopPropagation()}>
            <div className="map-modal-header">
              <h3>🗺️ Properties in Bali</h3>
              <button className="map-modal-close" onClick={() => setMapOpen(false)}>✕</button>
            </div>
            <div className="map-modal-content">
              <div className="map-container">
                <img
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80"
                  alt="Bali map"
                  className="map-image"
                />
                <div className="map-markers">
                  <div className="map-marker" style={{ top: '30%', left: '45%' }}>
                    <span className="marker-pin">📍</span>
                    <span className="marker-price">$284</span>
                  </div>
                  <div className="map-marker" style={{ top: '55%', left: '60%' }}>
                    <span className="marker-pin">📍</span>
                    <span className="marker-price">$415</span>
                  </div>
                  <div className="map-marker" style={{ top: '40%', left: '75%' }}>
                    <span className="marker-pin">📍</span>
                    <span className="marker-price">$189</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Search;
