import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Home.css';

const destinations = [
  {
    id: 1,
    city: 'Bangkok',
    country: 'Thailand',
    price: '$120',
    count: '11,909',
    badge: 'TOP RATED',
    image: '/mock-assets/dest-bangkok.png'
  },
  {
    id: 2,
    city: 'Phuket',
    country: 'Thailand',
    price: '$180',
    count: '8,452',
    image: '/mock-assets/deal-2.png'
  },
  {
    id: 3,
    city: 'Chiang Mai',
    country: 'Thailand',
    price: '$95',
    count: '5,566',
    image: '/mock-assets/result-palms.png'
  },
  {
    id: 4,
    city: 'Pattaya',
    country: 'Thailand',
    price: '$85',
    count: '6,890',
    image: '/mock-assets/deal-3.png'
  }
];

const features = [
  {
    id: 1,
    title: 'Best Price Guarantee',
    description: "Find a lower price? We'll match it and give you a voucher for your next trip.",
    tone: 'blue',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 12.5 12.5 20a2.1 2.1 0 0 1-3 0L3 13.5V4h9.5L20 11.5a.7.7 0 0 1 0 1Z" />
        <path d="M7.5 7.5h.01" />
      </svg>
    )
  },
  {
    id: 2,
    title: '24/7 Global Support',
    description: 'Our world-class support team is here to help you anywhere, anytime in 40+ languages.',
    tone: 'pink',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 13a8 8 0 0 1 16 0" />
        <path d="M4 13v3a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2Z" />
        <path d="M20 13v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z" />
        <path d="M15 19a3 3 0 0 1-3 2h-1" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Flexible Booking',
    description: 'Life happens. Most of our properties offer free cancellation for peace of mind.',
    tone: 'gold',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3v4" />
        <path d="M17 3v4" />
        <path d="M4 8h16" />
        <path d="M5 5h14a1 1 0 0 1 1 1v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1Z" />
        <path d="M15 13h5" />
        <path d="M17.5 10.5v5" />
      </svg>
    )
  }
];

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m16.5 16.5 4 4" />
  </svg>
);

const DestinationIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m16.5 16.5 4 4" />
    <path d="M8.5 8.5 14 10l1.5 5.5-4-2-3 3 2-4-2-4Z" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 3v4" />
    <path d="M17 3v4" />
    <path d="M4 8h16" />
    <rect x="3" y="8" width="18" height="13" rx="2" />
    <path d="M4 12h16" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="8" r="5" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const TagArt = () => (
  <svg className="sale-tag-art" viewBox="0 0 260 260" aria-hidden="true">
    <path d="M26 0h128l106 106v128a26 26 0 0 1-26 26H106L0 154V26A26 26 0 0 1 26 0Z" />
    <circle cx="59" cy="58" r="18" />
    <path d="M114 116c-20-20-54 2-40 29 8 16 42 39 50 47 8-8 42-31 50-47 14-27-20-49-40-29l-10 10-10-10Z" />
  </svg>
);

const destinationSuggestions = [
  { name: 'Bali, Indonesia', count: '12,048', image: '/mock-assets/deal-1.png' },
  { name: 'Bangkok, Thailand', count: '11,909', image: '/mock-assets/dest-bangkok.png' },
  { name: 'Phuket, Thailand', count: '8,452', image: '/mock-assets/deal-2.png' },
  { name: 'Tokyo, Japan', count: '10,018', image: '/mock-assets/dest-tokyo.png' },
  { name: 'Seoul, South Korea', count: '9,245', image: '/mock-assets/result-azure.png' },
  { name: 'Singapore', count: '7,193', image: '/mock-assets/result-lumina.png' },
  { name: 'Chiang Mai, Thailand', count: '5,566', image: '/mock-assets/result-palms.png' },
  { name: 'Kuala Lumpur, Malaysia', count: '6,890', image: '/mock-assets/deal-3.png' },
];

const Home = () => {
  const [destination, setDestination] = useState('');
  const [showDestDropdown, setShowDestDropdown] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const destRef = useRef(null);
  const guestRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (destRef.current && !destRef.current.contains(e.target)) {
        setShowDestDropdown(false);
      }
      if (guestRef.current && !guestRef.current.contains(e.target)) {
        setShowGuestDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredDestinations = destinationSuggestions.filter((d) =>
    d.name.toLowerCase().includes(destination.toLowerCase())
  );

  const handleSearch = (event) => {
    event.preventDefault();
    const searchData = {
      destination: destination || 'Bali, Indonesia',
      checkIn: startDate ? startDate.toISOString() : new Date('2024-10-12').toISOString(),
      checkOut: endDate ? endDate.toISOString() : new Date('2024-10-19').toISOString(),
      adults,
      children,
      rooms,
    };
    localStorage.setItem('searchData', JSON.stringify(searchData));
    window.location.href = '/search';
  };

  return (
    <div className="home-page">
      <Header />
      <main className="main-content home-main">
        <section className="home-hero" aria-labelledby="hero-title">
          <div className="home-hero__content">
            <h1 id="hero-title">Escape to Your Perfect Paradise</h1>
            <p>Unlock exclusive prices on over 2 million properties and flights across the globe.</p>
            <form className="home-search" onSubmit={handleSearch}>
              <div className="home-search__field dest-field" ref={destRef}>
                <span className="sr-only">Destination</span>
                <DestinationIcon />
                <input
                  type="text"
                  placeholder="Where to next?"
                  value={destination}
                  onChange={(e) => {
                    setDestination(e.target.value);
                    setShowDestDropdown(true);
                  }}
                  onFocus={() => setShowDestDropdown(true)}
                  autoComplete="off"
                />
                {showDestDropdown && (
                  <div className="dest-dropdown">
                    <div className="dest-dropdown-header">
                      <span>Popular Destinations</span>
                    </div>
                    {filteredDestinations.length === 0 ? (
                      <div className="dest-no-results">No destinations found</div>
                    ) : (
                      filteredDestinations.map((d) => (
                        <button
                          type="button"
                          key={d.name}
                          className="dest-option"
                          onClick={() => {
                            setDestination(d.name);
                            setShowDestDropdown(false);
                          }}
                        >
                          <img src={d.image} alt={d.name} className="dest-option-img" />
                          <div className="dest-option-info">
                            <strong>{d.name}</strong>
                            <span>{d.count} properties</span>
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
              <label className="home-search__field date-field">
                <span className="sr-only">Date range</span>
                <CalendarIcon />
                <DatePicker
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update) => {
                    const [start, end] = update;
                    setStartDate(start);
                    setEndDate(end);
                  }}
                  isClearable={false}
                  dateFormat="MMM d"
                  placeholderText="Oct 12 - Oct 19"
                  className="home-search__date-picker"
                />
              </label>
              <div className="home-search__field guest-field" ref={guestRef}>
                <span className="sr-only">Travelers</span>
                <UserIcon />
                <button
                  type="button"
                  className="guest-trigger"
                  onClick={() => setShowGuestDropdown(!showGuestDropdown)}
                >
                  {adults} Adults{children > 0 ? `, ${children} Children` : ''}, {rooms} Room{rooms > 1 ? 's' : ''}
                </button>
                {showGuestDropdown && (
                  <div className="guest-dropdown">
                    <div className="guest-row">
                      <div>
                        <strong>Adults</strong>
                        <span>Age 13+</span>
                      </div>
                      <div className="guest-counter">
                        <button type="button" onClick={() => setAdults(Math.max(1, adults - 1))}>−</button>
                        <span>{adults}</span>
                        <button type="button" onClick={() => setAdults(adults + 1)}>+</button>
                      </div>
                    </div>
                    <div className="guest-row">
                      <div>
                        <strong>Children</strong>
                        <span>Age 0-12</span>
                      </div>
                      <div className="guest-counter">
                        <button type="button" onClick={() => setChildren(Math.max(0, children - 1))}>−</button>
                        <span>{children}</span>
                        <button type="button" onClick={() => setChildren(children + 1)}>+</button>
                      </div>
                    </div>
                    <div className="guest-row">
                      <div>
                        <strong>Rooms</strong>
                        <span>Number of rooms</span>
                      </div>
                      <div className="guest-counter">
                        <button type="button" onClick={() => setRooms(Math.max(1, rooms - 1))}>−</button>
                        <span>{rooms}</span>
                        <button type="button" onClick={() => setRooms(rooms + 1)}>+</button>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="guest-done-btn"
                      onClick={() => setShowGuestDropdown(false)}
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>
              <button type="submit" className="home-search__button">
                <SearchIcon />
                <span>Search</span>
              </button>
            </form>
          </div>
        </section>

        <div className="home-shell">
          <section className="feature-grid" aria-label="T-Goda travel benefits">
            {features.map((feature) => (
              <article key={feature.id} className="feature-card">
                <div className={`feature-card__icon feature-card__icon--${feature.tone}`}>{feature.icon}</div>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </article>
            ))}
          </section>

          <section className="destinations" aria-labelledby="destinations-title">
            <div className="section-heading">
              <div>
                <h2 id="destinations-title">Trending Destinations</h2>
                <p>Handpicked favorites for your next adventure</p>
              </div>
              <a href="/search">View all</a>
            </div>
            <div className="destination-grid">
              {destinations.map((destination) => (
                <article
                  key={destination.id}
                  className="destination-card"
                  onClick={() => {
                    window.location.href = `/search?destination=${destination.city}`;
                  }}
                >
                  <div className="destination-card__image">
                    <img src={destination.image} alt={`${destination.city}, ${destination.country}`} />
                    {destination.badge && <span>{destination.badge}</span>}
                  </div>
                  <h3>{destination.city}, {destination.country}</h3>
                  <p>{destination.count} properties</p>
                  <p>Starting from <strong>{destination.price}</strong></p>
                </article>
              ))}
            </div>
          </section>

          <section className="summer-sale" aria-labelledby="summer-sale-title">
            <TagArt />
            <div className="summer-sale__copy">
              <h2 id="summer-sale-title">Summer Sales: Up to 40% Off!</h2>
              <p>Exclusive member deals on flights and luxury hotels for your next summer getaway. Valid until Oct 31st.</p>
              <div className="summer-sale__actions">
                <a className="sale-button sale-button--primary" href="/search">Explore Deals</a>
                <a className="sale-button sale-button--outline" href="/signup">Join Club T-Goda</a>
              </div>
            </div>
            <div className="summer-sale__image" aria-hidden="true">
              <img src="/mock-assets/offer-pool.png" alt="" />
            </div>
          </section>

          <section className="newsletter" aria-labelledby="newsletter-title">
            <div className="newsletter__icon"><MailIcon /></div>
            <h2 id="newsletter-title">Get Travel Deals Directly</h2>
            <p>Subscribe to our newsletter and get early access to hidden gems and seasonal discounts. No spam, only adventure.</p>
            <form className="newsletter__form">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input id="newsletter-email" type="email" placeholder="Your email address" />
              <button type="submit">Subscribe Now</button>
            </form>
            <small>By subscribing, you agree to our Terms of Service and Privacy Policy.</small>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
