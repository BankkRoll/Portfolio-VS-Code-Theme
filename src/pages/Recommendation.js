import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import recommendation from "../data/recommendation"
import "../styles/Recommendation.css"


function Projects() {
  return ( 
    <body>
    <TitleBar />
    <section className="flex-container">
      <section className="main-container">
        <Header />
        <MenuMobile />
        <main className="main-wrapper recommendation">
          <h1 className="title-recommendation">Services I Provide</h1>
          <div className="recommendation-container">
            {recommendation.map(({name, message, info}, index) => (
              <div className={`recommendation-card ${index === 1 && 'border'}`} key={name}>
                <p>{message}</p>
                <h4>{info}</h4>
                <a><h2>{name}</h2></a>
              </div>
            ))}
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
