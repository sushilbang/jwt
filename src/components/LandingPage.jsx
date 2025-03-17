import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the MERN Auth App</h1>
      <p style={styles.text}>Please log in or register to continue.</p>
      <div style={styles.buttonContainer}>
        <Link to="/login" style={styles.button}>
          Login
        </Link>
        <Link to="/register" style={styles.button}>
          Register
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  buttonContainer: {
    display: "flex",
    gap: "1rem",
  },
  button: {
    padding: "0.8rem 1.5rem",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
};

export default LandingPage;