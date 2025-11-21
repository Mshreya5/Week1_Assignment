"use client";

import React, { useState } from "react";
import CategorySelector from "./CategorySelector";

export default function AddTransaction({ transaction, onClose, onSave, onAdd }) {
  let defaultDescription = "";
  let defaultAmount = "";
  let defaultCategory = "Food";
  
  if (transaction) {
    defaultDescription = transaction.description;
    defaultAmount = transaction.amount;
    defaultCategory = transaction.category;
  }

  const [description, setDescription] = useState(defaultDescription);
  const [amount, setAmount] = useState(defaultAmount);
  const [category, setCategory] = useState(defaultCategory);

  let isEditing = false;
  if (transaction) {
    isEditing = true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description === "") {
      alert("Please enter a description for this expense");
      return;
    }

    if (amount === "" || amount <= 0) {
      alert("Please enter a valid amount greater than 0");
      return;
    }

    if (amount > 50000) {
      let confirmed = window.confirm("This amount seems quite high. Are you sure?");
      if (confirmed === false) {
        return;
      }
    }

    let transactionData = {
      description: description,
      amount: parseFloat(amount),
      category: category,
    };

    if (isEditing) {
      let fullTransaction = {
        id: transaction.id,
        description: transactionData.description,
        amount: transactionData.amount,
        category: transactionData.category,
      };
      if (onSave) {
        onSave(fullTransaction);
      } else if (onAdd) {
        onAdd(fullTransaction);
      }
    } else {
      if (onSave) {
        onSave(transactionData);
      } else if (onAdd) {
        onAdd(transactionData);
      }
    }

    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <h3>{isEditing ? "Edit Transaction" : "Add New Transaction"}</h3>

          <div className="form-group">
            <label>What did you spend on?</label>
            <input
              className="input"
              placeholder="e.g. lunch, uber, groceries..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>How much?</label>
            <input
              className="input"
              placeholder="₹ 0.00"
              type="number"
              step="0.01"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>What category?</label>
            <CategorySelector value={category} onChange={setCategory} />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              {isEditing ? "Update Transaction" : "Add Transaction"}
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
