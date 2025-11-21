"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [budget, setBudget] = useState(5000);
  const [showBudgetInput, setShowBudgetInput] = useState(false);
  const [newBudget, setNewBudget] = useState("");
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

    let savedBudget = localStorage.getItem("monthlyBudget");
    if (savedBudget) {
      setBudget(parseFloat(savedBudget));
    }
  }, []);

  const getTotalSpent = () => {
    return transactions.reduce((sum, t) => sum + t.amount, 0);
  };

  const handleSetBudget = (e) => {
    e.preventDefault();
    if (newBudget === "" || newBudget <= 0) {
      alert("Please enter a valid budget amount");
      return;
    }
    const budgetAmount = parseFloat(newBudget);
    setBudget(budgetAmount);
    localStorage.setItem("monthlyBudget", budgetAmount.toString());
    setNewBudget("");
    setShowBudgetInput(false);
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please login first</div>;
  }

  const totalSpent = getTotalSpent();
  const remaining = budget - totalSpent;
  const percentageUsed = (totalSpent / budget) * 100;

  return (
    <div className="bg-white min-h-screen w-full dark:bg-black transition-colors duration-300">
      <Navbar user={user} />

      <main className="main-content">
        <div className="max-w-2xl mx-auto">
          <h1 className="page-title mb-8">Profile</h1>

          <div className="profile-card">
            <div className="profile-field">
              <div className="profile-label">Full Name</div>
              <div className="profile-value">{user.name}</div>
            </div>

            <div className="profile-field">
              <div className="profile-label">Email Address</div>
              <div className="profile-value">{user.email}</div>
            </div>
          </div>

          <div className="profile-card" style={{ marginTop: "24px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "24px", color: "#1f2937" }} className="dark:text-white">
              Monthly Budget
            </h2>

            <div className="profile-field">
              <div className="profile-label">Total Budget</div>
              <div className="profile-value">₹{budget.toLocaleString()}</div>
            </div>

            <div className="profile-field">
              <div className="profile-label">Amount Spent</div>
              <div className="profile-value" style={{ color: "#ef4444" }}>
                ₹{totalSpent.toLocaleString()}
              </div>
            </div>

            <div className="profile-field">
              <div className="profile-label">Remaining Budget</div>
              <div className="profile-value" style={{ color: remaining >= 0 ? "#10b981" : "#ef4444" }}>
                ₹{remaining.toLocaleString()}
              </div>
            </div>

            <div className="profile-field">
              <div className="profile-label">Budget Used</div>
              <div style={{ marginTop: "8px" }}>
                <div style={{
                  width: "100%",
                  height: "24px",
                  background: "#e5e7eb",
                  borderRadius: "12px",
                  overflow: "hidden",
                }} className="dark:bg-gray-700">
                  <div
                    style={{
                      width: `${Math.min(percentageUsed, 100)}%`,
                      height: "100%",
                      background: percentageUsed > 90 ? "#ef4444" : percentageUsed > 70 ? "#f59e0b" : "#10b981",
                      transition: "width 0.3s ease",
                    }}
                  />
                </div>
                <div style={{ marginTop: "8px", fontSize: "14px", color: "#6b7280" }} className="dark:text-gray-400">
                  {percentageUsed.toFixed(1)}% of budget used
                </div>
              </div>
            </div>

            <div style={{ marginTop: "24px" }}>
              {!showBudgetInput ? (
                <button
                  onClick={() => setShowBudgetInput(true)}
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Update Budget
                </button>
              ) : (
                <form onSubmit={handleSetBudget}>
                  <div style={{ marginBottom: "12px" }}>
                    <input
                      type="number"
                      value={newBudget}
                      onChange={(e) => setNewBudget(e.target.value)}
                      placeholder="Enter new budget amount"
                      className="input"
                      style={{ width: "100%" }}
                      min="1"
                    />
                  </div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ flex: 1 }}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowBudgetInput(false)}
                      className="btn btn-outline"
                      style={{ flex: 1 }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
