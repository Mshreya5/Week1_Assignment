"use client";
import React, { useState } from "react";
import CategorySelector from "./CategorySelector";

export default function AddTransaction({ transaction, onClose, onSave }) {
  const [description, setDescription] = useState(transaction?.description || "");
  const [amount, setAmount] = useState(transaction?.amount || "");
  const [category, setCategory] = useState(transaction?.category || "Food");
  
  const isEditing = !!transaction;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation - could be better
    if (!description.trim()) {
      alert('Description is required!');
      return;
    }
    if (!amount || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    if (amount > 50000) { // reasonable upper limit
      alert('Amount seems too high. Are you sure?');
      // continue anyway - just a warning
    }
    
    const transactionData = {
      description: description.trim(),
      amount: parseFloat(amount),
      category
    };
    
    if (isEditing) {
      onSave({ ...transaction, ...transactionData });
    } else {
      onSave(transactionData);
    }
  };



  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <h3>{isEditing ? "Edit Transaction" : "Add New Transaction"}</h3>
          
          <div className="form-group">
            <input
              className="input"
              placeholder="e.g. lunch, uber, groceries..."
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              className="input"
              placeholder="₹ 0.00"
              type="number"
              step="0.01"
              min="0"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <CategorySelector value={category} onChange={setCategory} />
          </div>
          
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              {isEditing ? "Update" : "Add Transaction"}
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
