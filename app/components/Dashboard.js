"use client";
import React from "react";
import ExpenseCard from "./ExpenseCard";

export default function Dashboard({ transactions, onAddClick }) {
  // Updated to match new categories
  const categories = ["Food", "Travel", "Shopping", "Bills", "Entertainment", "Health"];
  
  const getCategoryTotal = (category) => {
    return transactions
      .filter(t => t.category === category)
      .reduce((total, t) => total + t.amount, 0);
  };

  const totalSpent = transactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="container">
      <div className="dashboard-header">
        <h2>Your Expenses</h2>
        <p className="total-amount">Total: ₹{totalSpent.toLocaleString()}</p>
        {/* Quick stats */}
        <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
          {transactions.length} transactions this month
        </p>
      </div>
      
      <div className="expense-grid">
        {categories.map((category) => (
          <ExpenseCard 
            key={category} 
            category={category} 
            amount={getCategoryTotal(category)} 
          />
        ))}
      </div>
      
      <div className="add-transaction-section">
        <button onClick={onAddClick} className="btn btn-primary add-btn">
          + Add Expense
        </button>
      </div>
    </div>
  );
}
