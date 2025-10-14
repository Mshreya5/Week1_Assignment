"use client";
import React from "react";

export default function Transaction({ transactions, onEdit, onDelete }) {
  return (
    <div style={{ 
      padding: "32px", 
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", 
      minHeight: "100vh" 
    }}>
      <h3 style={{ 
        fontSize: "28px", 
        fontWeight: "700", 
        color: "#2d3748", 
        marginBottom: "32px",
        textAlign: "center"
      }}>All Transactions</h3>
      
      <div style={{ 
        background: "white",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
      }}>
        <table style={{ 
          width: "100%", 
          borderCollapse: "collapse"
        }}>
          <thead>
            <tr style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
              <th style={{ 
                padding: "16px", 
                color: "white", 
                fontWeight: "600",
                textAlign: "left"
              }}>ID</th>
              <th style={{ 
                padding: "16px", 
                color: "white", 
                fontWeight: "600",
                textAlign: "left"
              }}>Description</th>
              <th style={{ 
                padding: "16px", 
                color: "white", 
                fontWeight: "600",
                textAlign: "left"
              }}>Amount (₹)</th>
              <th style={{ 
                padding: "16px", 
                color: "white", 
                fontWeight: "600",
                textAlign: "left"
              }}>Category</th>
              <th style={{ 
                padding: "16px", 
                color: "white", 
                fontWeight: "600",
                textAlign: "center"
              }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={txn.id} style={{ 
                borderBottom: "1px solid #e2e8f0",
                background: index % 2 === 0 ? "#f8fafc" : "white",
                transition: "background-color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.parentElement.style.backgroundColor = "#edf2f7"}
              onMouseLeave={(e) => e.target.parentElement.style.backgroundColor = index % 2 === 0 ? "#f8fafc" : "white"}
              >
                <td style={{ padding: "16px", color: "#4a5568" }}>{txn.id}</td>
                <td style={{ padding: "16px", color: "#2d3748", fontWeight: "500" }}>{txn.description}</td>
                <td style={{ padding: "16px", color: "#e53e3e", fontWeight: "600" }}>{txn.amount}</td>
                <td style={{ padding: "16px" }}>
                  <span style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600"
                  }}>
                    {txn.category}
                  </span>
                </td>
                <td style={{ padding: "16px", textAlign: "center" }}>
                  <button
                    onClick={() => onEdit(txn)}
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "15px",
                      fontSize: "12px",
                      cursor: "pointer",
                      marginRight: "8px"
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(txn.id)}
                    style={{
                      background: "linear-gradient(135deg, #e53e3e 0%, #c53030 100%)",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "15px",
                      fontSize: "12px",
                      cursor: "pointer"
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}