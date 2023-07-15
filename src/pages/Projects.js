import React, { useState } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import projects from "../data/projects"
import "../styles/Projects.css"
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';


function Projects() {
  const [typeFilter] = useState('all');
  const filterProjects = () => {
    if (typeFilter === 'all') return projects;
    return projects.filter(({type}) => type.includes(typeFilter));
  }
  return (
    <body>
    <TitleBar />
    <section className="flex-container">
      <section className="main-container">
        <Header />
        <MenuMobile />
        <main className="main-wrapper projects">
        <h1 className="title-page-projects">My Projects</h1>
          <p className="info-text">(click cards for more info)</p>
          <div className="projects-container">
            {filterProjects().map(({type, name, src, repository, description, site, technologies }, index) => (
              <Link to={`/projects/${index}`} style={{ textDecoration: 'none' }}>
              <div key={index} className="card-project">
                <div className="img-container">
                  <img src={src} alt="IMG" className="img-project"/>
                </div>
                <h2 className="title-project">{name}</h2>
                <p className="description-project">{description}</p>
                <div className="technologies-container">
                  {technologies.map(tech => (
                    <span className="span-technologies">{tech}</span>
                  ))}
                </div>
                <div className="links-container">
                  <a href={repository ? repository : "#"} title="Github" target="_blank" rel="noreferrer" className={repository ? "" : "nolink"}><FiGithub /></a>
                  <a href={site ? site : "#"} title="Site" target="_blank" rel="noreferrer" className={site ? "" : "nolink"}><FiExternalLink /></a>
                </div>
              </div>
              </Link>
            ))}
            <h1 className="title-page-projects">And Many More!!</h1>
          </div>
        </main>
      </section>
      <SideBar />
    </section>
    <Footer />
  </body>
  );
}

export default Projects;
