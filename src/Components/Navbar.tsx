import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  const [name, setName] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tempName, setTempName] = useState<string>("");

  // Load the name from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("visitorName");
    if (storedName) {
      setName(storedName);
    } else {
      setShowModal(true);
    }
  }, []);

  const saveName = () => {
    if (tempName.trim() !== "") {
      localStorage.setItem("visitorName", tempName);
      setName(tempName);
      setShowModal(false);
    }
  };

  const handleChangeName = () => {
    setTempName(name);
    setShowModal(true);
  };

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="logo">
          Board Game Rules
        </Link>
        <div className="right-section">
          {name && <span className="visitor-name">Welcome, {name}!</span>}
          <button className="change-name-btn" onClick={handleChangeName}>
            Change Name
          </button>
        </div>
      </motion.nav>

      {showModal && (
        <div className="name-modal">
          <div className="modal-content">
            <h2>Welcome!</h2>
            <p>Please enter your name:</p>
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              placeholder="Your name"
            />
            <div className="modal-actions">
              <button onClick={saveName}>Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;