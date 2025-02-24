import React, { useState, useEffect } from "react";

const ChatSpace = ({ topic, onBack }) => {
  const [messages, setMessages] = useState([
    { text: "Welcome to the community! Feel free to share your thoughts here.", sender: "Creator" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button onClick={onBack} style={styles.backButton}>
          ⬅ Back
        </button>
        <h3 style={styles.topicTitle}>{topic}</h3>
        <button onClick={onBack} style={styles.messagesButton}>
          💬 Messages
        </button>
      </div>
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div key={index} style={styles.message}>
            <strong>{msg.sender}: </strong>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
    padding: "20px",
    background: "#f0f4f8",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  backButton: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#1DA1F2",
    color: "white",
  },
  messagesButton: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
  },
  topicTitle: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  chatBox: {
    flex: 1,
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "12px",
    overflowY: "auto",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  message: {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "#e1f5fe",
  },
  inputArea: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },
  input: {
    flex: 1,
    padding: "15px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  sendButton: {
    padding: "15px 30px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#1DA1F2",
    color: "white",
    cursor: "pointer",
  },
};

export default ChatSpace;
