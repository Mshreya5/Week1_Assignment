"use client";
import React from "react";

export default function Navbar({ onNavigate }) {
  const buttonStyle = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "25px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)"
  };

  return (
    <nav className="card" style={{ 
      display: "flex", 
      gap: "16px", 
      margin: "20px",
      borderRadius: "16px"
    }}>
      <button className="btn btn-primary" onClick={() => onNavigate("dashboard")}>Dashboard</button>
      <button className="btn btn-primary" onClick={() => onNavigate("transactions")}>Transactions</button>
      <button className="btn btn-primary" onClick={() => onNavigate("profile")}>Profile</button>
    </nav>
  );
}
