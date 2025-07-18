import React, { useState } from 'react';

function RoiCalculator() {
  const [investment, setInvestment] = useState(200000);
  const [returnAmount, setReturnAmount] = useState(224000);

  const roi = ((returnAmount - investment) / investment * 100).toFixed(2);

  const inputStyle = {
    padding: '0.6rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    width: '100%',
    maxWidth: '300px',
  };

  const labelStyle = {
    marginBottom: '0.5rem',
    color: '#1e3d32',
    fontWeight: '500',
  };

  return (
    <div style={{ padding: '2rem', background: '#e8e6df', minHeight: '100vh' }}>
      <h1 style={{ color: '#1e3d32' }}>ROI Calculator</h1>

      <form style={{ marginTop: '1.5rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={labelStyle}>Investment (KSH):</label><br />
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={labelStyle}>Return Amount (KSH):</label><br />
          <input
            type="number"
            value={returnAmount}
            onChange={(e) => setReturnAmount(Number(e.target.value))}
            style={inputStyle}
          />
        </div>
      </form>

      <div style={{
        background: '#f5f2eb',
        padding: '1.5rem',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginTop: '2rem',
        color: '#1e3d32',
        fontWeight: '500',
      }}>
        <p>Investment: KSH {investment.toLocaleString()}</p>
        <p>Return: KSH {returnAmount.toLocaleString()}</p>
        <p>ROI: {roi}%</p>
      </div>
    </div>
  );
}

export default RoiCalculator;
