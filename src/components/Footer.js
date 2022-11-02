import React from "react";
import { BsTwitter, BsGithub } from 'react-icons/bs';
import '../styles/Footer.css';
// import English from '../images/kingdom_united_icon.png';
// import Portuguese from '../images/brazil_icon.png';

function Footer() {
  return ( 
    <footer className="footer-container">
      <div className="links-footer">
        <p>Find me at:</p>
        <a href="https://twitter.com/bankkroll_eth" 
          target="_blank" 
          className="icon-container" 
          rel="noreferrer"
        >
          <BsTwitter className="icon-footer"/>
        </a>
        <a href="https://github.com/BankkRoll" 
          target="_blank" 
          className="icon-container" 
          rel="noreferrer"
        >
          <BsGithub className="icon-footer"/>
        </a>
      </div>
      
      <p className="text-footer">Made with ❤ by: BankkRoll</p>
    </footer>
  );
}

export default Footer;