import React from 'react';
import mysoreImage from '../assets/mysore.jpg';

function Hero({ contentSectionRef }) {
  const handleScrollDown = () => {
    contentSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${mysoreImage})`,
        backgroundSize: '50%', // Reduce the image size to 50% of its original dimensions
        backgroundPosition: 'left', // Keep the image centered
        backgroundRepeat: 'no-repeat', // Prevent tiling
      }}
    >
      <h1>Welcome to Happy Holidays</h1>
      <p>Welcome to Happy Holidays (HAHO), where we are committed to crafting exceptional travel experiences tailored to your unique preferences. Whether you dream of exploring cultural landmarks, relaxing in serene landscapes, or indulging in luxurious getaways, our expertly designed packages ensure a seamless and unforgettable journey.</p>
      <button>Get Started</button>
        <span>↓</span>
    </section>
  );
}

export default Hero;