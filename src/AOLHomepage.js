import React from 'react';
import './AOLHomepage.css'; // Import your CSS file for styling

const AOLHomepage = () => {
  return (
    <div className="aol-homepage">
      <header className="aol-header">
        <img src="/aol-logo.png" alt="AOL Logo" className="aol-logo" />
      </header>
      <nav className="aol-nav">
        <ul>
          <li>Mail</li>
          <li>News</li>
          <li>Entertainment</li>
          <li>Search</li>
          <li>Weather</li>
        </ul>
      </nav>
      <main className="aol-content">
        {/* Content goes here */}
        <h1>Welcome to AOL</h1>
        <p>Your all-in-one destination for news, entertainment, and more!</p>
      </main>
      <footer className="aol-footer">
        <p>&copy; {new Date().getFullYear()} AOL Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AOLHomepage;
