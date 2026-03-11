import React from 'react';
import { useNavigate } from 'react-router-dom';
import '/pages/.EventInfo.css';

function EventInfo() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h1>Tech Innovation Conference 2024</h1>
        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop" alt="Conference" className="event-image" />
        
        <div className="info-section">
          <h2>📅 Date & Time</h2>
          <p>June 15-17, 2024 | 9:00 AM - 6:00 PM</p>
        </div>

        <div className="info-section">
          <h2>📍 Venue</h2>
          <p>Tech Convention Center, Silicon Valley, CA</p>
        </div>

        <div className="info-section">
          <h2>📖 About</h2>
          <p>Join us for three days of innovation, networking, and learning. Connect with industry leaders, developers, and entrepreneurs shaping the future of technology.</p>
        </div>

        <div className="info-section">
          <h2>🎤 Key Topics</h2>
          <ul>
            <li>Artificial Intelligence & Machine Learning</li>
            <li>Cloud Computing & DevOps</li>
            <li>Web3 & Blockchain</li>
            <li>Cybersecurity</li>
          </ul>
        </div>

        <button className="btn-primary" onClick={() => navigate('/register')}>
          Register Now
        </button>
      </div>
    </div>
  );
}

export default EventInfo;
