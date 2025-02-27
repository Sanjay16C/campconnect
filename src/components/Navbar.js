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
        <StyledLink to="/">Workspace</StyledLink>
        <StyledLink to="/calendar">Calendar</StyledLink>
        <StyledLink to="/permissions">Permissions</StyledLink>
        <StyledLink to="/profile">Profile</StyledLink>
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
    transition: "color 0.3s ease-in-out", // Smooth transition for color change
  },
};

// Adding hover effect in a new component
const StyledLink = ({ to, children }) => (
  <Link
    to={to}
    style={styles.link}
    onMouseEnter={(e) => (e.target.style.color = "#007bff")} // On hover, change to blue
    onMouseLeave={(e) => (e.target.style.color = "#333")} // On mouse leave, revert to default color
  >
    {children}
  </Link>
);

export default Navbar;