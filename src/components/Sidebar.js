import { NavLink } from 'react-router-dom';
import { FaHome, FaMoneyBillWave, FaChartLine, FaBars } from 'react-icons/fa';
import { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const sidebarStyle = {
    width: isOpen ? '220px' : '60px',
    minHeight: '100vh',
    background: '#1e3d32',
    padding: '1rem 0',
    color: '#f5f2eb',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    transition: 'width 0.3s ease',
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

  const hoverStyle = {
    background: '#2b5444',
  };

  const toggleButtonStyle = {
    background: 'transparent',
    border: 'none',
    color: '#f5f2eb',
    fontSize: '1.2rem',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    marginBottom: '1rem',
    alignSelf: 'flex-end',
  };

  return (
    <aside style={sidebarStyle}>
      <button onClick={() => setIsOpen(!isOpen)} style={toggleButtonStyle}>
        <FaBars />
      </button>

      {isOpen && (
        <div
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
            fontWeight: 'bold',
            fontSize: '1.2rem',
          }}
        >
          Finstack
        </div>
      )}

      {[
        { path: '/', label: 'Dashboard', icon: <FaHome size={20} /> },
        { path: '/budget', label: 'Budget Tracker', icon: <FaMoneyBillWave size={20} /> },
        { path: '/roi', label: 'ROI Calculator', icon: <FaChartLine size={20} /> },
      ].map(({ path, label, icon }) => (
        <NavLink
          key={path}
          to={path}
          style={({ isActive }) => ({
            ...linkBaseStyle,
            background: isActive ? '#2b5444' : 'transparent',
            fontWeight: isActive ? 'bold' : 'normal',
            borderRadius: '0 20px 20px 0',
            transform: isActive ? 'translateX(4px)' : 'none',
          })}
          onMouseEnter={(e) => {
            if (!e.currentTarget.classList.contains('active')) {
              Object.assign(e.currentTarget.style, hoverStyle);
            }
          }}
          onMouseLeave={(e) => {
            if (!e.currentTarget.classList.contains('active')) {
              e.currentTarget.style.background = 'transparent';
            }
          }}
        >
          {icon} {isOpen && label}
        </NavLink>
      ))}
    </aside>
  );
}

export default Sidebar;
