function AppNavbar() {
  return (
    <nav style={{
      background: '#1e3d32',
      color: '#f5f2eb',
      padding: '0.8rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}>
      <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        Finstack
      </div>
      <div style={{ fontSize: '0.95rem' }}>
        Finance Dashboard
      </div>
    </nav>
  );
}

export default AppNavbar;
