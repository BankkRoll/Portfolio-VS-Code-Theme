import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import projects from '../data/projects';
import "../styles/ProjectDetail.css";
import { FiExternalLink, FiGithub, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function ProjectDetail() {
    const { index } = useParams();
    const project = projects[index];

  return (
    <body>
        <TitleBar />
        <section className="flex-container">
        <SideBar />
        <section className="main-container">
            <Header />
            <MenuMobile />
            <main className="main-wrapper project-detail">
            <Link to="/projects" className="back-button">
                <FiArrowLeft /> Back
            </Link>
            <div className="project-image-container">
                <div className="project-image-wrapper">
                <img
                    src={project.src.startsWith('http') ? project.src : `/${project.src}`}
                    alt={project.name}
                    className="project-image"
                />
                </div>
            </div>
            <div className="project-description-container">
                <h1 className="project-title">{project.name}</h1>
                <div className="project-description-content">
                <h2 className="project-description-title">Project Description</h2>
                <p className="project-description-text">{project.description}</p>
                </div>
                <div className="project-technologies-container">
                <h3 className="project-technologies-title">Technologies Used</h3>
                <ul className="project-technologies-list">
                    {project.technologies.map((tech, i) => (
                    <span key={i} className="span-technologies">{tech}</span>
                    ))}
                </ul>
                </div>
                <div className="project-links">
                {project.repository && (
                    <a href={project.repository} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiGithub /> GitHub
                    </a>
                )}
                {project.site && (
                    <a href={project.site} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiExternalLink /> Live Site
                    </a>
                )}
                </div>
            </div>
            </main>
        </section>
        </section>
        <Footer />
    </body>
  );
}

export default ProjectDetail;
