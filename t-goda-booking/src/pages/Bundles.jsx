import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Bundles.css';

const bundles = [
  {
    id: 1,
    title: 'Bali Beach Escape',
    hotel: 'Seminyak Shores Club',
    hotelRating: 5,
    flight: 'Round-trip from Bangkok',
    airline: 'Thai Airways',
    duration: '5 Days / 4 Nights',
    includes: ['Hotel', 'Flights', 'Airport Transfer', 'Breakfast'],
    price: '$890',
    oldPrice: '$1,200',
    savings: '$310',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
    badge: 'Best Seller',
  },
  {
    id: 2,
    title: 'Ubud Cultural Retreat',
    hotel: 'The Azure Serenity Resort',
    hotelRating: 5,
    flight: 'Round-trip from Bangkok',
    airline: 'Singapore Airlines',
    duration: '7 Days / 6 Nights',
    includes: ['Hotel', 'Flights', 'Daily Tours', 'All Meals'],
    price: '$1,450',
    oldPrice: '$1,850',
    savings: '$400',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80',
    badge: 'Top Rated',
  },
  {
    id: 3,
    title: 'Nusa Dua Family Package',
    hotel: 'The Palms Sanctuary',
    hotelRating: 4,
    flight: 'Round-trip from Bangkok',
    airline: 'AirAsia',
    duration: '4 Days / 3 Nights',
    includes: ['Hotel', 'Flights', 'Kids Club', 'Spa Credit'],
    price: '$680',
    oldPrice: '$920',
    savings: '$240',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80',
    badge: 'Family Pick',
  },
  {
    id: 4,
    title: 'Uluwatu Luxury Villa',
    hotel: 'Sunset Cliff Resort',
    hotelRating: 5,
    flight: 'Round-trip from Bangkok',
    airline: 'Emirates',
    duration: '6 Days / 5 Nights',
    includes: ['Private Villa', 'Flights', 'Butler Service', 'Private Pool'],
    price: '$2,200',
    oldPrice: '$2,800',
    savings: '$600',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80',
  },
  {
    id: 5,
    title: 'Kuta Budget Break',
    hotel: 'Ocean Breeze Hotel',
    hotelRating: 3,
    flight: 'Round-trip from Bangkok',
    airline: 'AirAsia',
    duration: '3 Days / 2 Nights',
    includes: ['Hotel', 'Flights', 'Free Wi-Fi'],
    price: '$320',
    oldPrice: '$450',
    savings: '$130',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  },
];

const Bundles = () => {
  const [destination, setDestination] = useState('Bali, Indonesia');
  const [departDate, setDepartDate] = useState('2024-10-12');
  const [returnDate, setReturnDate] = useState('2024-10-19');
  const [passengers, setPassengers] = useState(2);
  const [sortBy, setSortBy] = useState('savings');

  const sortedBundles = [...bundles].sort((a, b) => {
    if (sortBy === 'price-low') return parseInt(a.price.slice(1)) - parseInt(b.price.slice(1));
    if (sortBy === 'price-high') return parseInt(b.price.slice(1)) - parseInt(a.price.slice(1));
    if (sortBy === 'savings') return parseInt(b.savings.slice(1)) - parseInt(a.savings.slice(1));
    return 0;
  });

  return (
    <div className="bundles-page">
      <Header />
      <main className="main-content">
        <div className="page-container bundles-container">
          <section className="bundles-hero">
            <h1>Hotel + Flight Packages</h1>
            <p>Save more when you book together</p>
          </section>

          <section className="bundle-search-form">
            <div className="bundle-fields">
              <div className="bundle-field">
                <label>Destination</label>
                <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
              </div>
              <div className="bundle-field">
                <label>Check-in</label>
                <input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} />
              </div>
              <div className="bundle-field">
                <label>Check-out</label>
                <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
              </div>
              <div className="bundle-field">
                <label>Passengers</label>
                <div className="passenger-counter">
                  <button onClick={() => setPassengers(Math.max(1, passengers - 1))}>−</button>
                  <span>{passengers}</span>
                  <button onClick={() => setPassengers(passengers + 1)}>+</button>
                </div>
              </div>
              <button className="btn btn-primary search-bundles-btn">Search Packages</button>
            </div>
          </section>

          <div className="bundles-sort-bar">
            <span>{sortedBundles.length} packages found</span>
            <div className="bundles-sort">
              <span>Sort by:</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="savings">Biggest Savings</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="bundles-list">
            {sortedBundles.map((bundle) => (
              <article className="bundle-card" key={bundle.id}>
                <div className="bundle-image-wrap">
                  <img src={bundle.image} alt={bundle.title} className="bundle-image" />
                  {bundle.badge && <span className="bundle-badge">{bundle.badge}</span>}
                  <div className="bundle-savings">Save {bundle.savings}</div>
                </div>
                <div className="bundle-info">
                  <div className="bundle-header">
                    <h3>{bundle.title}</h3>
                    <div className="bundle-hotel">
                      <span className="stars">{'★'.repeat(bundle.hotelRating)}</span>
                      <span>{bundle.hotel}</span>
                    </div>
                  </div>
                  <div className="bundle-details">
                    <div className="bundle-detail">
                      <span className="detail-icon">✈️</span>
                      <div>
                        <strong>{bundle.flight}</strong>
                        <span>{bundle.airline}</span>
                      </div>
                    </div>
                    <div className="bundle-detail">
                      <span className="detail-icon">🗓️</span>
                      <div>
                        <strong>{bundle.duration}</strong>
                        <span>Duration</span>
                      </div>
                    </div>
                  </div>
                  <div className="bundle-includes">
                    {bundle.includes.map((item) => (
                      <span className="include-tag" key={item}>✓ {item}</span>
                    ))}
                  </div>
                  <div className="bundle-booking">
                    <div className="bundle-price">
                      <span className="old-price">{bundle.oldPrice}</span>
                      <strong>{bundle.price}</strong>
                      <span>per person</span>
                    </div>
                    <button className="btn btn-primary bundle-book-btn">Book Package</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bundles;
