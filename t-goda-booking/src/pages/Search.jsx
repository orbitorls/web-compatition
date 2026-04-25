import Header from '../components/Header';
import Footer from '../components/Footer';
import './Search.css';

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
  },
  {
    id: 5,
    name: "Tropical Paradise",
    location: "Krabi, Thailand",
    rating: 4,
    price: 2800,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Heritage Boutique",
    location: "Ayutthaya, Thailand",
    rating: 4,
    price: 2200,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop"
  }
];

const Search = () => {
  return (
    <div className="search-page">
      <Header />
      <main className="main-content">
        <div className="page-container">
          <div className="search-results-layout">
            <aside className="filters-sidebar">
              <div className="filter-section">
                <h3 className="filter-title">
                  <span className="filter-icon">≡</span>
                  Filters
                </h3>
              </div>
              
              <div className="filter-section">
                <h4 className="filter-title">Price Range</h4>
                <div className="filter-options">
                  <div className="filter-option">
                    <input type="range" className="price-slider" min="0" max="10000" value="5000" />
                    <span className="price-label">฿0 - ฿5,000</span>
                  </div>
                </div>
              </div>

              <div className="filter-section">
                <h4 className="filter-title">Property Type</h4>
                <div className="filter-options">
                  <div className="filter-option">
                    <input type="checkbox" className="filter-checkbox" id="hotel" />
                    <label htmlFor="hotel" className="filter-label">Hotel</label>
                  </div>
                  <div className="filter-option">
                    <input type="checkbox" className="filter-checkbox" id="resort" />
                    <label htmlFor="resort" className="filter-label">Resort</label>
                  </div>
                  <div className="filter-option">
                    <input type="checkbox" className="filter-checkbox" id="villa" />
                    <label htmlFor="villa" className="filter-label">Villa</label>
                  </div>
                </div>
              </div>

              <div className="filter-section">
                <h4 className="filter-title">Star Rating</h4>
                <div className="filter-options">
                  <div className="filter-option">
                    <input type="checkbox" className="filter-checkbox" id="5star" />
                    <label htmlFor="5star" className="filter-label">5 Stars</label>
                  </div>
                  <div className="filter-option">
                    <input type="checkbox" className="filter-checkbox" id="4star" />
                    <label htmlFor="4star" className="filter-label">4 Stars</label>
                  </div>
                  <div className="filter-option">
                    <input type="checkbox" className="filter-checkbox" id="3star" />
                    <label htmlFor="3star" className="filter-label">3 Stars</label>
                  </div>
                </div>
              </div>

              <div className="filter-section">
                <h4 className="filter-title">Amenities</h4>
                <div className="filter-options">
                  <div className="filter-option">
                    <input type="checkbox" className="filter-checkbox" id="wifi" />
                    <label htmlFor="wifi" className="filter-label">Free WiFi</label>
                  </div>
                  <div className="filter-option">
                    <input type="checkbox" className="filter-checkbox" id="pool" />
                    <label htmlFor="pool" className="filter-label">Pool</label>
                  </div>
                  <div className="filter-option">
                    <input type="checkbox" className="filter-checkbox" id="spa" />
                    <label htmlFor="spa" className="filter-label">Spa</label>
                  </div>
                  <div className="filter-option">
                    <input type="checkbox" className="filter-checkbox" id="parking" />
                    <label htmlFor="parking" className="filter-label">Parking</label>
                  </div>
                </div>
              </div>

              <button className="btn btn-primary filter-btn">Apply Filters</button>
            </aside>

            <div className="results-content">
              <h2 className="section-title">Search Results</h2>
              <p className="results-count">{hotels.length} hotels found</p>
              
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
