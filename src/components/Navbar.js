import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logo}>
        <Link to="/" style={styles.logoText}>
          <span style={{ color: "#007bff" }}>Camp</span>Connect
        </Link>
      </div>

      {/* Navigation Links */}
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Workspace</Link>
        <Link to="/calendar" style={styles.link}>Calendar</Link>
        <Link to="/permissions" style={styles.link}>Permissions</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  logoText: {
    textDecoration: "none",
    color: "#333",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    fontWeight: "500",
    transition: "color 0.2s ease-in-out",
  },
  linkHover: {
    color: "#007bff",
  },
};

export default Navbar;