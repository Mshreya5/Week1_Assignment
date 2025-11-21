"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AddTransaction from "../components/AddTransaction";
import ExpenseCard from "../components/ExpenseCard";

export default function DashboardPage() {
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

  const getTotalExpense = () => {
    return transactions.reduce((sum, t) => sum + t.amount, 0);
  };

  const getCategoryTotals = () => {
    let categories = {};
    for (let i = 0; i < transactions.length; i++) {
      let cat = transactions[i].category;
      if (categories[cat]) {
        categories[cat] += transactions[i].amount;
      } else {
        categories[cat] = transactions[i].amount;
      }
    }
    return categories;
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please login first</div>;
  }

  const categoryTotals = getCategoryTotals();
  const totalExpense = getTotalExpense();

  return (
    <div className="bg-white min-h-screen w-full dark:bg-black transition-colors duration-300">
      <Navbar user={user} />

      <main className="main-content">
        <div className="max-w-6xl mx-auto">
          <div className="page-header">
            <h1 className="page-title">Dashboard</h1>
            <button
              onClick={() => setShowAddModal(true)}
              className="btn btn-primary"
            >
              Add Transaction
            </button>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-label">Total Expense</div>
              <div className="stat-value">₹{totalExpense}</div>
            </div>

            <div className="stat-card">
              <div className="stat-label">Transactions</div>
              <div className="stat-value">{transactions.length}</div>
            </div>

            <div className="stat-card">
              <div className="stat-label">Categories</div>
              <div className="stat-value">{Object.keys(categoryTotals).length}</div>
            </div>
          </div>

          <div className="recent-transactions">
            <h2>Recent Transactions</h2>
            {transactions.length === 0 ? (
              <div className="empty-message">
                No transactions yet. Add one to get started!
              </div>
            ) : (
              <div className="space-y-4">
                {transactions.slice(0, 5).map((transaction) => (
                  <ExpenseCard key={transaction.id} transaction={transaction} />
                ))}
              </div>
            )}
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
        </div>
      </main>
    </div>
  );
}
