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

const features = [
  {
    id: 1,
    title: "Best Prices Guaranteed",
    description: "We offer competitive prices on over 2 million properties worldwide",
    iconColor: "#5392F9",
    icon: "💎"
  },
  {
    id: 2,
    title: "Secure Booking",
    description: "Your payment and personal information are always protected",
    iconColor: "#FF567D",
    icon: "🔒"
  },
  {
    id: 3,
    title: "24/7 Customer Support",
    description: "Our team is available around the clock to assist you",
    iconColor: "#D47F00",
    icon: "🎧"
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
            <h1>Escape to Your Perfect Paradise</h1>
            <p>Unlock exclusive prices on over 2 million properties and flights across the globe.</p>
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
              <div className="form-group form-group-button">
                <label>&nbsp;</label>
                <button type="submit" className="btn btn-primary">Search</button>
              </div>
            </form>
          </div>
        </section>

        <div className="page-container">
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

          <section className="special-offer">
            <div className="offer-content">
              <div className="offer-text">
                <h2>Special Offer</h2>
                <p>Get 20% off on your first booking! Use code: FIRST20</p>
                <button className="btn offer-btn">Book Now</button>
              </div>
              <div className="offer-badge">
                <p className="offer-percent">20%</p>
                <p className="offer-label">OFF</p>
              </div>
            </div>
          </section>

          <section className="features-section">
            <div className="section-header">
              <h2 className="section-title">Why Choose Us</h2>
            </div>
            <div className="features-grid">
              {features.map(feature => (
                <div key={feature.id} className="feature-card" style={{'--icon-color': feature.iconColor}}>
                  <div className="feature-icon-wrapper" style={{ backgroundColor: `${feature.iconColor}20` }}>
                    <span className="feature-icon">{feature.icon}</span>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
