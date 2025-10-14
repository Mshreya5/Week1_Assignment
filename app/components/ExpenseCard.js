"use client";
import React from "react";

const categoryIcons = {
  Food: "🍕",
  Travel: "🚗", 
  Shopping: "🛍️",
  Bills: "💡"
};

const styles = {
  card: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '16px',
    padding: '24px',
    minWidth: '160px',
    color: 'white',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  },
  cardTitle: {
    margin: '0 0 12px 0',
    fontSize: '18px',
    fontWeight: '600'
  },
  cardAmount: {
    margin: '0',
    fontSize: '24px',
    fontWeight: '700'
  }
};

export default function ExpenseCard({ category, amount }) {
  return (
    <div style={styles.card}>
      <div>
        <span>{categoryIcons[category] || "💰"}</span>
        <h4 style={styles.cardTitle}>{category}</h4>
      </div>
      <p style={styles.cardAmount}>
        ₹{amount.toLocaleString()}
      </p>
      {amount === 0 && <span>No expenses</span>}
    </div>
  );
}