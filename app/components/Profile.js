"use client";
import React, { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Shreya Patel",
    email: "shreya.patel@gmail.com",
    phone: "+91 98765 43210",
    upiId: "shreya@paytm",
    monthlyBudget: 12000, // realistic budget for student/young professional
    currentSpent: 6850 // spent more than half the month
  });

  const [isEditing, setIsEditing] = useState(false);

  const budgetPercentage = (user.currentSpent / user.monthlyBudget) * 100;

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    fontSize: "16px",
    marginBottom: "16px",
    outline: "none"
  };

  const cardStyle = {
    background: "white",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
    marginBottom: "24px"
  };

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
      }}>Profile & Settings</h2>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* User Info Card */}
        <div style={cardStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
            <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#2d3748", margin: 0 }}>Personal Information</h3>
            <button 
              onClick={() => setIsEditing(!isEditing)}
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "14px",
                cursor: "pointer"
              }}
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#4a5568" }}>Name</label>
              {isEditing ? (
                <input 
                  style={inputStyle} 
                  value={user.name} 
                  onChange={(e) => setUser({...user, name: e.target.value})}
                />
              ) : (
                <p style={{ fontSize: "16px", color: "#2d3748", margin: 0 }}>{user.name}</p>
              )}
            </div>
            
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#4a5568" }}>Email</label>
              {isEditing ? (
                <input 
                  style={inputStyle} 
                  value={user.email} 
                  onChange={(e) => setUser({...user, email: e.target.value})}
                />
              ) : (
                <p style={{ fontSize: "16px", color: "#2d3748", margin: 0 }}>{user.email}</p>
              )}
            </div>
            
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#4a5568" }}>Phone</label>
              {isEditing ? (
                <input 
                  style={inputStyle} 
                  value={user.phone} 
                  onChange={(e) => setUser({...user, phone: e.target.value})}
                />
              ) : (
                <p style={{ fontSize: "16px", color: "#2d3748", margin: 0 }}>{user.phone}</p>
              )}
            </div>
            
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#4a5568" }}>UPI ID</label>
              {isEditing ? (
                <input 
                  style={inputStyle} 
                  value={user.upiId} 
                  onChange={(e) => setUser({...user, upiId: e.target.value})}
                />
              ) : (
                <p style={{ fontSize: "16px", color: "#2d3748", margin: 0 }}>{user.upiId}</p>
              )}
            </div>
          </div>
        </div>

        {/* Budget Card */}
        <div style={cardStyle}>
          <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#2d3748", marginBottom: "24px" }}>Monthly Budget</h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "center" }}>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#4a5568" }}>Budget Limit</label>
              {isEditing ? (
                <input 
                  type="number"
                  style={inputStyle} 
                  value={user.monthlyBudget} 
                  onChange={(e) => setUser({...user, monthlyBudget: Number(e.target.value)})}
                />
              ) : (
                <p style={{ fontSize: "24px", fontWeight: "700", color: "#2d3748", margin: 0 }}>₹{user.monthlyBudget}</p>
              )}
              
              <p style={{ fontSize: "16px", color: "#e53e3e", margin: "8px 0 0 0" }}>Spent: ₹{user.currentSpent}</p>
              <p style={{ fontSize: "16px", color: "#38a169", margin: "4px 0 0 0" }}>Remaining: ₹{user.monthlyBudget - user.currentSpent}</p>
            </div>
            
            <div>
              <div style={{ 
                background: "#f7fafc", 
                borderRadius: "12px", 
                padding: "16px",
                textAlign: "center"
              }}>
                <div style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: `conic-gradient(#667eea 0deg ${budgetPercentage * 3.6}deg, #e2e8f0 ${budgetPercentage * 3.6}deg 360deg)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  position: "relative"
                }}>
                  <div style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#2d3748"
                  }}>
                    {Math.round(budgetPercentage)}%
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: "14px", color: "#4a5568" }}>Budget Used</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
          {/* Quick hack - adding logout button here since no proper header */}
          <div style={{
            ...cardStyle,
            background: "linear-gradient(135deg, #718096 0%, #4a5568 100%)",
            color: "white",
            textAlign: "center",
            cursor: "pointer"
          }} onClick={() => {
            localStorage.removeItem('user');
            window.location.reload(); // lazy way to logout
          }}>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "16px" }}>Logout</h4>
            <p style={{ margin: 0, fontSize: "18px" }}>👋</p>
          </div>
          <div style={{
            ...cardStyle,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            textAlign: "center"
          }}>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "16px" }}>This Month</h4>
            <p style={{ margin: 0, fontSize: "24px", fontWeight: "700" }}>₹{user.currentSpent}</p>
          </div>
          
          <div style={{
            ...cardStyle,
            background: "linear-gradient(135deg, #38a169 0%, #2f855a 100%)",
            color: "white",
            textAlign: "center"
          }}>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "16px" }}>Avg. Daily</h4>
            <p style={{ margin: 0, fontSize: "24px", fontWeight: "700" }}>₹{Math.round(user.currentSpent / new Date().getDate())}</p>
          </div>
          
          <div style={{
            ...cardStyle,
            background: "linear-gradient(135deg, #e53e3e 0%, #c53030 100%)",
            color: "white",
            textAlign: "center"
          }}>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "16px" }}>Days Left</h4>
            <p style={{ margin: 0, fontSize: "24px", fontWeight: "700" }}>{new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate() - new Date().getDate()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
