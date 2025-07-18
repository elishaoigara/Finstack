import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Add this import

function Sidebar() {
  return (
    <aside style={{ width: '200px', background: '#6a0dad', color: 'white', padding: '1rem', minHeight: '100vh' }}>
      <h3>Finstack</h3>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link></li>
          <li><Link to="/budget" style={{ color: 'white', textDecoration: 'none' }}>Budget Tracker</Link></li>
          <li><Link to="/roi" style={{ color: 'white', textDecoration: 'none' }}>ROI Calculator</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
