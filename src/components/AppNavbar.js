import React from 'react';

function AppNavbar() {
  return (
    <nav style={{
      background: '#6a0dad',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h2 style={{ margin: 0 }}>Finstack</h2>
      <div>User Profile</div>
    </nav>
  );
}

export default AppNavbar;
