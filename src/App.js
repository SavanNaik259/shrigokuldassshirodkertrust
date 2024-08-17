import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SeoManager from './components/SeoManager';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ngoKeywords } from './keywords';

import NavigationBar from './components/Navbar';
import Home from './components/Home';
import Programs from './components/Programs';
import About from './components/About';
import Services from './components/Services'; 
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Routes>
    <NavigationBar />
        <Route path="/" element={
          <>
            <SeoManager
              page="home"
              keywords={ngoKeywords}
              title="Home - Shri. Gokuldas S Shirodker Trust"
              description="Welcome to Shri. Gokuldas S Shirodker Trust. Learn about our mission, vision, and the impactful work we do across India."
            />
            <Home />
            <About />
            <Programs />
            <Services />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/programs" element={
          <>
            <SeoManager
              page="programs"
              keywords={ngoKeywords}
              title="Programs - Our Initiatives and Services"
              description="Discover our programs focused on education, healthcare, women empowerment, and more. See how we are making a difference."
            />
            <Programs />
            <Footer />
          </>
        } />
        <Route path="/services" element={
          <>
            <SeoManager
              page="services"
              keywords={ngoKeywords}
              title="Services - Our Offerings"
              description="Explore the range of services provided by Shri. Gokuldas S Shirodker Trust, including education, healthcare, and social welfare initiatives."
            />
            <Services />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <SeoManager
              page="about"
              keywords={ngoKeywords}
              title="About Us - Shri. Gokuldas S Shirodker Trust"
              description="Learn more about Shri. Gokuldas S Shirodker Trust, our history, team, and our commitment to social change in India."
            />
            <About />
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <SeoManager
              page="contact"
              keywords={ngoKeywords}
              title="Contact Us - Get in Touch"
              description="Reach out to us for any inquiries, partnership opportunities, or to support our causes. We look forward to hearing from you."
            />
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;
