import React, { useState } from 'react';

function BudgetTracker() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [newAmount, setNewAmount] = useState('');

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory && newAmount) {
      setCategories([...categories, { name: newCategory, amount: Number(newAmount), spent: 0 }]);
      setNewCategory('');
      setNewAmount('');
    }
  };

  const handleSpend = (index, amount) => {
    const updated = [...categories];
    updated[index].spent += Number(amount);
    setCategories(updated);
  };

  return (
    <div className="container py-4" style={{ background: '#e8e6df', minHeight: '100vh' }}>
      <h1 className="mb-4 text-success">Budget Tracker</h1>

      <form onSubmit={handleAddCategory} className="row g-2 mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Category Name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Budget Amount"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            required
          />
        </div>
        <div className="col-md-4">
          <button type="submit" className="btn btn-success w-100">Add Category</button>
        </div>
      </form>

      <div className="row">
        {categories.map((cat, idx) => (
          <div key={idx} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{cat.name}</h5>
                <p className="card-text">Budgeted: KSH {cat.amount.toLocaleString()}</p>
                <p className="card-text">Spent: KSH {cat.spent.toLocaleString()}</p>
                <p className="card-text">Remaining: KSH {(cat.amount - cat.spent).toLocaleString()}</p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const amount = e.target.elements['spend'].value;
                    handleSpend(idx, amount);
                    e.target.reset();
                  }}
                  className="d-flex"
                >
                  <input
                    type="number"
                    name="spend"
                    className="form-control me-2"
                    placeholder="Add Expense"
                    required
                  />
                  <button type="submit" className="btn btn-outline-success">Add</button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BudgetTracker;
