"use client";

import React from "react";

const CATEGORIES = [
  { value: "Food", label: "🍕 Food & Dining" },
  { value: "Travel", label: "🚗 Travel & Transport" },
  { value: "Shopping", label: "🛍️ Shopping" },
  { value: "Bills", label: "💡 Bills & Utilities" },
];

export default function CategorySelector({ value, onChange }) {
  return (
    <select
      className="input category-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
      style={{ cursor: "pointer" }}
    >
      {CATEGORIES.map((category) => (
        <option key={category.value} value={category.value}>
          {category.label}
        </option>
      ))}
    </select>
  );
}
