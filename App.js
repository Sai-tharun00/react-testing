import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ReportIssue from './components/ReportIssue';
import Services from './components/Services';
import Signup from './components/Signup';
import TrackIssues from './components/TrackIssues';
import Login from './components/Login';
import CitizenDashboard from './components/CitizenDashboard';
import LeaderDashboard from './components/LeaderDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
        <Route path="/leader-dashboard" element={<LeaderDashboard />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/track" element={<TrackIssues />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
