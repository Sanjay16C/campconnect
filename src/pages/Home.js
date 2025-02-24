import React, { useState } from "react";

const Home = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [requiredSkills, setRequiredSkills] = useState("");
  
  const [projects, setProjects] = useState([
    { name: "AI Chatbot Development", description: "A chatbot using GPT API for college queries." },
    { name: "Event Management App", description: "A platform to handle college event registrations." },
    { name: "Mentorship Portal", description: "Connecting students with alumni for career guidance." }
  ]);

  const handleCreateProject = () => {
    setShowCreateModal(true);
  };

  const closeCreateModal = () => {
    setShowCreateModal(false);
  };

  const handleCreate = () => {
    const newProject = {
      name: projectName,
      description: projectDescription,
      teamSize: teamSize,
      requiredSkills: requiredSkills,
    };
    
    setProjects([...projects, newProject]);

    console.log("New Project Created:", newProject);

    setProjectName("");
    setProjectDescription("");
    setTeamSize("");
    setRequiredSkills("");

    closeCreateModal();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>Projects</h2>
      <div style={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.name}
            description={project.description}
          />
        ))}
      </div>

      <div style={styles.createButtonContainer}>
        <button
          style={styles.createButton}
          onClick={handleCreateProject}
        >
          +
        </button>
      </div>

      {showCreateModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2 style={styles.modalTitle}>Create a New Project</h2>
            <input
              type="text"
              placeholder="Project Name"
              style={styles.input}
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            <textarea
              placeholder="Project Description"
              style={styles.textarea}
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Team Size"
              style={styles.input}
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
            />
            <input
              type="text"
              placeholder="Required Skills"
              style={styles.input}
              value={requiredSkills}
              onChange={(e) => setRequiredSkills(e.target.value)}
            />
            <button
              style={styles.closeButton}
              onClick={handleCreate}
            >
              Create
            </button>
          </div>
        </div>
      )}

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

      <div style={styles.actionButtonContainer}>
        <button style={styles.actionButton}>Go to Forum</button>
        <button style={styles.actionButton}>View All Projects</button>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description }) => (
  <div style={styles.card}>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardText}>{description}</p>
    <button style={styles.button}>Join Team</button>
  </div>
);

const ResourceCard = ({ title, link, description }) => (
  <div style={styles.resourceCard}>
    <h3 style={styles.resourceTitle}>{title}</h3>
    <p style={styles.resourceText}>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>
      Access Resource →
    </a>
  </div>
);

const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "30px",
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
  createButtonContainer: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    zIndex: "1000",
  },
  createButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    fontSize: "30px",
    border: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "0.3s ease-in-out",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    width: "400px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  modalTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  closeButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "500",
    marginTop: "10px",
  },
  actionButtonContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    marginTop: "30px",
  },
  actionButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "15px 25px",
    fontSize: "18px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "500",
    transition: "0.3s ease-in-out",
    width: "48%",
  },
};

export default Home;