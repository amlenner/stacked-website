// app/page.tsx (or similar location in your Next.js app)

import React from 'react';
import './styles.css'; // Make sure to import your CSS file or use global styles

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero">
        <h1>Welcome to Stacked</h1>
        <p>Your next-level lead management solution.</p>
        <button className="cta-button">Get Started</button>
      </header>

      <section className="features">
        <h2>Key Features</h2>
        <div className="feature">
          <h3>Lead Management</h3>
          <p>Efficiently track, organize, and manage your leads from start to finish.</p>
        </div>
        <div className="feature">
          <h3>Deal Analysis</h3>
          <p>Powerful tools to analyze real estate deals and maximize your profits.</p>
        </div>
        <div className="feature">
          <h3>Customizable Dashboards</h3>
          <p>Tailor your dashboard to fit your workflow and get insights fast.</p>
        </div>
      </section>

      <section className="testimonial">
        <h2>What Our Users Say</h2>
        <blockquote>"Stacked has transformed how we handle our leads and deals. A must-have for any real estate professional!" - Real Estate Pro</blockquote>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Stacked. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
