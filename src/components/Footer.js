import React from 'react';
import classes from './Footer.module.css';
import aboutUsImage from '../images.png'; 
import contactImage from '../download.jpg'; 

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.footerLinks}>
          <a href="https://www.facebook.com/profile.php?id=100046961472170">
            <img src={aboutUsImage} alt="About Us" className={classes.footerImage} />
          </a>
          <a href="https://www.instagram.com/horimiya3107/">
            <img src={contactImage} alt="Contact" className={classes.footerImage} />
          </a>
        </div>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
