import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDov4LXnpuEi9wJc8rYprGftj5UaZpb1O4",
  authDomain: "campconnect-b28e0.firebaseapp.com",
  projectId: "campconnect-b28e0",
  storageBucket: "campconnect-b28e0.firebasestorage.app",
  messagingSenderId: "698394573741",
  appId: "1:698394573741:web:b7ff894ebcf2e20d1f3f24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Permission = () => {
  const [requests, setRequests] = useState([]);
  const [file, setFile] = useState(null);
  const [details, setDetails] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDetailsChange = (event) => {
    const inputText = event.target.value;
    const wordCount = inputText.trim().split(/\s+/).length;
    if (wordCount <= 50) {
      setDetails(inputText);
    }
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const saveRequestToFirebase = async (request) => {
    try {
      await addDoc(collection(db, "permissionRequests"), request);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!type.trim() || !details.trim() || !date.trim()) {
      setError("Please fill out all required fields");
      return;
    }

    const newRequest = {
      type,
      description: details,
      status: "Pending",
      submitted: `For ${date}`,
    };

    setRequests((prevRequests) => [...prevRequests, newRequest]);
    await saveRequestToFirebase(newRequest);

    setType("");
    setDetails("");
    setDate("");
    setFile(null);
    setError("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Permissions</h2>

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
        <p style={styles.wordCount}>
          {50 - details.trim().split(/\s+/).length} words remaining
        </p>

        <input
          type="date"
          style={styles.input}
          value={date}
          onChange={handleDateChange}
        />

        <label style={styles.fileUploadLabel}>
          <span style={styles.fileUploadText}>
            Upload Proof (PDF Only, Max 5MB)
          </span>
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
            {file.size > 5120 && (
              <p style={styles.error}>File size exceeds 5MB limit.</p>
            )}
          </div>
        )}

        <button
          style={styles.submitButton}
          onClick={handleSubmit}
          disabled={file && file.size > 5120}
        >
          Submit Request
        </button>
      </div>

      <h3 style={styles.subHeading}>Recent Requests</h3>
      <div style={styles.requestList}>
        {requests.map((req, index) => (
          <div key={index} style={styles.requestCard}>
            <div>
              <h4 style={styles.requestTitle}>{req.type}</h4>
              <p style={styles.requestDescription}>{req.description}</p>
              <p style={styles.submittedText}>📅 {req.submitted}</p>
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

const statusColor = (status) => {
  switch (status) {
    case "Approved":
      return "#34D399";
    case "Pending":
      return "#FBBF24";
    case "Declined":
      return "#F87171";
    default:
      return "#e5e7eb";
  }
};

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
  },
  submitButton: {
    width: "100%",
    backgroundColor: "#3b82f6",
    color: "#fff",
    padding: "12px",
    fontSize: "15px",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
  },
  wordCount: {
    fontSize: "12px",
    color: "#9ca3af",
  },
  requestList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  requestCard: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#fff",
  },
  requestTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#111827",
  },
  statusBadge: {
    padding: "2px 2px",
    borderRadius: "5px",
    fontSize: "11px",
    fontWeight: "light",
    textTransform: "uppercase",
  },
  error: {
    color: "#ef4144",
    fontSize: "14px",
    marginBottom: "10px",
  },
  fileUploadLabel: {
    display: "block",
    cursor: "pointer",
    backgroundColor: "#e5e7eb",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "12px",
    textAlign: "center",
  },
  fileUploadText: {
    fontSize: "14px",
    color: "#374151",
  },
  fileUploadInput: {
    display: "none",
  },
  fileInfo: {
    backgroundColor: "#f3f4f6",
    padding: "10px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  fileName: {
    fontSize: "14px",
    color: "#1f2937",
  },
  fileSize: {
    fontSize: "14px",
    color: "#6b7280",
  },
};

export default Permission;
