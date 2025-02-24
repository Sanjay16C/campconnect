import React from "react";

function Profile() {
  return (
    <div style={styles.container}>
      <div style={styles.profileHeader}>
        <img 
          src="campconnect/src/pages/IMG_7846.JPG" 
          alt="Profile" 
          style={styles.profileImage} 
        />
        <div>
          <h2>Sanjay <span style={styles.verified}>✔</span></h2>
          <p>Computer Science Student</p>
          <button style={styles.editButton}>Edit Profile</button>
        </div>
      </div>

      <div style={styles.infoContainer}>
        <div style={styles.infoBox}>
          <h3>Contact Information</h3>
          <p>📧 sanjay@university.edu</p>
          <p>📞 (555) 123-4567</p>
          <p>📍 Campus Housing, Block A</p>
        </div>

        <div style={styles.infoBox}>
          <h3>Academic Information</h3>
          <p>🎓 Bachelor of Computer Science</p>
          <p>📅 Year 3, Semester 2</p>
        </div>
      </div>

      <div style={styles.activityContainer}>
        <h3>Recent Activity</h3>
        <p>💬 Posted in 'Data Structures Discussion' - 2 hours ago</p>
        <p>📄 Submitted assignment for 'Advanced Algorithms' - Yesterday</p>
        <p>📅 RSVP'd to 'Tech Meetup' - 3 days ago</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "auto",
  },
  profileHeader: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "20px",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  },
  verified: {
    color: "blue",
    fontSize: "16px",
  },
  editButton: {
    marginTop: "5px",
    padding: "8px 12px",
    background: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  infoContainer: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },
  infoBox: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  activityContainer: {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
};

export default Profile;