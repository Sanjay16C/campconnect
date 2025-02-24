import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project from "./Project";
import Resource from "./Resource";
import Forum from "./Forum";
import ChatSpace from "./ChatSpace";

const Home = () => {
  const [view, setView] = useState("home");
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setView("chat");
  };

  const handleJoinCommunity = () => {
    setView("chat");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } },
  };

  const pageTransition = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
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
                whileHover={{ scale: 1.1, backgroundColor: "#0d8ae0" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setView("projects")}
              >
                🚀 View Projects
              </motion.button>
              <motion.button
                style={styles.button}
                whileHover={{ scale: 1.1, backgroundColor: "#0d8ae0" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setView("resources")}
              >
                📚 View Resources
              </motion.button>
              <motion.button
                style={styles.button}
                whileHover={{ scale: 1.1, backgroundColor: "#0d8ae0" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setView("forum")}
              >
                💬 Go to Forum
              </motion.button>
            </div>
          </motion.div>
        )}
        {view === "projects" && (
          <motion.div
            key="projects"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Project onBack={() => setView("home")} />
          </motion.div>
        )}
        {view === "resources" && (
          <motion.div
            key="resources"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Resource onBack={() => setView("home")} />
          </motion.div>
        )}
        {view === "forum" && (
          <motion.div
            key="forum"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Forum
              onBack={() => setView("home")}
              onTopicClick={handleTopicClick}
              onJoinCommunity={handleJoinCommunity} // ✅ Added Join Community Handler
            />
          </motion.div>
        )}
        {view === "chat" && (
          <motion.div
            key="chat"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ChatSpace
              topic={selectedTopic}
              onBack={() => setView("forum")}
            />
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
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    padding: "40px 20px",
  },
  container: {
    maxWidth: "900px",
    width: "100%",
    padding: "50px 30px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.1)",
    transition: "all 0.5s ease",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "20px",
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
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    width: "260px",
    transition: "all 0.3s ease",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
  },
};
const HomePage = () => {
  const [isJoined, setIsJoined] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showEntryMessage, setShowEntryMessage] = useState(false);

  const handleJoinCommunity = () => {
    setIsJoined(true);
    setShowEntryMessage(true);
    setTimeout(() => {
      setShowEntryMessage(false); // Hide entry message after 2 seconds
    }, 2000);
  };

  const handleEnterChat = () => {
    setShowChat(true);
  };

  return (
    <div>
      {!showChat ? (
        <>
          <Forum
            topic="Community Forum"
            isJoined={isJoined}
            onJoinCommunity={handleJoinCommunity}
            onEnterChat={handleEnterChat}
          />
          {showEntryMessage && (
            <div style={{ textAlign: "center", marginTop: "20px", color: "#4CAF50" }}>
              🎉 You have joined the community! Click "Messages" to enter the chat.
            </div>
          )}
        </>
      ) : (
        <ChatSpace topic="Community Forum" onBack={() => setShowChat(false)} />
      )}
    </div>
  );
};




export default Home;
