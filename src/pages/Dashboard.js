import React from 'react';

function Dashboard({ totalBudget, spentAmount, roiPercentage, complianceStatus, expenses = [] }) {
  const remaining = totalBudget - spentAmount;

  return (
    <div className="container-fluid py-4" style={{ background: '#e8e6df', minHeight: '100vh' }}>
      <h1 className="mb-4 text-dark">Welcome to Finstack Dashboard</h1>

      <div className="row">
        {[
          { label: 'Total Budget', value: `KSH ${totalBudget.toLocaleString()}`, color: 'primary' },
          { label: 'Spent', value: `KSH ${spentAmount.toLocaleString()}`, color: 'danger' },
          { label: 'Remaining', value: `KSH ${remaining.toLocaleString()}`, color: 'success' },
        ].map((item, idx) => (
          <div key={idx} className="col-md-4 mb-3">
            <div className={`card border-${item.color} shadow-sm`}>
              <div className="card-body">
                <h5 className="card-title">{item.label}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.value}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">Latest Expenses</div>
            <ul className="list-group list-group-flush">
              {expenses.length > 0 ? (
                expenses.map((exp, idx) => (
                  <li key={idx} className="list-group-item d-flex justify-content-between">
                    {exp.name}
                    <span>KSH {exp.amount.toLocaleString()}</span>
                  </li>
                ))
              ) : (
                <li className="list-group-item">No expenses recorded.</li>
              )}
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white">Performance Overview</div>
            <div className="card-body">
              <p>ROI</p>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-success"
                  style={{ width: `${roiPercentage}%` }}
                >
                  {roiPercentage}%
                </div>
              </div>
              <p>Compliance</p>
              <div className="progress">
                <div
                  className={`progress-bar ${
                    complianceStatus === 'Up to Date' ? 'bg-info' : 'bg-warning'
                  }`}
                  style={{ width: '100%' }}
                >
                  {complianceStatus}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
