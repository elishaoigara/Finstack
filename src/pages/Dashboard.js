import React from 'react';

function Dashboard() {
  const cardStyle = {
    background: 'white',
    padding: '1rem',
    borderRadius: '12px',
    marginBottom: '1rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={{ padding: '2rem', background: '#f4f4f4', minHeight: '100vh' }}>
      <h1 style={{ color: '#6a0dad' }}>Welcome to Finstack Dashboard</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem',
        marginTop: '2rem'
      }}>
        <div style={cardStyle}>Total Budget: KSH 500,000</div>
        <div style={cardStyle}>Spent: KSH 320,000</div>
        <div style={cardStyle}>ROI: 12%</div>
        <div style={cardStyle}>Compliance: Up to date</div>
      </div>
    </div>
  );
}

export default Dashboard;
