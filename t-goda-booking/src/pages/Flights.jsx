import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Flights.css';

const flightDeals = [
  {
    id: 1,
    airline: 'Singapore Airlines',
    logo: '✈️',
    from: 'BKK',
    to: 'DPS',
    depTime: '08:30',
    arrTime: '13:45',
    duration: '5h 15m',
    direct: true,
    price: '$245',
    oldPrice: '$320',
    date: 'Oct 12, 2024',
    class: 'Economy',
  },
  {
    id: 2,
    airline: 'Thai Airways',
    logo: '✈️',
    from: 'BKK',
    to: 'DPS',
    depTime: '10:15',
    arrTime: '15:30',
    duration: '5h 15m',
    direct: true,
    price: '$198',
    oldPrice: '$280',
    date: 'Oct 12, 2024',
    class: 'Economy',
  },
  {
    id: 3,
    airline: 'Garuda Indonesia',
    logo: '✈️',
    from: 'BKK',
    to: 'DPS',
    depTime: '14:00',
    arrTime: '20:20',
    duration: '6h 20m',
    direct: false,
    stops: '1 stop CGK',
    price: '$175',
    date: 'Oct 12, 2024',
    class: 'Economy',
  },
  {
    id: 4,
    airline: 'AirAsia',
    logo: '✈️',
    from: 'BKK',
    to: 'DPS',
    depTime: '06:00',
    arrTime: '11:10',
    duration: '5h 10m',
    direct: true,
    price: '$128',
    oldPrice: '$185',
    date: 'Oct 12, 2024',
    class: 'Economy',
  },
  {
    id: 5,
    airline: 'Emirates',
    logo: '✈️',
    from: 'BKK',
    to: 'DPS',
    depTime: '23:55',
    arrTime: '12:30+1',
    duration: '12h 35m',
    direct: false,
    stops: '1 stop DXB',
    price: '$520',
    oldPrice: '$680',
    date: 'Oct 12, 2024',
    class: 'Business',
  },
];

const Flights = () => {
  const [fromCity, setFromCity] = useState('Bangkok (BKK)');
  const [toCity, setToCity] = useState('Bali/Denpasar (DPS)');
  const [departDate, setDepartDate] = useState('2024-10-12');
  const [returnDate, setReturnDate] = useState('2024-10-19');
  const [passengers, setPassengers] = useState(2);
  const [tripType, setTripType] = useState('roundtrip');
  const [sortBy, setSortBy] = useState('recommended');
  const [filterDirect, setFilterDirect] = useState(false);

  const filteredFlights = flightDeals.filter((f) => {
    if (filterDirect && !f.direct) return false;
    return true;
  });

  const sortedFlights = [...filteredFlights].sort((a, b) => {
    if (sortBy === 'price-low') return parseInt(a.price.slice(1)) - parseInt(b.price.slice(1));
    if (sortBy === 'price-high') return parseInt(b.price.slice(1)) - parseInt(a.price.slice(1));
    if (sortBy === 'duration') {
      const getMinutes = (d) => {
        const [h, m] = d.replace('h ', ':').replace('m', '').split(':').map(Number);
        return h * 60 + m;
      };
      return getMinutes(a.duration) - getMinutes(b.duration);
    }
    return 0;
  });

  return (
    <div className="flights-page">
      <Header />
      <main className="main-content">
        <div className="page-container flights-container">
          <section className="flights-hero">
            <h1>Find the Best Flights</h1>
            <p>Compare prices and book your perfect flight</p>
          </section>

          <section className="flight-search-form">
            <div className="trip-type-toggle">
              <button className={tripType === 'roundtrip' ? 'active' : ''} onClick={() => setTripType('roundtrip')}>Round Trip</button>
              <button className={tripType === 'oneway' ? 'active' : ''} onClick={() => setTripType('oneway')}>One Way</button>
              <button className={tripType === 'multicity' ? 'active' : ''} onClick={() => setTripType('multicity')}>Multi City</button>
            </div>
            <div className="flight-fields">
              <div className="flight-field">
                <label>From</label>
                <input type="text" value={fromCity} onChange={(e) => setFromCity(e.target.value)} />
              </div>
              <div className="flight-field">
                <label>To</label>
                <input type="text" value={toCity} onChange={(e) => setToCity(e.target.value)} />
              </div>
              <div className="flight-field">
                <label>Depart</label>
                <input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} />
              </div>
              {tripType === 'roundtrip' && (
                <div className="flight-field">
                  <label>Return</label>
                  <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
                </div>
              )}
              <div className="flight-field passengers-field">
                <label>Passengers</label>
                <div className="passenger-counter">
                  <button onClick={() => setPassengers(Math.max(1, passengers - 1))}>−</button>
                  <span>{passengers}</span>
                  <button onClick={() => setPassengers(passengers + 1)}>+</button>
                </div>
              </div>
              <button className="btn btn-primary search-flights-btn">Search Flights</button>
            </div>
          </section>

          <div className="flights-layout">
            <aside className="flights-sidebar">
              <div className="filter-card">
                <h3>Filters</h3>
                <div className="filter-group">
                  <label className="filter-check">
                    <input type="checkbox" checked={filterDirect} onChange={() => setFilterDirect(!filterDirect)} />
                    <span>Direct flights only</span>
                  </label>
                </div>
                <div className="filter-group">
                  <h4>Airlines</h4>
                  {['Singapore Airlines', 'Thai Airways', 'Garuda Indonesia', 'AirAsia', 'Emirates'].map((airline) => (
                    <label className="filter-check" key={airline}>
                      <input type="checkbox" defaultChecked />
                      <span>{airline}</span>
                    </label>
                  ))}
                </div>
                <div className="filter-group">
                  <h4>Class</h4>
                  {['Economy', 'Premium Economy', 'Business', 'First'].map((cls) => (
                    <label className="filter-check" key={cls}>
                      <input type="checkbox" defaultChecked={cls === 'Economy'} />
                      <span>{cls}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            <section className="flights-results">
              <div className="flights-header">
                <h2>{sortedFlights.length} flights found</h2>
                <div className="flights-sort">
                  <span>Sort by:</span>
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="recommended">Recommended</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="duration">Duration</option>
                  </select>
                </div>
              </div>

              <div className="flights-list">
                {sortedFlights.map((flight) => (
                  <article className="flight-card" key={flight.id}>
                    <div className="flight-main">
                      <div className="flight-airline">
                        <span className="airline-logo">{flight.logo}</span>
                        <span className="airline-name">{flight.airline}</span>
                        <span className="flight-class">{flight.class}</span>
                      </div>
                      <div className="flight-route">
                        <div className="route-point">
                          <strong>{flight.depTime}</strong>
                          <span>{flight.from}</span>
                        </div>
                        <div className="route-line">
                          <span className="flight-duration">{flight.duration}</span>
                          <div className="line-bar">
                            <div className={`line-progress ${flight.direct ? 'direct' : 'stop'}`}></div>
                            {!flight.direct && <span className="stop-dot"></span>}
                          </div>
                          <span className="flight-stops">{flight.direct ? 'Direct' : flight.stops}</span>
                        </div>
                        <div className="route-point">
                          <strong>{flight.arrTime}</strong>
                          <span>{flight.to}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flight-booking">
                      <div className="flight-price">
                        {flight.oldPrice && <span className="old-price">{flight.oldPrice}</span>}
                        <strong>{flight.price}</strong>
                        <span>/person</span>
                      </div>
                      <button className="btn btn-primary book-flight-btn">Select</button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Flights;
