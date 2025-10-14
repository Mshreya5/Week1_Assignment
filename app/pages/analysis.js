"use client";
import React from "react";
import Chart from "../components/chart";

export default function CategoryAnalysis({ transactions }) {
  const categories = ["Food", "Travel", "Shopping", "Bills"];
  const categoryData = categories.map((cat) => ({
    category: cat,
    amount: transactions
      .filter((t) => t.category === cat)
      .reduce((sum, curr) => sum + curr.amount, 0),
  }));

  const totalAmount = categoryData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div style={{ 
      padding: "32px", 
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", 
      minHeight: "100vh" 
    }}>
      <h2 style={{ 
        fontSize: "32px", 
        fontWeight: "700", 
        color: "#2d3748", 
        marginBottom: "32px",
        textAlign: "center"
      }}>Category Analysis</h2>
      
      <div style={{
        background: "white",
        borderRadius: "16px",
        padding: "32px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
        marginBottom: "32px"
      }}>
        <Chart data={categoryData} />
      </div>

      <div style={{
        background: "white",
        borderRadius: "16px",
        padding: "32px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
      }}>
        <h3 style={{ 
          fontSize: "24px", 
          fontWeight: "600", 
          color: "#2d3748", 
          marginBottom: "24px" 
        }}>Category Breakdown</h3>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
          {categoryData.map((item) => (
            <div key={item.category} style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center"
            }}>
              <h4 style={{ margin: "0 0 8px 0", fontSize: "16px" }}>{item.category}</h4>
              <p style={{ margin: "0 0 8px 0", fontSize: "24px", fontWeight: "700" }}>₹{item.amount}</p>
              <p style={{ margin: 0, fontSize: "14px", opacity: 0.8 }}>
                {totalAmount > 0 ? Math.round((item.amount / totalAmount) * 100) : 0}% of total
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}