import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Page Title */}
      <h1 style={styles.title}>Workspace</h1>

      {/* Create New Project Section */}
      <div style={styles.requestContainer}>
        <h2 style={styles.sectionTitle}>Create a New Project</h2>
        <input type="text" placeholder="Project Name" style={styles.input} />
        <textarea placeholder="Project Description" style={styles.textarea} />
        <input type="date" style={styles.input} />
        <button style={styles.button}>Create Project</button>
      </div>

      {/* Recent Projects Section */}
      <h2 style={styles.sectionTitle}>Recent Projects</h2>
      <div style={styles.projectsContainer}>
        <ProjectCard
          title="AI Chatbot Development"
          description="A chatbot using GPT API for college queries."
          status="In Progress"
          statusColor="#ffc107"
        />
        <ProjectCard
          title="Event Management App"
          description="A platform to handle college event registrations."
          status="Completed"
          statusColor="#28a745"
        />
        <ProjectCard
          title="Mentorship Portal"
          description="Connecting students with alumni for career guidance."
          status="Pending"
          statusColor="#dc3545"
        />
      </div>

      {/* Study Resources Section */}
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

// Project Card Component
const ProjectCard = ({ title, description, status, statusColor }) => (
  <div style={styles.card}>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardText}>{description}</p>
    <span style={{ ...styles.statusBadge, backgroundColor: statusColor }}>
      {status}
    </span>
  </div>
);

// Study Resource Card Component
const ResourceCard = ({ title, link, description }) => (
  <div style={styles.resourceCard}>
    <h3 style={styles.resourceTitle}>{title}</h3>
    <p style={styles.resourceText}>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>
      Access Resource →
    </a>
  </div>
);

// Styles
const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "30px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  requestContainer: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "30px",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    minHeight: "80px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "500",
    transition: "0.3s ease-in-out",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  projectsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginBottom: "30px",
  },
  card: {
    padding: "15px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    transition: "0.3s ease-in-out",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#007bff",
  },
  cardText: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },
  statusBadge: {
    position: "absolute",
    top: "15px",
    right: "15px",
    padding: "5px 10px",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "12px",
    fontWeight: "bold",
  },
  resourcesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  resourceCard: {
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    transition: "0.3s ease-in-out",
  },
  resourceTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#28a745",
  },
  resourceText: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },
  resourceLink: {
    textDecoration: "none",
    color: "#007bff",
    fontSize: "14px",
    fontWeight: "500",
    transition: "0.2s ease-in-out",
  },
  resourceLinkHover: {
    color: "#0056b3",
  },
};

export default Home;