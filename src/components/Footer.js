import React from "react";
import { BsTwitter, BsGithub, BsEnvelope } from 'react-icons/bs';
import '../styles/Footer.css';

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
        <a href="mailto:bankkroll.eth@gmail.com"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsEnvelope className="icon-footer"/>
        </a>
      </div>
      <p className="text-footer">Made with ❤ by: BankkRoll</p>
    </footer>
  );
}

export default Footer;
