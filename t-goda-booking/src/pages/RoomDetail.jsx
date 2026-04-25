import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './RoomDetail.css';

const galleryImages = [
  {
    src: '/mock-assets/room-main.png',
    alt: 'Infinity pool overlooking the sea'
  },
  {
    src: '/mock-assets/room-side-1.png',
    alt: 'Suite balcony at sunset'
  },
  {
    src: '/mock-assets/room-side-2.png',
    alt: 'Resort pool from above'
  },
  {
    src: '/mock-assets/room-side-3.png',
    alt: 'Outdoor resort lounge'
  },
  {
    src: '/mock-assets/room-side-4.png',
    alt: 'Stone spa corridor'
  }
];

const amenities = [
  { icon: '≋', label: '3 Outdoor Pools' },
  { icon: '✧', label: 'Full-service Spa' },
  { icon: '♨', label: '5 Restaurants' },
  { icon: '✚', label: 'Gym & Fitness' },
  { icon: '⌁', label: 'Free High-speed Wi-Fi' },
  { icon: '◒', label: 'Private Beach' }
];

const roomRows = [
  {
    name: 'Presidential Sea Front Suite',
    details: '85m2 • Panoramic Sea View • Infinity Pool Access',
    sleeps: '♙♙♙♙',
    oldPrice: '$1,295',
    price: '$862',
    options: ['Free Airport Transfer', 'All-Inclusive Premium'],
    alert: 'Only 1 room left!',
    featured: true
  },
  {
    name: 'Deluxe Garden View Room',
    details: '32m2 • Balcony • Garden View • 1 King Bed',
    sleeps: '♙♙',
    oldPrice: '$345',
    price: '$264',
    options: ['Free Cancellation', 'Breakfast Included']
  },
  {
    name: 'Junior Suite with Private Pool',
    details: '45m2 • Private Pool • Sea View • King Bed',
    sleeps: '♙♙☺',
    oldPrice: '$626',
    price: '$445',
    options: ['Free Cancellation', 'All-Inclusive'],
    alert: 'Only 2 rooms left!'
  }
];

const reviews = [
  {
    rating: '★★★★★',
    date: 'May 12, 2024',
    quote:
      'An absolute paradise. The views from the Presidential Suite are unmatched. The service was impeccable from start to finish.',
    initials: 'SM',
    name: 'Sophia Martinez',
    country: 'United Kingdom',
    tone: 'blue'
  },
  {
    rating: '★★★★☆',
    date: 'Apr 28, 2024',
    quote:
      'Excellent facilities and great breakfast selection. The private beach is beautiful, though the city center is a bit of a walk.',
    initials: 'JW',
    name: 'James Wilson',
    country: 'United States',
    tone: 'pink'
  },
  {
    rating: '★★★★★',
    date: 'Apr 15, 2024',
    quote:
      'The spa treatments were heavenly. Truly a five-star experience. We will definitely be coming back next summer.',
    initials: 'AK',
    name: 'Anna Kowalski',
    country: 'Germany',
    tone: 'orange'
  }
];

const RoomDetail = () => {
  return (
    <div className="room-detail-page">
      <Header />
      <main className="room-main">
        <div className="room-page-container">
          <nav className="room-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span>›</span>
            <Link to="/search" className="breadcrumb-link">Greece</Link>
            <span>›</span>
            <Link to="/search" className="breadcrumb-link">Crete Hotels</Link>
            <span>›</span>
            <span className="breadcrumb-current">Grand Azure Resort & Spa</span>
          </nav>

          <section className="hotel-hero">
            <div className="hotel-summary">
              <div className="hotel-stars-row">
                <span className="stars" aria-label="5 star hotel">★★★★★</span>
                <span className="resort-badge">REORT</span>
              </div>
              <h1>Grand Azure Resort & Spa, Elounda</h1>
              <div className="hotel-address">
                <span className="pin-icon">⌖</span>
                <span>Elounda Bay, Crete, 72053, Greece</span>
                <a href="#map-card">Show on map</a>
              </div>
            </div>
            <div className="hotel-actions" aria-label="Hotel actions">
              <button type="button" className="action-button">
                <span aria-hidden="true">⌯</span>
                Share
              </button>
              <button type="button" className="action-button">
                <span aria-hidden="true">♡</span>
                Save
              </button>
              <button type="button" className="book-button">Book Now</button>
            </div>
          </section>

          <section className="gallery-grid" aria-label="Grand Azure Resort photo gallery">
            <img className="gallery-main" src={galleryImages[0].src} alt={galleryImages[0].alt} />
            <div className="gallery-side">
              {galleryImages.slice(1).map((image, index) => (
                <div className="gallery-tile" key={image.alt}>
                  <img src={image.src} alt={image.alt} />
                  {index === 3 && <span className="photo-overlay">+124 photos</span>}
                </div>
              ))}
            </div>
          </section>

          <div className="detail-layout">
            <div className="detail-primary">
              <section className="overview-section">
                <h2>Overview</h2>
                <p>
                  Experience unparalleled luxury at the Grand Azure Resort & Spa, nestled on the pristine
                  shores of Elounda Bay. This architectural masterpiece blends traditional Cretan charm with
                  ultra-modern design, offering guests breathtaking panoramic views of the Mediterranean.
                  Whether you're seeking a romantic getaway or a rejuvenation retreat, our world-class
                  amenities and personalized service ensure a stay that transcends the ordinary.
                </p>
              </section>

              <section className="amenities-section" aria-labelledby="amenities-heading">
                <h2 id="amenities-heading">Popular Amenities</h2>
                <div className="amenities-grid">
                  {amenities.map((amenity) => (
                    <div className="amenity-card" key={amenity.label}>
                      <span className="amenity-symbol" aria-hidden="true">{amenity.icon}</span>
                      <span>{amenity.label}</span>
                    </div>
                  ))}
                </div>
                <button type="button" className="amenities-link">See all 45 amenities ˅</button>
              </section>
            </div>

            <aside className="detail-sidebar" aria-label="Hotel rating and location">
              <section className="score-card">
                <div className="score-header">
                  <div>
                    <h2>Excellent</h2>
                    <p>1,248 verified reviews</p>
                  </div>
                  <span className="score-badge">9.2</span>
                </div>
                {[
                  ['Cleanliness', '9.5', '95%'],
                  ['Service', '9.2', '92%'],
                  ['Location', '8.9', '89%']
                ].map(([label, score, width]) => (
                  <div className="score-row" key={label}>
                    <div>
                      <span>{label}</span>
                      <span>{score}</span>
                    </div>
                    <span className="score-track">
                      <span style={{ width }} />
                    </span>
                  </div>
                ))}
              </section>

              <section className="map-card" id="map-card">
                <div className="map-visual" aria-label="Map near Spinalonga Island">
                  <span className="map-pin pin-one">⌖</span>
                  <span className="map-pin pin-two">⌖</span>
                  <span className="map-road road-one" />
                  <span className="map-road road-two" />
                  <span className="map-label island">Spinalonga</span>
                  <span className="map-label bay">Mirabello Bay</span>
                </div>
                <div className="map-caption">
                  <h2>Near Spinalonga Island</h2>
                  <p>15 min walk to city center</p>
                </div>
              </section>
            </aside>
          </div>

          <section className="room-table-section" aria-labelledby="room-table-heading">
            <h2 id="room-table-heading">Select Your Room</h2>
            <div className="room-table">
              <div className="room-table-head">
                <span>Room Type</span>
                <span>Sleeps</span>
                <span>Today's Price</span>
                <span>Options</span>
                <span aria-hidden="true" />
              </div>
              {roomRows.map((room) => (
                <article className={`room-row ${room.featured ? 'featured' : ''}`} key={room.name}>
                  <div className="room-type">
                    <div className="room-name-line">
                      <h3>{room.name}</h3>
                      {room.featured && <span>LIMITED TIME OFFER</span>}
                    </div>
                    <p>{room.details}</p>
                    <button type="button">ⓘ Room details</button>
                  </div>
                  <div className="room-sleeps" aria-label={`${room.name} occupancy`}>{room.sleeps}</div>
                  <div className="room-price">
                    <del>{room.oldPrice}</del>
                    <strong>{room.price}</strong>
                    <span>Includes taxes & fees</span>
                  </div>
                  <div className="room-options">
                    {room.options.map((option) => (
                      <span key={option}>✓ {option}</span>
                    ))}
                    {room.alert && <strong>{room.alert}</strong>}
                  </div>
                  <button type="button" className={`select-button ${room.featured ? 'accent' : ''}`}>
                    Select
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className="guest-reviews" aria-labelledby="guest-review-heading">
            <div className="reviews-heading">
              <h2 id="guest-review-heading">Guest Reviews</h2>
              <a href="#reviews">Read all 1,248 reviews</a>
            </div>
            <div className="review-grid" id="reviews">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="review-top">
                    <span className="stars">{review.rating}</span>
                    <time>{review.date}</time>
                  </div>
                  <p>"{review.quote}"</p>
                  <div className="review-author">
                    <span className={`avatar ${review.tone}`}>{review.initials}</span>
                    <div>
                      <strong>{review.name}</strong>
                      <span>{review.country}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RoomDetail;
