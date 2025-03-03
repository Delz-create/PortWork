import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { DiCode } from "react-icons/di";

function Navbar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Nav">
      <nav className="Nav-section">
        <div className="nav-section_header">
          <div className="nav-section_header-icon">
            <DiCode />
          </div>

          <div className="nav-section_header-text">
            <h1>DelzCreate</h1>
          </div>
        </div>

        <div className="nav-section-body">
          <div
            className="menu-icon"
            onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <HiMenuAlt3 />}
          </div>

          <div className="Nav-links">
            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
              <li>
                <a
                  href="#Projects"
                  to="/Projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("Projects");
                    toggleMenu();
                  }}
                  className="Projects">
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#About"
                  to="/About"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("About");
                    toggleMenu();
                  }}
                  className="About">
                  About
                </a>
              </li>

              <li>
                <a
                  href="#Contact"
                  to="/Contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("Contact");
                    toggleMenu();
                  }}
                  className="Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
