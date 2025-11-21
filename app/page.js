"use client";

import React, { useState, useEffect } from "react";
import "./globals.css";
import Login from "./components/Login";

export default function App() {
  const [user, setUser] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      window.location.href = "/dashboard";
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    window.location.href = "/dashboard";
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return <Login onLogin={handleLogin} />;
}