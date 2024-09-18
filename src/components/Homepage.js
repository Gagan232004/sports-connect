import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome for social icons

// Modal Component
const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "12px",
          width: "80%",
          maxWidth: "600px",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{title}</h2>
        <p>{content}</p>
        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            border: "none",
            background: "transparent",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          &times;
        </button>
      </motion.div>
    </motion.div>
  );
};

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  // Modal opening function
  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Header with Modal Links */}
      <header style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#333",
        padding: "10px 0",
        zIndex: 10,
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
      }}>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 30px" }}>
          <div style={{ fontSize: "1.8rem", color: "#fff", fontWeight: "bold" }}>Sports Community</div>
          <div style={{ display: "flex", gap: "20px" }}>
            <span onClick={() => openModal('Home', 'Welcome to the Sports Community, where enthusiasts connect, share, and grow!')} style={{ cursor: "pointer", color: "#fff", fontSize: "1.1rem" }}>Home</span>
            <span onClick={() => openModal('About', 'About Sports Community: A platform to unite athletes and fans alike.')} style={{ cursor: "pointer", color: "#fff", fontSize: "1.1rem" }}>About</span>
            <span onClick={() => openModal('Contact', 'For inquiries, reach out at contact@sportscommunity.com')} style={{ cursor: "pointer", color: "#fff", fontSize: "1.1rem" }}>Contact</span>
            <span onClick={() => openModal('Login', 'Login to access personalized features of the Sports Community.')} style={{ cursor: "pointer", color: "#fff", fontSize: "1.1rem" }}>Login</span>
          </div>
        </nav>
      </header>

      {/* Main Hero Section */}
      <div style={{
        backgroundImage:"url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        position: "relative",
        padding: "0 20px",
        boxSizing: "border-box"
      }}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "4rem",
            fontWeight: "700",
            margin: "0",
            maxWidth: "800px",
            lineHeight: "1.2",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)"
          }}
        >
          Welcome to Sports Community
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "1.6rem",
            marginTop: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6",
            textShadow: "1px 1px 3px rgba(0,0,0,0.6)"
          }}
        >
          Join our community of sports enthusiasts, athletes, and fans. Stay connected, share experiences, and grow together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: "flex", gap: "20px", marginTop: "40px", flexDirection: "column", alignItems: "center" }}
        >
          <button style={{
            padding: "15px 30px",
            fontSize: "1.2rem",
            borderRadius: "30px",
            backgroundColor: "#FF5733",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
            transition: "background-color 0.3s, transform 0.3s",
          }}>
            Explore Now
          </button>
          <button style={{
            padding: "15px 30px",
            fontSize: "1.2rem",
            borderRadius: "30px",
            backgroundColor: "#1E90FF",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
            transition: "background-color 0.3s, transform 0.3s",
          }}>
            Join Us
          </button>
        </motion.div>
      </div>

      {/* Feature Section */}
      <section style={{ padding: "60px 20px", backgroundColor: "#f4f4f4", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", fontWeight: "600" }}>Why Choose Us?</h2>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              width: "300px",
              textAlign: "center"
            }}
          >
            <h3 style={{ fontSize: "1.8rem", margin: "0 0 10px 0" }}>Connect</h3>
            <p>Engage with fellow sports enthusiasts, athletes, and fans worldwide.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              width: "300px",
              textAlign: "center"
            }}
          >
            <h3 style={{ fontSize: "1.8rem", margin: "0 0 10px 0" }}>Share</h3>
            <p>Share your achievements, stories, and experiences with a supportive community.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              width: "300px",
              textAlign: "center"
            }}
          >
            <h3 style={{ fontSize: "1.8rem", margin: "0 0 10px 0" }}>Grow</h3>
            <p>Enhance your skills with tips, mentorship, and exclusive content.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Sharing Apps */}
      <footer style={{ padding: "40px 20px", backgroundColor: "#333", color: "#fff", textAlign: "center" }}>
        <div style={{ marginBottom: "20px" }}>
          <a href="https://facebook.com" style={{ margin: "0 10px", color: "#fff", fontSize: "1.8rem" }}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" style={{ margin: "0 10px", color: "#fff", fontSize: "1.8rem" }}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://whatsapp.com" style={{ margin: "0 10px", color: "#fff", fontSize: "1.8rem" }}>
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://telegram.org" style={{ margin: "0 10px", color: "#fff", fontSize: "1.8rem" }}>
            <i className="fab fa-telegram"></i>
          </a>
          <a href="https://discord.com" style={{ margin: "0 10px", color: "#fff", fontSize: "1.8rem" }}>
            <i className="fab fa-discord"></i>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Sports Community. All Rights Reserved.</p>
        <div style={{ marginTop: "10px" }}>
          <a href="#terms" style={{ color: "#fff", textDecoration: "underline", marginRight: "10px" }}>Terms & Conditions</a> | 
          <a href="#privacy" style={{ color: "#fff", textDecoration: "underline", marginLeft: "10px" }}>Privacy Policy</a>
        </div>
      </footer>

      {/* Modals */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalTitle}
        content={modalContent}
      />
    </>
  );
}

export default Home;