import React, { useState } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import games from "../data/games";
import "../styles/games.css"
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import ReactDOM from "react-dom";


function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }
  const demos = {
    Fr00py:
      '<iframe frameborder="0" src="https://itch.io/embed-upload/6783751?color=64ee40" allowfullscreen="" width="800" height="400"><a href="https://bankkrolleth.itch.io/fr00pyland">Play Fr00pyLand on itch.io</a></iframe>',
  
    Galactic:
      '<iframe frameborder="0" src="https://itch.io/embed-upload/5900406?color=34ef45" allowfullscreen="" width="800" height="400"><a href="https://bankkrolleth.itch.io/budlist">Play Budlist on itch.io</a></iframe>',
    
    Frootiez:
      '<iframe frameborder="0" src="https://itch.io/embed-upload/6275644?color=333333" allowfullscreen="" width="500" height="820"><a href="https://bankkrolleth.itch.io/play">Play Frootiez Shootiez on itch.io</a></iframe>'
  
    };
function Games() {
  const [typeFilter] = useState('all');
  const filterGames = () => {
    if (typeFilter === 'all') return games;
    return games.filter(({type}) => type.includes(typeFilter));
  }
  return ( 
    <body>
    <TitleBar />
    <section className="flex-container">
      <section className="main-container">
        <Header />
        <MenuMobile />
        <main className="main-wrapper projects">
          <h1 className="title-page-projects">My Custom Games</h1>
          <div className="projects-container1">
            <Iframe iframe={demos["Fr00py"]}/>
            <br></br>
            <Iframe iframe={demos["Galactic"]}/>
            <br></br>
            <Iframe iframe={demos["Frootiez"]}/>
                  
          </div>
        </main>
      </section>
      <SideBar />
    </section>
    <Footer />
  </body>
  );
}

export default Games;