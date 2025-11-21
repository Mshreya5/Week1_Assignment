"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AddTransaction from "../components/AddTransaction";
import ExpenseCard from "../components/ExpenseCard";

export default function TransactionPage() {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    let savedTransactions = localStorage.getItem("transactions");
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  const handleAddTransaction = (newTransaction) => {
    const id = Date.now();
    const date = new Date().toISOString();
    
    const transactionWithId = {
      id: id,
      description: newTransaction.description,
      amount: newTransaction.amount,
      category: newTransaction.category,
      date: date,
    };

    const updatedTransactions = [transactionWithId, ...transactions];
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    setShowAddModal(false);
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please login first</div>;
  }

  return (
    <div className="bg-white min-h-screen w-full dark:bg-black transition-colors duration-300">
      <Navbar user={user} />

      <main className="main-content">
        <div className="max-w-6xl mx-auto">
          <div className="page-header">
            <h1 className="page-title">Transactions</h1>
            <button
              onClick={() => setShowAddModal(true)}
              className="btn btn-primary"
            >
              Add Transaction
            </button>
          </div>

          {showAddModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2 className="page-title" style={{ marginBottom: "24px", fontSize: "24px" }}>
                  Add New Transaction
                </h2>
                <AddTransaction
                  onAdd={handleAddTransaction}
                  onClose={() => setShowAddModal(false)}
                />
              </div>
            </div>
          )}

          {transactions.length === 0 ? (
            <div className="empty-message">
              No transactions yet. Add one to get started!
            </div>
          ) : (
            <div>
              {transactions.map((transaction) => (
                <div key={transaction.id} className="transaction-item">
                  <div className="transaction-info">
                    <div className="transaction-description">
                      {transaction.description}
                    </div>
                    <div className="transaction-meta">
                      <span>{transaction.category}</span>
                      <span>{new Date(transaction.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="transaction-amount">₹{transaction.amount}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
