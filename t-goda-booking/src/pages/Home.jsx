import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

const hotels = [
  {
    id: 1,
    name: "Grand Plaza Hotel",
    location: "Bangkok, Thailand",
    rating: 5,
    price: 2500,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Seaside Resort",
    location: "Phuket, Thailand",
    rating: 4,
    price: 3200,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Mountain View Lodge",
    location: "Chiang Mai, Thailand",
    rating: 4,
    price: 1800,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "City Center Suites",
    location: "Bangkok, Thailand",
    rating: 5,
    price: 4500,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop"
  }
];

const HotelIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const PriceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12" y2="18.01"/>
  </svg>
);

const featureIcons = {
  hotel: <HotelIcon />,
  price: <PriceIcon />,
  phone: <PhoneIcon />
};

const features = [
  {
    id: 1,
    title: "Verified Hotels",
    description: "All our hotels are carefully verified for quality and comfort",
    iconColor: "#5392F9",
    iconKey: "hotel"
  },
  {
    id: 2,
    title: "Best Price",
    description: "We guarantee the best prices for your perfect stay",
    iconColor: "#FF567D",
    iconKey: "price"
  },
  {
    id: 3,
    title: "Easy Booking",
    description: "Book your dream hotel in just a few simple steps",
    iconColor: "#D47F00",
    iconKey: "phone"
  }
];

const Home = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    window.location.href = '/search';
  };

  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to T-Goda</h1>
            <p>Find your perfect stay with unbeatable prices</p>
            <form className="search-form" onSubmit={handleSearch}>
              <div className="form-group">
                <label>Destination</label>
                <input type="text" className="form-input" placeholder="Where to next?" />
              </div>
              <div className="form-group">
                <label>Check-in</label>
                <input type="date" className="form-input" />
              </div>
              <div className="form-group">
                <label>Check-out</label>
                <input type="date" className="form-input" />
              </div>
              <div className="form-group">
                <label>Guests</label>
                <select className="form-input">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
              <div className="form-group-button">
                <button type="submit" className="btn btn-primary">Search</button>
              </div>
            </form>
          </div>
        </section>

        <div className="page-container">
          <section className="features-section">
            <div className="section-header">
              <h2 className="section-title">Why Choose Us</h2>
            </div>
            <div className="features-grid">
              {features.map(feature => (
                <div key={feature.id} className="feature-card" style={{'--icon-color': feature.iconColor}}>
                  <div className="feature-icon-wrapper" style={{backgroundColor: feature.iconColor + '20', color: feature.iconColor}}>
                    {featureIcons[feature.iconKey]}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="destinations-section">
            <div className="section-header">
              <h2 className="section-title">Trending Destinations</h2>
              <p className="section-subtitle">Explore our most popular destinations</p>
            </div>
            <div className="hotel-grid">
            {hotels.map(hotel => (
              <div key={hotel.id} className="hotel-card" onClick={() => window.location.href = `/room/${hotel.id}`}>
                <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                <div className="hotel-card-content">
                  <h3 className="hotel-name">{hotel.name}</h3>
                  <p className="hotel-location">📍 {hotel.location}</p>
                  <div className="hotel-rating">
                    {Array(hotel.rating).fill(<span className="star">★</span>)}
                  </div>
                  <p className="hotel-price">฿{hotel.price.toLocaleString()} <span>/ night</span></p>
                </div>
              </div>
            ))}
            </div>
          </section>

          <section className="special-offer">
            <div className="offer-content">
              <div className="offer-text">
                <h2>Special Offer</h2>
                <p>Get 40% off on your first booking! Use code: FIRST20</p>
                <button className="btn offer-btn">Book Now</button>
              </div>
              <div className="offer-badge">
                <p className="offer-percent">40%</p>
                <p className="offer-label">OFF</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
