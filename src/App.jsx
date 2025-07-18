// App.jsx
import Sidebar from './components/Sidebar';
import AppNavbar from './components/AppNavbar';
import Dashboard from './pages/Dashboard';
import BudgetTracker from './pages/BudgetTracker';
import RoiCalculator from './pages/RoiCalculator';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/budget" element={<BudgetTracker />} />
          <Route path="/roi" element={<RoiCalculator />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
