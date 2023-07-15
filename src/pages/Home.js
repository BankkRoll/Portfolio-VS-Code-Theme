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
  const imgRef = React.useRef();

  const handleMouseMove = (event) => {
    let { left, top, width, height } = imgRef.current.getBoundingClientRect();
    let x = event.clientX - left;
    let y = event.clientY - top;

    let xp = (x / width) * 2 - 1;
    let yp = (y / height) * 2 - 1;

    imgRef.current.style.transform = `rotateX(${yp * -10}deg) rotateY(${xp * 10}deg)`;
  };


  const handleMouseLeave = (event) => {
    imgRef.current.style.transform = '';
  };

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
                steps={[
                  'Full Stack Developer', 1000,
                  'Blockchain Specialist', 1000,
                  'AI Enthusiast', 1000,
                  'Cybersecurity Specialist', 1000]}
                loop={Infinity}
                wrapper="h2"
              />

            </div>
            <img
              src={image}
              alt="bankkroll"
              className="image-perfil"
              ref={imgRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
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
