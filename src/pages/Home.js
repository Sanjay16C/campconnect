import React, { useState } from "react";
import Project from "./Project";
import Resource from "./Resource";
import Forum from "./Forum";

const Home = () => {
  const [view, setView] = useState("home");

  return (
    <div style={styles.container}>
      {view === "home" && (
        <>
          <h2 style={styles.title}>🚀 Innovate • Collaborate • Succeed</h2>
          <p style={styles.subtitle}>
            Explore projects, share resources, and engage in discussions.
          </p>
          <div style={styles.buttonContainer}>
            <button style={styles.button} onClick={() => setView("projects")}>
              📂 View All Projects
            </button>
            <button style={styles.button} onClick={() => setView("resources")}>
              📚 View Resources
            </button>
            <button style={styles.button} onClick={() => setView("forum")}>
              💬 Go to Forum
            </button>
          </div>
        </>
      )}
      {view === "projects" && <Project onBack={() => setView("home")} />}
      {view === "resources" && <Resource onBack={() => setView("home")} />}
      {view === "forum" && <Forum onBack={() => setView("home")} />}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "50px 20px",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "25px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
    marginTop: "20px",
  },
  button: {
    backgroundColor: "#1DA1F2",
    color: "#fff",
    padding: "14px 24px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s ease-in-out",
    width: "250px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
  },
  buttonHover: {
    backgroundColor: "#0d8ae5",
  },
};

export default Home;