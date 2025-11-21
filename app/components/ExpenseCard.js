"use client";

import React from "react";

const categoryIcons = {
  Food: "🍕",
  Travel: "🚗",
  Shopping: "🛍️",
  Bills: "💡",
};

const cardStyles = {
  card: {
    background: "#3B82F6",
    borderRadius: "16px",
    padding: "24px",
    minWidth: "160px",
    color: "white",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  title: {
    margin: "0 0 12px 0",
    fontSize: "18px",
    fontWeight: "600",
  },
  amount: {
    margin: "0",
    fontSize: "24px",
    fontWeight: "700",
  },
};

export default function ExpenseCard({ transaction, category, amount }) {
  let displayCategory = category;
  let displayAmount = amount;

  if (transaction) {
    displayCategory = transaction.category;
    displayAmount = transaction.amount;
  }

  if (!displayAmount) {
    displayAmount = 0;
  }

  return (
    <div style={cardStyles.card}>
      <div>
        <span>{categoryIcons[displayCategory] || "💰"}</span>
        <h4 style={cardStyles.title}>{displayCategory}</h4>
      </div>

      <p style={cardStyles.amount}>₹{displayAmount.toLocaleString()}</p>

      {displayAmount === 0 && <span>No expenses</span>}
    </div>
  );
}