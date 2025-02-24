import React, { useState } from "react";

const Permission = () => {
  const [requests, setRequests] = useState([
    {
      type: "On-Duty Request",
      description: "Technical Workshop Participation",
      status: "Approved",
      submitted: "2 days ago",
    },
    {
      type: "Leave of Absence",
      description: "Medical Appointment",
      status: "Pending",
      submitted: "1 day ago",
    },
    {
      type: "Late Submission",
      description: "Project delay due to illness",
      status: "Declined",
      submitted: "3 days ago",
    },
  ]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Permissions</h2>

      {/* Submit Permission Request Form */}
      <div style={styles.formContainer}>
        <h3 style={styles.subHeading}>Submit Permission Request</h3>

        <input type="text" placeholder="e.g., On-Duty, Leave of Absence" style={styles.input} />
        <textarea placeholder="Provide details about your request" style={styles.textarea}></textarea>
        
        <input type="date" style={styles.input} />
        
        <button style={styles.submitButton}>Submit Request</button>
      </div>

      {/* Recent Requests */}
      <h3 style={styles.subHeading}>Recent Requests</h3>
      <div style={styles.requestList}>
        {requests.map((req, index) => (
          <div key={index} style={styles.requestCard}>
            <div>
              <h4 style={styles.requestTitle}>{req.type}</h4>
              <p style={styles.requestDescription}>{req.description}</p>
              <p style={styles.submittedText}>📅 Submitted {req.submitted}</p>
            </div>
            <span style={{ ...styles.statusBadge, backgroundColor: statusColor(req.status) }}>
              {req.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to set status colors
const statusColor = (status) => {
  switch (status) {
    case "Approved":
      return "#d1fae5"; // Green
    case "Pending":
      return "#fef3c7"; // Yellow
    case "Declined":
      return "#fee2e2"; // Red
    default:
      return "#e5e7eb";
  }
};

// Styles
const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "30px",
    fontFamily: "Inter, sans-serif",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "20px",
  },
  subHeading: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "15px",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
    marginBottom: "30px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "14px",
    marginBottom: "12px",
  },
  submitButton: {
    width: "100%",
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    padding: "12px",
    fontSize: "15px",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.2s",
  },
  requestList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  requestCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
  },
  requestTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#111827",
  },
  requestDescription: {
    fontSize: "14px",
    color: "#6b7280",
  },
  submittedText: {
    fontSize: "13px",
    color: "#9ca3af",
    marginTop: "4px",
  },
  statusBadge: {
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
};

export default Permission;