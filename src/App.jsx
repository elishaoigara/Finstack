import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AppNavbar from './components/AppNavbar';
import Dashboard from './pages/Dashboard';
import BudgetTracker from './pages/BudgetTracker';
import RoiCalculator from './pages/RoiCalculator';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, marginLeft: '220px' }}>
          <AppNavbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/budget" element={<BudgetTracker />} />
            <Route path="/roi" element={<RoiCalculator />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
