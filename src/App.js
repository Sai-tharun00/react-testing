import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import About from './components/About';
import HelpPage from './components/HelpPage';
import ReportIssue from './components/ReportIssue';
import Services from './components/Services';
import Signup from './components/Signup';
import TrackIssues from './components/TrackIssues';
import Login from './components/Login';
import CitizenDashboard from './components/CitizenDashboard';
import LeaderDashboard from './components/LeaderDashboard';
import LeaderPerformanceChart from './components/LeaderPerformanceChart.jsx';
import StatusPage from './components/StatusPage.jsx';
import Choose from './components/Choose'; // Import the Choose component
import LeaderSignup from './components/LeaderSignup'; 

const App = () => {
  return (
    <Router>
      <div>
        <ToastContainer position="top-center" autoClose={5000} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
          <Route path="/leader-dashboard" element={<LeaderDashboard />} />
          <Route path="/leader-performance" element={<LeaderPerformanceChart />} />
          <Route path="/report" element={<ReportIssue />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/track" element={<TrackIssues />} />
          <Route path="/login" element={<Login />} />
          <Route path="/status/:issueId" element={<StatusPage />} />
          <Route path="/choose" element={<Choose />} /> {/* Route to Choose page */}
          <Route path="/leadersignup" element={<LeaderSignup />} /> {/* Leader Signup Page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
