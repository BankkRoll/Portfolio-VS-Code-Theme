import React from "react";
import '../styles/Header.css';
import MenuBar from "../components/MenuBar";
import react_icon from '../images/react_icon.svg'
import js_icon from '../images/js_icon.svg'
import html_icon from '../images/html_icon.svg'
import css_icon from '../images/css_icon.svg'
import json_icon from '../images/json_icon.svg'


function Header() {
  return ( 
    <header className="header-container">
      <nav className="nav-container">
        <MenuBar 
          icon={ react_icon }
          name='Home.jsx'
          path="/"
        /> 
        <MenuBar 
          icon={ html_icon }
          name='About.html'
          path="/about"
        />
        <MenuBar 
          icon={ js_icon }
          name='Projects.js'
          path="/projects"
        />
        <MenuBar 
          icon={ json_icon }
          name='Services.json'
          path="/recommendation"
        /> 
        <MenuBar 
          icon={ css_icon }
          name='Contact.css'
          path="/contact"
        />
        <MenuBar 
          icon={ markdown_icon }
          name='Games.txt'
          path="/games"
        /> 
      </nav>
    </header>
  );
}

export default Header;
