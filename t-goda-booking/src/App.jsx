import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import RoomDetail from './pages/RoomDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ComingSoon from './pages/ComingSoon';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/room/:id" element={<RoomDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/flights" element={<ComingSoon title="Flights" />} />
        <Route path="/bundles" element={<ComingSoon title="Bundles" />} />
        <Route path="/activities" element={<ComingSoon title="Activities" />} />
      </Routes>
    </Router>
  );
}

export default App;
