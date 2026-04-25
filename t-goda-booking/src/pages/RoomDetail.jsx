import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './RoomDetail.css';

const hotels = [
  {
    id: 1,
    name: "Grand Plaza Hotel",
    location: "Bangkok, Thailand",
    rating: 5,
    price: 2500,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Gym", "Parking"]
  },
  {
    id: 2,
    name: "Seaside Resort",
    location: "Phuket, Thailand",
    rating: 4,
    price: 3200,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
    amenities: ["Beach Access", "Pool", "Restaurant", "Bar", "WiFi"]
  },
  {
    id: 3,
    name: "Mountain View Lodge",
    location: "Chiang Mai, Thailand",
    rating: 4,
    price: 1800,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
    amenities: ["Mountain View", "Restaurant", "WiFi", "Parking"]
  },
  {
    id: 4,
    name: "City Center Suites",
    location: "Bangkok, Thailand",
    rating: 5,
    price: 4500,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
    amenities: ["City Center", "Pool", "Spa", "Gym", "Restaurant", "WiFi"]
  },
  {
    id: 5,
    name: "Tropical Paradise",
    location: "Krabi, Thailand",
    rating: 4,
    price: 2800,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    amenities: ["Beach", "Pool", "Restaurant", "Bar", "WiFi"]
  },
  {
    id: 6,
    name: "Heritage Boutique",
    location: "Ayutthaya, Thailand",
    rating: 4,
    price: 2200,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
    amenities: ["Historic", "Restaurant", "WiFi", "Parking"]
  }
];

const RoomDetail = () => {
  const { id } = useParams();
  const hotel = hotels.find(h => h.id === parseInt(id)) || hotels[0];

  return (
    <div className="room-detail-page">
      <Header />
      <main className="main-content">
        <div className="page-container">
          <nav className="breadcrumb">
            <a href="/" className="breadcrumb-item">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/search" className="breadcrumb-item">Search</a>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-item active">{hotel.name}</span>
          </nav>

          <div className="room-detail-header">
            <h1 className="room-name">{hotel.name}</h1>
            <p className="room-location">📍 {hotel.location}</p>
            <div className="room-rating">
              <span className="rating-badge">{hotel.rating}.0</span>
              <div className="hotel-rating">
                {Array(hotel.rating).fill(<span className="star">★</span>)}
              </div>
              <span className="review-count">(128 reviews)</span>
            </div>
          </div>

          <div className="room-images">
            <img src={hotel.image} alt={hotel.name} className="room-image-main" />
            <div className="room-images-side">
              <img src={hotel.image} alt={hotel.name} className="room-image-side-img" />
              <img src={hotel.image} alt={hotel.name} className="room-image-side-img" />
            </div>
          </div>

          <div className="room-details">
            <h2 className="section-title">About This Hotel</h2>
            <p className="room-description">
              Experience luxury and comfort at {hotel.name}. Our hotel offers stunning views, 
              world-class amenities, and exceptional service to make your stay unforgettable. 
              Perfect for both business travelers and vacationers seeking a memorable experience.
            </p>

            <h2 className="section-title">Amenities</h2>
            <div className="amenities-list">
              {hotel.amenities.map((amenity, index) => (
                <div key={index} className="amenity-item">
                  <span className="amenity-icon">✓</span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="booking-section">
            <div className="booking-info">
              <p className="price-label">Price per night</p>
              <p className="hotel-price">฿{hotel.price.toLocaleString()} <span>/ night</span></p>
            </div>
            <div className="booking-buttons">
              <button className="btn btn-secondary">Contact</button>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RoomDetail;
