import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
 
  return (
    <div className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
      <h3  className="font" >  Basant</h3>  
        </a>
        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-estate nav_icon"></i>
                Home
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-user nav_icon"></i>About
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-file-alt nav_icon"></i>
                Skills
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#experience"
                onClick={() => setActiveNav("#experience")}
                className={
                  activeNav === "#experience"
                    ? "nav_link active-link"
                    : "nav_link"
                }
              >
                <i className="uil uil-briefcase-alt nav_icon"></i>
                Experience{" "}
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#project"
                onClick={() => setActiveNav("#project")}
                className={
                  activeNav === "#project" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-scenery nav_icon"></i>
                Projects
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="uil uil-message nav_icon"></i>
                Contact
              </a>
            </li>
          </ul>
          <i
            onClick={() => showMenu(!Toggle)}
            className="uil uil-times nav_close"
          ></i>
        </div>
        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil-apps uil"></i>
        </div>
      </nav>
    </div>
  );
};

export default Header;
