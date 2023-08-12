import React from 'react';
import Typical from 'react-typical';
import './AOLHomepage.css';

export default function Profile() {
  return (
    <>
      <div className="profile-details">
        <div className='colz'>
            
        </div>
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
                  "Ethusiastic Dev",
                  1000,
                  "Full Stack Developer",
                  1000,
                  "Business Analyst",
                  1000,
                  "MERN STACK DEV",
                  1000,
                ]}
              />
            </h1>
            <span className="profile-role-tagline">
              knack of building applications with front and back end operations
            </span>
          </span>
        </div>
        <div className="profile-options">
          <button className="btn primary-btn">Contact</button>
          <button className="btn primary-btn">Projects</button>
          <button className="btn primary-btn">Blogs</button>
          <a href="Sacoya adams.pdf" download>
            <button className="btn highlighted-btn">Get Resume</button>
          </a>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
    </>
  );
}
