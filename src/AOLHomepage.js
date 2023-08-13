import React from 'react';
import Typical from 'react-typical';
import './AOLHomepage.css'; 
import Body from './Body';



export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-details">
          <div className='colz'></div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">SACOYA</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Innovative Developer",
                    2000, // Set the loop time to 2000 milliseconds
                    "Full Stack Developer",
                    2000,
                    "Business Analyst",
                    2000,
                    "MERN Stack Developer",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                knack of building applications with front and back end operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn contact-btn" style={{ backgroundColor: "brown" }}>Contact</button>
            <button className="btn primary-btn projects-btn" style={{ backgroundColor: "tan" }}>Projects</button>
            <button className="btn primary-btn blogs-btn" style={{ backgroundColor: "brown" }}>Blogs</button>
            <a href="Sacoya adams.pdf" download>
              <button className="btn highlighted-btn" style={{ backgroundColor: "tan" }}>Get Resume</button>
            </a>
          </div>
        </div>
      </div>
      <div className="profile-picture-container">
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
          <div className="arrow-container">
        <div className="arrow"></div>
      </div>
        </div>
      </div>
      <Body />
    </div>

  );
}
