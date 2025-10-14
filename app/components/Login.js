"use client";
import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Super basic validation - just checking if fields exist
    if (email && password) {
      // TODO: Add proper authentication
      onLogin({ email, name: email.split('@')[0] }); // extract name from email
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="card" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="text-center mb-4">
          <h2 style={{ fontSize: "28px", marginBottom: "8px" }}>💰 My Expense Tracker</h2>
          <p style={{ color: "#666" }}>Track your daily expenses easily</p>
          <p style={{ color: "#999", fontSize: "12px", marginTop: "8px" }}>Just enter any email/password to continue</p>
        </div>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input
            type="email"
            required
            className="input"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary mt-4">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}