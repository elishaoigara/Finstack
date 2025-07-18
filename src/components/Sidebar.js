import { NavLink } from 'react-router-dom';
import { FaHome, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';

function Sidebar() {
  const sidebarStyle = {
    width: '220px',
    minHeight: '100vh',
    background: '#1e3d32',
    padding: '1rem 0',
    color: '#f5f2eb',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  };

  const linkBaseStyle = {
    padding: '1rem',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: '#f5f2eb',
    transition: 'background 0.2s, transform 0.2s',
  };

  return (
    <aside style={sidebarStyle}>
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem',
        fontWeight: 'bold',
        fontSize: '1.2rem',
      }}>
        Finstack
      </div>

      <NavLink
        to="/"
        style={({ isActive }) => ({
          ...linkBaseStyle,
          background: isActive ? '#2b5444' : 'transparent',
          fontWeight: isActive ? 'bold' : 'normal',
          borderRadius: '0 20px 20px 0',
          transform: isActive ? 'translateX(4px)' : 'none',
        })}
      >
        <FaHome /> Dashboard
      </NavLink>

      <NavLink
        to="/budget"
        style={({ isActive }) => ({
          ...linkBaseStyle,
          background: isActive ? '#2b5444' : 'transparent',
          fontWeight: isActive ? 'bold' : 'normal',
          borderRadius: '0 20px 20px 0',
          transform: isActive ? 'translateX(4px)' : 'none',
        })}
      >
        <FaMoneyBillWave /> Budget Tracker
      </NavLink>

      <NavLink
        to="/roi"
        style={({ isActive }) => ({
          ...linkBaseStyle,
          background: isActive ? '#2b5444' : 'transparent',
          fontWeight: isActive ? 'bold' : 'normal',
          borderRadius: '0 20px 20px 0',
          transform: isActive ? 'translateX(4px)' : 'none',
        })}
      >
        <FaChartLine /> ROI Calculator
      </NavLink>
    </aside>
  );
}

export default Sidebar;
