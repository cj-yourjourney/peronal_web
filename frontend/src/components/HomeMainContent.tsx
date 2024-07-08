// src/components/MainContent.tsx

import React from 'react'
import profileImage from '../images/profile.png' // Update with the correct path to your image

const HomeMainContent: React.FC = () => {
  return (
    <div className="main-content">
      <span className="badge badge-primary">DESIGN</span>
      <span className="badge badge-primary">DEVELOPMENT</span>
      <span className="badge badge-primary">MARKETING</span>

      <h1 className="main-heading">I can help your business to</h1>
      <h2 className="sub-heading">Get online and grow fast</h2>

      <button className="btn btn-primary">Resume</button>
      <button className="btn btn-outline-primary">Projects</button>

      <div>
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
    </div>
  )
}

export default HomeMainContent
