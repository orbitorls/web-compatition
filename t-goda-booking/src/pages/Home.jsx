import { useState } from 'react';
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
    badge: 'TOP RATED',
    image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=600&q=80'
  },
  {
    id: 2,
    city: 'Tokyo',
    country: 'Japan',
    price: '$250',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80'
  },
  {
    id: 3,
    city: 'Paris',
    country: 'France',
    price: '$180',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80'
  },
  {
    id: 4,
    city: 'London',
    country: 'UK',
    price: '$210',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80'
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
    <rect x="4" y="5" width="16" height="16" rx="2" />
    <path d="M8 12h2" />
    <path d="M12 12h2" />
    <path d="M8 16h2" />
    <path d="M12 16h2" />
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

const Home = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSearch = (event) => {
    event.preventDefault();
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
              <label className="home-search__field">
                <span className="sr-only">Destination</span>
                <DestinationIcon />
                <input type="text" placeholder="Where to next?" />
              </label>
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
                  placeholderText="Select dates"
                  dateFormat="MMM d"
                  className="date-picker-input"
                />
              </label>
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
              <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80" alt="" />
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
