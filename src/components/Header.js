import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Header.css';
import MenuBar from "../components/MenuBar";
import projects from '../data/projects';
import react_icon from '../images/react_icon.svg'
import js_icon from '../images/js_icon.svg'
import css_icon from '../images/css_icon.svg'
import json_icon from '../images/json_icon.svg'
import markdown_icon from '../images/markdown_icon.svg'
import typescript_icon from '../images/typescript_icon.svg'
import currentpage_icon from '../images/currentpage_icon.svg'

function Header() {
  const [currentProject, setCurrentProject] = useState(null);
  const location = useLocation();
  const viewingProject = location.pathname.startsWith('/projects/');

  useEffect(() => {
    if (viewingProject) {
      const projectId = location.pathname.split('/').pop();
      const project = projects[parseInt(projectId, 10)];
      setCurrentProject(project);
    } else {
      setCurrentProject(null);
    }
  }, [location, viewingProject]);

  return (
    <header className="header-container">
      <nav className="nav-container">
        <MenuBar
          icon={ react_icon }
          name='Home.jsx'
          path="/"
          active={location.pathname === "/"}
        />
        <MenuBar
          icon={ typescript_icon }
          name='About.tsx'
          path="/about"
          active={location.pathname === "/about"}
        />
        <MenuBar
          icon={ js_icon }
          name='Projects.js'
          path="/projects"
          active={location.pathname === "/projects" && !viewingProject}
        />
        {
          currentProject && (
            <MenuBar
              icon={ currentpage_icon }
              name={`${currentProject.name}.view`}
              path={`/projects/${projects.indexOf(currentProject)}`}
              active={viewingProject && location.pathname === `/projects/${projects.indexOf(currentProject)}`}
            />
          )
        }
        <MenuBar
          icon={ json_icon }
          name='Services.json'
          path="/recommendation"
          active={location.pathname === "/recommendation"}
        />
        <MenuBar
          icon={ css_icon }
          name='Contact.css'
          path="/contact"
          active={location.pathname === "/contact"}
        />
        <MenuBar
          icon={ markdown_icon }
          name='Games.txt'
          path="/games"
          active={location.pathname === "/games"}
        />
      </nav>
    </header>
  );
}

export default Header;
