import React, { useState } from 'react';

function BudgetTracker() {
  const [totalBudget, setTotalBudget] = useState(500000);
  const [spentAmount, setSpentAmount] = useState(320000);

  const remaining = totalBudget - spentAmount;

  return (
    <div style={{ padding: '2rem', background: '#f4f4f4', minHeight: '100vh' }}>
      <h1 style={{ color: '#6a0dad' }}>Budget Tracker</h1>
      <form style={{ marginTop: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Total Budget (KSH): </label>
          <input
            type="number"
            value={totalBudget}
            onChange={(e) => setTotalBudget(Number(e.target.value))}
            style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>
        <div>
          <label>Spent Amount (KSH): </label>
          <input
            type="number"
            value={spentAmount}
            onChange={(e) => setSpentAmount(Number(e.target.value))}
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
        <p>Total Budget: KSH {totalBudget.toLocaleString()}</p>
        <p>Spent: KSH {spentAmount.toLocaleString()}</p>
        <p>Remaining: KSH {remaining.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default BudgetTracker;
