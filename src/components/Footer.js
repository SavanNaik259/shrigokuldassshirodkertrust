import React from 'react';
import './App.css'; 

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Gokuldas Shirodker. All rights reserved. Developed by <a href="https://savannaik.netlify.app">Savan Naik</a></p>
    </footer>
    </>
  );
};

export default Footer;
