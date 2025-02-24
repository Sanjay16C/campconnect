import React, { useState } from "react";

const Project = ({ onBack }) => {
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

  const handleCreateProject = () => setShowCreateModal(true);
  const closeCreateModal = () => setShowCreateModal(false);

  const handleCreate = () => {
    if (!projectName || !projectDescription) return;

    const newProject = {
      name: projectName,
      description: projectDescription,
      teamSize: teamSize,
      requiredSkills: requiredSkills,
    };

    setProjects([...projects, newProject]);

    setProjectName("");
    setProjectDescription("");
    setTeamSize("");
    setRequiredSkills("");

    closeCreateModal();
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={onBack}>
        ← Back
      </button>

      <h2 style={styles.sectionTitle}>Projects</h2>
      <div style={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.name} description={project.description} />
        ))}
      </div>

      <div style={styles.createButtonContainer}>
        <button style={styles.createButton} onClick={handleCreateProject}>
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
            <button style={styles.closeButton} onClick={handleCreate}>
              Create
            </button>
          </div>
        </div>
      )}
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
  createButtonContainer: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
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
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    width: "400px",
  },
  closeButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
  },
  backButton: {
    marginBottom: "20px",
    cursor: "pointer",
    backgroundColor: "#28a745",
    padding: "10px",
    color: "white",
  },
};

export default Project;