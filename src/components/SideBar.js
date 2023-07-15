import React, { useState, useContext } from "react";
import '../styles/SideBar.css';
import react_icon from '../images/react_icon.svg'
import js_icon from '../images/js_icon.svg'
import typescript_icon from '../images/typescript_icon.svg'
import markdown_icon from '../images/markdown_icon.svg'
import css_icon from '../images/css_icon.svg'
import json_icon from '../images/json_icon.svg'
import { IoIosArrowDown,IoIosArrowForward } from 'react-icons/io';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import { Link } from "react-router-dom";
import myContext from "../context/AppContext";

function SideBar() {
  const {activeSideBar, setActiveSideBar} = useContext(myContext)
  const [open, setOpen] = useState(true);

  const closeSidebar = () => {
    setActiveSideBar(false);
  };

  return (
    <aside className={`side-bar-container ${activeSideBar && 'active'}`}>
      <div  className="explore-title">
        <p>EXPLORER</p>
      </div>
      <button type="button"
        className="explore-portfolio"
        onClick={() => setOpen(!open)}
      >
        {open ? <IoIosArrowDown /> : <IoIosArrowForward />}
        {open ? <FaFolderOpen color="#EBCB8B"/> : <FaFolder color="#EBCB8B"/>}
        <p>BR Labs</p>
      </button>
      {open && (
        <>
          <Link to="/" className="explorer-file" onClick={closeSidebar}>
            <img src={ react_icon } alt="icon" className="icon-side-bar"/>
            <p>Home.jsx</p>
          </Link>
          <Link to="/about" className="explorer-file" onClick={closeSidebar}>
            <img src={ typescript_icon } alt="icon" className="icon-side-bar"/>
            <p>About.tsx</p>
          </Link>
          <Link to="/projects" className="explorer-file" onClick={closeSidebar}>
            <img src={ js_icon } alt="icon" className="icon-side-bar"/>
            <p>Projects.js</p>
          </Link>
          <Link to="/recommendation" className="explorer-file" onClick={closeSidebar}>
            <img src={ json_icon } alt="icon" className="icon-side-bar"/>
            <p>Services.json</p>
          </Link>
          <Link to="/contact" className="explorer-file" onClick={closeSidebar}>
            <img src={ css_icon } alt="icon" className="icon-side-bar"/>
            <p>Contact.css</p>
          </Link>
          <Link to="/games" className="explorer-file" onClick={closeSidebar}>
            <img src={ markdown_icon } alt="icon" className="icon-side-bar"/>
            <p>Games.txt</p>
          </Link>
        </>
      )}
    </aside>
  );
}

export default SideBar;
