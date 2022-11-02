import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import '../styles/Home.css';
import image from '../images/img-perfil.png';
import MenuMobile from "../components/MenuMobile";
import Typical from 'react-typical';

function Home() {
  return ( 
    <body>
      <TitleBar />
      <section className="flex-container">
        <SideBar />
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper home">
            <div className="home-content">
              <p><span className="span">{'<'}</span>Hello 👋 I am</p>
              <h1>BankkRoll <span className="span">{'/>'}</span> </h1>
              <Typical 
                steps={['Full Stack Developer', 1000, 'Security Specialist', 1000, 'Problem Solver', 1000]}
                loop={Infinity}
                wrapper="h2"
              />              
            </div>
            <img 
              src={image} alt="bankkroll" 
              className="image-perfil"
            />
          </main>
        </section>
        {/* <SideBar /> */}
      </section>
      <Footer />
    </body>
  );
}

export default Home;