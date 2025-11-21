"use client";

import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || name === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }

    let userData = {
      email: email,
      name: name,
      password: password,
    };

    onLogin(userData);
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div className="card" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="text-center mb-4">
          <h2 style={{ fontSize: "28px", marginBottom: "8px" }}>
            💰 UPI Expense Tracker
          </h2>
          <p style={{ color: "#666" }}>Track all your UPI transactions</p>
          <p style={{ color: "#999", fontSize: "12px", marginTop: "8px" }}>
            Categorize and analyze your spending from PhonePe, Paytm, and Google Pay
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}>
          <input
            type="text"
            required
            className="input"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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