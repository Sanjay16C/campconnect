import React from "react";

const events = [
  {
    title: "Data Structures Lecture",
    time: "10:00 AM - 11:30 AM",
    description: "Chapter 7: Binary Trees",
    color: "#3b82f6", // Blue
  },
  {
    title: "Project Meeting",
    time: "2:00 PM - 3:00 PM",
    description: "Team sync for semester project",
    color: "#22c55e", // Green
  },
  {
    title: "Assignment Deadline",
    time: "11:59 PM",
    description: "Submit Advanced Algorithms homework",
    color: "#ef4444", // Red
  },
];

const Event = () => {
  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <button style={styles.navButton}>{"◀"}</button>
        <h2 style={styles.month}>March 2024</h2>
        <button style={styles.navButton}>{"▶"}</button>
      </div>

      {/* Events List */}
      <div style={styles.eventList}>
        {events.map((event, index) => (
          <div key={index} style={styles.eventCard}>
            <div style={{ ...styles.eventIndicator, backgroundColor: event.color }}></div>
            <div style={styles.eventContent}>
              <h3 style={styles.eventTitle}>{event.title}</h3>
              <p style={styles.eventTime}>{event.time}</p>
              <p style={styles.eventDescription}>{event.description}</p>
            </div>
            <i style={styles.calendarIcon}>📅</i>
          </div>
        ))}
      </div>

      {/* Footer Controls */}
      <div style={styles.footer}>
        <button style={styles.controlButton}>Today</button>
        <button style={styles.controlButton}>Month</button>
        <button style={styles.controlButton}>Week</button>
      </div>
    </div>
  );
};

// Styles
const styles = {
  page: {
    maxWidth: "900px",
    margin: "auto",
    padding: "30px",
    fontFamily: "Inter, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "25px",
  },
  month: {
    fontWeight: "600",
  },
  navButton: {
    backgroundColor: "#f3f4f6",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    fontSize: "18px",
    cursor: "pointer",
    transition: "background 0.2s",
  },
  eventList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  eventCard: {
    display: "flex",
    alignItems: "center",
    padding: "18px 22px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
    transition: "transform 0.2s",
  },
  eventCardHover: {
    transform: "scale(1.02)",
  },
  eventIndicator: {
    width: "6px",
    height: "45px",
    borderRadius: "6px",
    marginRight: "15px",
  },
  eventContent: {
    flex: 1,
  },
  eventTitle: {
    fontSize: "17px",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "3px",
  },
  eventTime: {
    fontSize: "15px",
    color: "#6b7280",
    marginBottom: "2px",
  },
  eventDescription: {
    fontSize: "14px",
    color: "#9ca3af",
  },
  calendarIcon: {
    fontSize: "22px",
    color: "#9ca3af",
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    marginTop: "25px",
  },
  controlButton: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    padding: "10px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "bold",
    color: "#111827",
    transition: "background 0.2s",
  },
};

export default Event;