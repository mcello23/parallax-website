import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.styles.css';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/" className="material-icons house-logo">
              <i className="material-icons">home</i>
            </Link>
          </li>
          <li>
            <a 
              href="https://github.com/mcello23" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github-link"
            >
              <i className="material-icons fab fa-github"></i>
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/marceloc/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin-link"
            >
              <i className="material-icons fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a 
              href="mailto:marceloadsc@gmail.com?subject=Hello&body=Hi%2C%20how%20are%20you%3F" 
              aria-label="email-link"
            >
              <i className="material-icons">mail_outline</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
