"use client";
import React from "react";

// Added more realistic categories that I actually use
const CATEGORIES = [
  { value: "Food", label: "🍕 Food & Dining" },
  { value: "Travel", label: "🚗 Travel & Transport" },
  { value: "Shopping", label: "🛍️ Shopping" },
  { value: "Bills", label: "💡 Bills & Utilities" },
  { value: "Entertainment", label: "🎬 Movies & Fun" },
  { value: "Health", label: "💊 Medical & Health" },
  { value: "Other", label: "🤷 Other stuff" } // catch-all category
];

export default function CategorySelector({ value, onChange }) {
  return (
    <select 
      className="input category-select"
      value={value} 
      onChange={e => onChange(e.target.value)}
      required
      style={{ cursor: 'pointer' }} // small UX improvement
    >
      {CATEGORIES.map((category) => (
        <option key={category.value} value={category.value}>
          {category.label}
        </option>
      ))}
    </select>
  );
}
