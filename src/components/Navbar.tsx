/* eslint-disable @next/next/no-img-element */
"use client"; // This directive must be at the top of the file

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [navItems, setNavItems] = useState<string[]>([]);

  useEffect(() => {
    // Fetch dynamic data for nav items
    // This is just a placeholder, replace with your data fetching logic
    setNavItems(['HOME', 'ABOUT', 'SERVICES', 'PROJECTS', 'NEWS', 'CAREERS', 'CONTACT']);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
         
          <img src="/sriram-builders-logo.webp" alt="Sriram Builders Logo" className="logo-image" />
          <span className="company-name">Sriram Builders</span>
        </div>
        <ul className="nav-items">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">{item}</li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          background-color: #fff;
          padding: 1rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          z-index: 1000;
        }
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-container {
          display: flex;
          align-items: center;
        }
        .logo-image {
          height: 50px; /* Adjust the height as needed */
          width: auto;
          margin-left: 0.5rem;
        }
        .company-name {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .nav-items {
          display: flex;
          list-style: none;
          gap: 1rem;
        }
        .nav-item {
          cursor: pointer;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
