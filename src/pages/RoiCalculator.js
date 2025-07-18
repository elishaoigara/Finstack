import React, { useState } from 'react';

function RoiCalculator() {
  const [investment, setInvestment] = useState(200000);
  const [returnAmount, setReturnAmount] = useState(224000);

  const roi = ((returnAmount - investment) / investment * 100).toFixed(2);

  return (
    <div style={{ padding: '2rem', background: '#f4f4f4', minHeight: '100vh' }}>
      <h1 style={{ color: '#6a0dad' }}>ROI Calculator</h1>
      <form style={{ marginTop: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Investment (KSH): </label>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>
        <div>
          <label>Return Amount (KSH): </label>
          <input
            type="number"
            value={returnAmount}
            onChange={(e) => setReturnAmount(Number(e.target.value))}
            style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>
      </form>

      <div style={{
        background: 'white',
        padding: '1rem',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginTop: '1rem'
      }}>
        <p>Investment: KSH {investment.toLocaleString()}</p>
        <p>Return: KSH {returnAmount.toLocaleString()}</p>
        <p>ROI: {roi}%</p>
      </div>
    </div>
  );
}

export default RoiCalculator;
