import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Activities.css';

const activities = [
  {
    id: 1,
    title: 'Ubud Monkey Forest & Rice Terrace Tour',
    location: 'Ubud, Bali',
    category: 'Tours',
    duration: '6 hours',
    rating: 4.8,
    reviews: '2,340',
    price: '$45',
    oldPrice: '$60',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
    badge: 'Best Seller',
  },
  {
    id: 2,
    title: 'Sunrise at Mount Batur Trekking',
    location: 'Mount Batur, Bali',
    category: 'Adventure',
    duration: '8 hours',
    rating: 4.9,
    reviews: '1,890',
    price: '$55',
    oldPrice: '$75',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
    badge: 'Top Rated',
  },
  {
    id: 3,
    title: 'Bali Swing & Waterfall Instagram Tour',
    location: 'Ubud, Bali',
    category: 'Tours',
    duration: '5 hours',
    rating: 4.6,
    reviews: '3,120',
    price: '$35',
    oldPrice: '$50',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80',
  },
  {
    id: 4,
    title: 'Traditional Balinese Cooking Class',
    location: 'Ubud, Bali',
    category: 'Cultural',
    duration: '4 hours',
    rating: 4.7,
    reviews: '980',
    price: '$40',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80',
  },
  {
    id: 5,
    title: 'Nusa Penida Island Day Trip',
    location: 'Nusa Penida, Bali',
    category: 'Day Trips',
    duration: '10 hours',
    rating: 4.5,
    reviews: '1,450',
    price: '$65',
    oldPrice: '$85',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80',
  },
  {
    id: 6,
    title: 'Balinese Spa & Wellness Retreat',
    location: 'Seminyak, Bali',
    category: 'Wellness',
    duration: '3 hours',
    rating: 4.8,
    reviews: '2,670',
    price: '$50',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
  },
];

const categories = ['All', 'Tours', 'Adventure', 'Cultural', 'Day Trips', 'Wellness'];

const Activities = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [destination, setDestination] = useState('Bali, Indonesia');
  const [date, setDate] = useState('2024-10-12');
  const [sortBy, setSortBy] = useState('recommended');

  const filtered = activeCategory === 'All'
    ? activities
    : activities.filter((a) => a.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return parseInt(a.price.slice(1)) - parseInt(b.price.slice(1));
    if (sortBy === 'price-high') return parseInt(b.price.slice(1)) - parseInt(a.price.slice(1));
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="activities-page">
      <Header />
      <main className="main-content">
        <div className="page-container activities-container">
          <section className="activities-hero">
            <h1>Discover Amazing Activities</h1>
            <p>Explore tours, adventures, and experiences in your destination</p>
          </section>

          <section className="activities-search-form">
            <div className="activities-fields">
              <div className="activity-field">
                <label>Destination</label>
                <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
              </div>
              <div className="activity-field">
                <label>Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <button className="btn btn-primary search-activities-btn">Search Activities</button>
            </div>
          </section>

          <div className="activities-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="activities-sort-bar">
            <span>{sorted.length} activities found</span>
            <div className="activities-sort">
              <span>Sort by:</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          <div className="activities-grid">
            {sorted.map((activity) => (
              <article className="activity-card" key={activity.id}>
                <div className="activity-image-wrap">
                  <img src={activity.image} alt={activity.title} className="activity-image" />
                  {activity.badge && <span className="activity-badge">{activity.badge}</span>}
                  <span className="activity-category-tag">{activity.category}</span>
                </div>
                <div className="activity-info">
                  <h3>{activity.title}</h3>
                  <p className="activity-location">📍 {activity.location}</p>
                  <div className="activity-meta">
                    <span className="activity-rating">
                      ★ {activity.rating} ({activity.reviews} reviews)
                    </span>
                    <span className="activity-duration">⏱ {activity.duration}</span>
                  </div>
                  <div className="activity-footer">
                    <div className="activity-price">
                      {activity.oldPrice && <span className="old-price">{activity.oldPrice}</span>}
                      <strong>{activity.price}</strong>
                      <span>/person</span>
                    </div>
                    <button className="btn btn-primary activity-book-btn">Book Now</button>
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

export default Activities;
