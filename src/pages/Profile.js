import React, { useState } from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
import profilePic from "./IMG_7846.JPG"; // Importing the image

// Register required Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Sanjay",
    department: "Computer Science",
    collegeEmail: "sanjay@university.edu",
    rollNo: "CS2023456",
    phone: "(555) 123-4567",
    address: "Campus Housing, Block A",
    profileType: "Student",
    bio: "Passionate about AI, open-source, and solving real-world problems through tech.",
    personalTraits: ["Creative", "Team Player", "Problem Solver", "Curious", "Detail-Oriented"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/sanjay",
      github: "https://github.com/sanjay",
      twitter: "https://twitter.com/sanjay",
    },
    skills: {
      Python: 85,
      "Web Development": 75,
      "Machine Learning": 80,
      React: 70,
      SQL: 60,
      "Data Analysis": 90,
    },
  });

  const [isEditing, setIsEditing] = useState(false);

  // Function to handle input change
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div style={styles.container}>
      {/* Profile Header */}
      <div style={styles.profileCard}>
        <img src={profilePic} alt="Profile" style={styles.profileImage} /> {/* Updated Image */}
        <div style={{ flex: 1 }}>
          {isEditing ? (
            <input type="text" name="name" value={profile.name} onChange={handleChange} style={styles.input} />
          ) : (
            <h2>{profile.name} <span style={styles.verified}>✔</span></h2>
          )}
          <p style={styles.subText}>{profile.department} Department</p>
          {isEditing ? (
            <select name="profileType" value={profile.profileType} onChange={handleChange} style={styles.input}>
              <option>Student</option>
              <option>Teacher</option>
              <option>Admin</option>
              <option>Mod</option>
            </select>
          ) : (
            <p>Type: <strong>{profile.profileType}</strong></p>
          )}
          <button style={styles.editButton} onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Save Profile" : "Edit Profile"}
          </button>
        </div>
      </div>

      {/* Bio Section */}
      <div style={styles.infoBox}>
        <h3>About Me</h3>
        {isEditing ? (
          <textarea name="bio" value={profile.bio} onChange={handleChange} style={styles.textArea} />
        ) : (
          <p>{profile.bio}</p>
        )}
      </div>

      {/* Personal Traits */}
      <div style={styles.infoBox}>
        <h3>Personal Traits</h3>
        <div style={styles.tagsContainer}>
          {profile.personalTraits.map((trait, index) => (
            <span key={index} style={styles.tag}>{trait}</span>
          ))}
        </div>
      </div>

      {/* Skills Chart */}
      <div style={styles.infoBox}>
        <h3>Skills</h3>
        <div style={styles.chartContainer}>
          <Radar
            data={{
              labels: Object.keys(profile.skills),
              datasets: [
                {
                  label: "Skill Proficiency",
                  data: Object.values(profile.skills),
                  backgroundColor: "rgba(0, 123, 255, 0.2)",
                  borderColor: "#007BFF",
                  borderWidth: 2,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                r: {
                  suggestedMin: 0,
                  suggestedMax: 100,
                },
              },
            }}
          />
        </div>
      </div>

      {/* Contact Information */}
      <div style={styles.infoBox}>
        <h3>Contact Information</h3>
        <p>📧 {profile.collegeEmail}</p>
        <p>📞 {profile.phone}</p>
        <p>📍 {profile.address}</p>
        <p>📜 Roll No: {profile.rollNo}</p>
      </div>

      {/* Social Profiles */}
      <div style={styles.infoBox}>
        <h3>Social Profiles</h3>
        <p>🔗 LinkedIn: <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">View Profile</a></p>
        <p>🐙 GitHub: <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer">View Profile</a></p>
        <p>🐦 Twitter: <a href={profile.socialLinks.twitter} target="_blank" rel="noopener noreferrer">View Profile</a></p>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "700px",
    margin: "auto",
    overflow: "hidden",
  },
  profileCard: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },
  profileImage: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    border: "3px solid #007BFF",
    objectFit: "cover",
  },
  verified: {
    color: "#007BFF",
    fontSize: "16px",
  },
  editButton: {
    marginTop: "10px",
    padding: "10px 14px",
    background: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "6px 0",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  textArea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    minHeight: "80px",
  },
  infoBox: {
    background: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },
  chartContainer: {
    width: "100%",
    height: "350px", // Fixed height to prevent overflow
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  tag: {
    background: "#007BFF",
    color: "white",
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "14px",
  },
};

export default Profile;