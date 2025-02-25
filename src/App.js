// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Event from "./components/Event";
import Permission from "./components/Permission";

function App() {
  return (
    <Router>
      <Navbar />
      <main style={containerStyles}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/calendar" element={<Event />} />
          <Route path="/permissions" element={<Permission />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

const containerStyles = {
  maxWidth: "1200px",
  margin: "auto",
  padding: "20px",
  minHeight: "calc(100vh - 100px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export default App;
