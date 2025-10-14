"use client";
import React from "react";

export default function TransactionList({ transactions, onEdit, onDelete }) {
  const handleDelete = (id, description) => {
    if (confirm(`Delete "${description}"?`)) {
      onDelete(id);
    }
  };

  if (transactions.length === 0) {
    return (
      <div className="container">
        <h3>Transaction History</h3>
        <div className="empty-state">
          <p>No transactions yet. Start by adding your first expense!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h3>Transaction History ({transactions.length})</h3>
      
      <div className="transactions-table">
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="description">{transaction.description}</td>
                <td className="amount">₹{transaction.amount}</td>
                <td>
                  <span className={`category-tag ${transaction.category.toLowerCase()}`}>
                    {transaction.category}
                  </span>
                </td>
                <td className="actions">
                  <button 
                    className="btn btn-sm" 
                    onClick={() => onEdit(transaction)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn btn-sm btn-danger" 
                    onClick={() => handleDelete(transaction.id, transaction.description)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
