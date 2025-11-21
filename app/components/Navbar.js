"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ user }) {
  const pathname = usePathname();

  let dashboardClass = "btn btn-secondary";
  let transactionsClass = "btn btn-secondary";
  let profileClass = "btn btn-secondary";

  if (pathname === "/dashboard") {
    dashboardClass = "btn btn-primary";
  }
  if (pathname === "/transaction") {
    transactionsClass = "btn btn-primary";
  }
  if (pathname === "/profile") {
    profileClass = "btn btn-primary";
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav className="card dark:bg-slate-900" style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "16px",
      margin: "20px",
      borderRadius: "16px",
    }}>
      <div style={{ display: "flex", gap: "12px" }}>
        <Link href="/dashboard">
          <button className={dashboardClass}>
            Dashboard
          </button>
        </Link>
        <Link href="/transaction">
          <button className={transactionsClass}>
            Transactions
          </button>
        </Link>
        <Link href="/profile">
          <button className={profileClass}>
            Profile
          </button>
        </Link>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {user && (
          <span style={{ fontSize: "14px", color: "#666" }}>
            Welcome, {user.name}
          </span>
        )}
        <button
          onClick={handleLogout}
          className="btn btn-outline btn-sm"
          style={{ marginLeft: "12px" }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
