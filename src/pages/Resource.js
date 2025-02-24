import React from "react";

const Resource = ({ onBack }) => {
  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={onBack}>
        ← Back
      </button>
      <h2 style={styles.sectionTitle}>Study Resources</h2>
      <div style={styles.resourcesContainer}>
        <ResourceCard
          title="Machine Learning Basics"
          link="https://www.coursera.org/learn/machine-learning"
          description="A great course by Andrew Ng on the fundamentals of ML."
        />
        <ResourceCard
          title="Data Structures & Algorithms"
          link="https://www.geeksforgeeks.org/data-structures/"
          description="Comprehensive guide on DSA concepts with code examples."
        />
        <ResourceCard
          title="React Documentation"
          link="https://react.dev/"
          description="Official React documentation to master frontend development."
        />
      </div>
    </div>
  );
};

const ResourceCard = ({ title, link, description }) => (
  <div style={styles.card}>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardText}>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>
      Access Resource →
    </a>
  </div>
);

const styles = {
  container: { maxWidth: "900px", margin: "auto", padding: "30px" },
  sectionTitle: { fontSize: "20px", fontWeight: "bold", marginBottom: "10px" },
  resourcesContainer: { display: "flex", flexDirection: "column", gap: "15px" },
  card: {
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  cardTitle: { fontSize: "18px", fontWeight: "bold", color: "#28a745" },
  cardText: { fontSize: "14px", color: "#555", marginBottom: "10px" },
  resourceLink: { textDecoration: "none", color: "#007bff", fontSize: "14px", fontWeight: "500" },
  backButton: {
    marginBottom: "20px",
    cursor: "pointer",
    backgroundColor: "#28a745",
    padding: "10px",
    color: "white",
    borderRadius: "5px",
    border: "none",
  },
};

export default Resource;