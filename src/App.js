import Sidebar from './components/Sidebar';
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import BudgetTracker from './pages/BudgetTracker';
import RoiCalculator from './pages/RoiCalculator';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex flex-column flex-md-row min-vh-100">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <AppNavbar />

        <div className="flex-grow-1 overflow-auto">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  totalBudget={800000}
                  spentAmount={250000}
                  roiPercentage={18}
                  complianceStatus="Up to Date"
                  expenses={[
                    { name: 'Office Rent', amount: 100000 },
                    { name: 'Equipment', amount: 50000 },
                    { name: 'Transport', amount: 20000 },
                  ]}
                />
              }
            />
            <Route path="/budget" element={<BudgetTracker />} />
            <Route path="/roi" element={<RoiCalculator />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
