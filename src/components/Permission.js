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

  const [file, setFile] = useState(null);
  const [details, setDetails] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDetailsChange = (event) => {
    const inputText = event.target.value;
    const wordCount = inputText.split(/\s+/).length;

    // Allow only up to 50 words
    if (wordCount <= 50) {
      setDetails(inputText);
    }
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!type || !details) {
      setError("Please fill out all required fields");
      return;
    }

    // Add the new request to the list
    const newRequest = {
      type,
      description: details,
      status: "Pending",
      submitted: "Just now",
    };

    setRequests([...requests, newRequest]);

    // Clear the form fields after submission
    setType("");
    setDetails("");
    setFile(null);
    setError("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Permissions</h2>

      {/* Form to Submit Permission Request */}
      <div style={styles.formContainer}>
        <h3 style={styles.subHeading}>Submit Permission Request</h3>
        {error && <p style={styles.error}>{error}</p>}

        <input
          type="text"
          placeholder="e.g., On-Duty, Leave of Absence"
          style={styles.input}
          value={type}
          onChange={handleTypeChange}
        />
        <textarea
          placeholder="Provide details about your request (max 50 words)"
          value={details}
          onChange={handleDetailsChange}
          style={styles.textarea}
        ></textarea>
        <p style={styles.wordCount}>{50 - details.split(/\s+/).length} words remaining</p>

        <input type="date" style={styles.input} />

        {/* Proof File Upload */}
        <label style={styles.fileUploadLabel}>
          <span style={styles.fileUploadText}>Upload Proof (Optional)</span>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            style={styles.fileUploadInput}
          />
        </label>

        {file && (
          <div style={styles.fileInfo}>
            <p style={styles.fileName}>{file.name}</p>
            <p style={styles.fileSize}>{(file.size / 1024).toFixed(2)} KB</p>
          </div>
        )}

        <button style={styles.submitButton} onClick={handleSubmit}>
          Submit Request
        </button>
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
            <span
              style={{
                ...styles.statusBadge,
                backgroundColor: statusColor(req.status),
              }}
            >
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
      return "#34D399"; // Green
    case "Pending":
      return "#FBBF24"; // Yellow
    case "Declined":
      return "#F87171"; // Red
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
    backgroundColor: "#f9fafb",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "20px",
  },
  subHeading: {
    fontSize: "20px",
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
    transition: "border-color 0.3s",
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "14px",
    marginBottom: "12px",
    resize: "none",
    transition: "border-color 0.3s",
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
  wordCount: {
    fontSize: "12px",
    color: "#9ca3af",
    marginTop: "5px",
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
  fileUploadLabel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "12px",
    backgroundColor: "#f3f4f6",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    cursor: "pointer",
    transition: "background 0.2s, transform 0.2s",
  },
  fileUploadText: {
    fontSize: "14px",
    color: "#6b7280",
    marginRight: "10px",
  },
  fileUploadInput: {
    display: "none",
  },
  fileInfo: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#6b7280",
  },
  fileName: {
    fontWeight: "600",
    color: "#111827",
  },
  fileSize: {
    fontStyle: "italic",
    color: "#9ca3af",
  },
  error: {
    color: "#dc2626",
    fontSize: "14px",
    marginBottom: "10px",
  },
};

export default Permission;