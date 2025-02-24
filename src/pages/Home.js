import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project from "./Project";
import Resource from "./Resource";
import Forum from "./Forum";

const Home = () => {
  const [view, setView] = useState("home");

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <div style={styles.wrapper}>
      <AnimatePresence mode="wait">
        {view === "home" && (
          <motion.div
            key="home"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={styles.container}
          >
            <h2 style={styles.title}>Innovate • Collaborate • Succeed</h2>
            <p style={styles.subtitle}>
              Explore projects, share resources, and engage in discussions.
            </p>
            <div style={styles.buttonContainer}>
              <motion.button
                style={styles.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setView("projects")}
              >
                View Projects
              </motion.button>
              <motion.button
                style={styles.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setView("resources")}
              >
                View Resources
              </motion.button>
              <motion.button
                style={styles.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setView("forum")}
              >
                Go to Forum
              </motion.button>
            </div>
          </motion.div>
        )}
        {view === "projects" && (
          <motion.div
            key="projects"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Project onBack={() => setView("home")} />
          </motion.div>
        )}
        {view === "resources" && (
          <motion.div
            key="resources"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Resource onBack={() => setView("home")} />
          </motion.div>
        )}
        {view === "forum" && (
          <motion.div
            key="forum"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Forum onBack={() => setView("home")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #e0f7fa 0%, #e1bee7 100%)",
    padding: "40px 20px",
  },
  container: {
    maxWidth: "900px",
    width: "100%",
    padding: "50px 30px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    transition: "all 0.4s ease",
  },
  title: {
    fontSize: "30px",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#333",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "35px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1DA1F2",
    color: "#fff",
    padding: "16px 28px",
    fontSize: "17px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    width: "260px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  },
};

export default Home;
