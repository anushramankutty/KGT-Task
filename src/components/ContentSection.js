import React from 'react';

function ContentSection() {
  return (
    <section className="content">
      <h2>Our Features</h2>
      <div className="features">
        <div className="feature">
          <h3>Adventure</h3>
          <p>Experience thrilling activities in breathtaking locations</p>
        </div>
        <div className="feature">
          <h3>Comfort</h3>
          <p>Stay in top-rated accommodations for a relaxing journey</p>
        </div>
        <div className="feature">
          <h3>Guided Tours</h3>
          <p>Explore new places with expert local guides</p>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;