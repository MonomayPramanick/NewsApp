import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">NewsApp</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link active" onClick={() => setCategory('technology')}>
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link active" onClick={() => setCategory('business')}>
                Business
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link active" onClick={() => setCategory('health')}>
                Health
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link active" onClick={() => setCategory('sports')}>
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link active" onClick={() => setCategory('entertainment')}>
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
