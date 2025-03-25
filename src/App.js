import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ContentSection />
      <Footer />
    </div>
  );
}

export default App;