"use client";
import React, { useState, useEffect } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import Profile from "./components/Profile";
import Login from "./components/Login";

// TODO: Replace with actual API calls later
const SAMPLE_DATA = [
  { id: 1, description: "Pizza from dominos", amount: 450, category: "Food" },
  { id: 2, description: "auto to office", amount: 80, category: "Travel" },
  { id: 3, description: "phone recharge", amount: 199, category: "Bills" },
  { id: 4, description: "coffee with friends", amount: 120, category: "Food" },
  { id: 5, description: "grocery shopping", amount: 850, category: "Shopping" },
];

export default function App() {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [transactions, setTransactions] = useState(SAMPLE_DATA);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [isClient, setIsClient] = useState(false);

  const addTransaction = (newTransaction) => {
    // Using timestamp as ID - not ideal but works for now
    const transaction = {
      ...newTransaction,
      id: Date.now(),
      date: new Date().toISOString()
    };
    setTransactions(prev => [transaction, ...prev]);
    setShowAddModal(false);
    // TODO: Add success notification
  };

  const updateTransaction = (updatedTransaction) => {
    setTransactions(prev => 
      prev.map(t => t.id === updatedTransaction.id ? updatedTransaction : t)
    );
    setEditingTransaction(null);
  };

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  const handleLogin = (userData) => {
    // Basic login - need to add proper auth later
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // quick fix for persistence
  };

  // Load user from localStorage on app start
  useEffect(() => {
    setIsClient(true);
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard transactions={transactions} onAddClick={() => setShowAddModal(true)} />;
      case "transactions":
        return <TransactionList transactions={transactions} onEdit={setEditingTransaction} onDelete={deleteTransaction} />;
      case "profile":
        return <Profile user={user} />;
      default:
        return <Dashboard transactions={transactions} onAddClick={() => setShowAddModal(true)} />;
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} user={user} />
      <main className="main-content">
        {renderPage()}
      </main>
      
      {showAddModal && (
        <AddTransaction 
          onClose={() => setShowAddModal(false)} 
          onSave={addTransaction} 
        />
      )}
      
      {editingTransaction && (
        <AddTransaction 
          transaction={editingTransaction} 
          onClose={() => setEditingTransaction(null)} 
          onSave={updateTransaction} 
        />
      )}
    </div>
  );
}
