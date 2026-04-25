import { useState } from 'react';
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

const results = [
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
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80',
  },
];

const Search = () => {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <div className="search-page">
      <Header />
      <main className="main-content">
        <div className="page-container search-container">
          <section className="search-summary" aria-label="Current search">
            <div className="summary-field summary-destination">
              <span className="summary-icon" aria-hidden="true">⌖</span>
              <div>
                <span className="summary-label">Destination</span>
                <strong>Bali, Indonesia</strong>
              </div>
            </div>
            <div className="summary-field">
              <span className="summary-icon" aria-hidden="true">▣</span>
              <div>
                <span className="summary-label">Dates</span>
                <strong>Oct 12 - Oct 19, 2024</strong>
              </div>
            </div>
            <div className="summary-field">
              <span className="summary-icon" aria-hidden="true">♙</span>
              <div>
                <span className="summary-label">Travelers</span>
                <strong>2 Adults, 1 Room</strong>
              </div>
            </div>
            <button type="button" className="btn btn-primary update-search-btn">Update Search</button>
          </section>

          <div className="search-results-layout">
            <aside className="search-sidebar" aria-label="Filters">
              <div className="filters-card">
                <h3 className="filters-heading">
                  <span aria-hidden="true">≡</span>
                  Filters
                </h3>

                <section className="filter-section">
                  <h4 className="filter-title">Price Range</h4>
                  <div className="price-labels">
                    <span>$0</span>
                    <span>$1000+</span>
                  </div>
                  <input type="range" className="price-slider" min="0" max="1000" defaultValue="720" aria-label="Price range" />
                </section>

                {filterGroups.map((group) => (
                  <section className="filter-section" key={group.title}>
                    <h4 className="filter-title">{group.title}</h4>
                    <div className="filter-options">
                      {group.options.map((option) => (
                        <label className="filter-option" key={option}>
                          <input type="checkbox" className="filter-checkbox" />
                          <span className={group.starLabels ? 'star-label' : ''}>
                            {group.starLabels ? '★★★★★'.slice(0, Number(option[0])) : option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <div className="map-card" aria-label="Bali map preview">
                <button type="button" className="map-button" onClick={() => setMapOpen(true)}>View on Map</button>
              </div>
            </aside>

            <section className="results-content" aria-label="Bali properties">
              <div className="results-header">
                <h1>245 properties in Bali</h1>
                <label className="sort-control">
                  <span>Sort by:</span>
                  <select defaultValue="recommended">
                    <option value="recommended">Recommended</option>
                    <option value="price-low">Price low to high</option>
                    <option value="rating">Guest rating</option>
                  </select>
                </label>
              </div>

              <section className="flash-deals" aria-label="Flash deals">
                <div className="flash-header">
                  <h2>♨ Flash Deals for You</h2>
                  <div className="flash-timer">
                    <span>Ends in:</span>
                    <strong>08 : 45 : 12</strong>
                  </div>
                </div>
                <div className="flash-list">
                  {flashDeals.map((deal) => (
                    <article className="flash-deal-card" key={deal.id}>
                      <div className="flash-image-wrap">
                        <img src={deal.image} alt={deal.name} className="flash-image" />
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
                {results.map((hotel) => (
                  <article className="result-card" key={hotel.id}>
                    <div className="result-image-wrap">
                      <img src={hotel.image} alt={hotel.name} className="result-image" />
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
