import { NavLink } from 'react-router-dom';
import { FaHome, FaMoneyBillWave, FaChartLine, FaBars } from 'react-icons/fa';
import { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const sidebarStyle = {
    width: isOpen ? '220px' : '60px',
    minHeight: '100vh',
    background: '#1e293b', // dark navy
    padding: '1rem 0',
    color: '#cbd5e1', // slate-200
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    transition: 'width 0.3s ease',
    boxShadow: '2px 0 8px rgba(0,0,0,0.2)',
  };

  const linkBaseStyle = {
    padding: '1rem',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: '#cbd5e1',
    fontSize: '0.95rem',
    transition: 'background 0.2s, transform 0.2s',
  };

  const hoverStyle = {
    background: '#334155', // slightly lighter navy
  };

  const toggleButtonStyle = {
    background: 'transparent',
    border: 'none',
    color: '#cbd5e1',
    fontSize: '1.3rem',
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
            fontWeight: '600',
            fontSize: '1.3rem',
            letterSpacing: '1px',
            color: '#94a3b8', // muted blue-gray
          }}
        >
          Finstack
        </div>
      )}

      {[
        { path: '/', label: 'Dashboard', icon: <FaHome size={18} /> },
        { path: '/budget', label: 'Budget Tracker', icon: <FaMoneyBillWave size={18} /> },
        { path: '/roi', label: 'ROI Calculator', icon: <FaChartLine size={18} /> },
      ].map(({ path, label, icon }) => (
        <NavLink
          key={path}
          to={path}
          style={({ isActive }) => ({
            ...linkBaseStyle,
            background: isActive ? '#475569' : 'transparent',
            fontWeight: isActive ? 'bold' : 'normal',
            borderRadius: '0 16px 16px 0',
            transform: isActive ? 'translateX(5px)' : 'none',
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
