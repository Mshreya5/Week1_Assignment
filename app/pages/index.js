"use client";
import React from "react";
import ExpenseCard from "../components/card";

export default function Dashboard({ transactions, onAddClick }) {
  const categories = ["Food", "Travel", "Shopping", "Bills"];
  const summary = categories.map((cat) => ({
    category: cat,
    amount: transactions
      .filter((t) => t.category === cat)
      .reduce((sum, curr) => sum + curr.amount, 0),
  }));

  return (
    <div style={{ padding: "32px", background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", minHeight: "100vh" }}>
      <h2 style={{ 
        fontSize: "32px", 
        fontWeight: "700", 
        color: "#2d3748", 
        marginBottom: "32px",
        textAlign: "center"
      }}>Dashboard</h2>
      
      <div style={{ 
        display: "flex", 
        gap: "24px", 
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: "40px"
      }}>
        {summary.map((item) => (
          <ExpenseCard key={item.category} {...item} />
        ))}
      </div>
      
      <div style={{ textAlign: "center" }}>
        <button 
          onClick={onAddClick}
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            border: "none",
            padding: "16px 32px",
            borderRadius: "30px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow = "0 12px 35px rgba(102, 126, 234, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.3)";
          }}
        >
          + Add Transaction
        </button>
      </div>
    </div>
  );
}