import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from './context/ThemeContext';
import Home from './pages/Home';
import Search from './pages/Search';
import RoomDetail from './pages/RoomDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Flights from './pages/Flights';
import Bundles from './pages/Bundles';
import Activities from './pages/Activities';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/room/:id" element={<RoomDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/bundles" element={<Bundles />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
