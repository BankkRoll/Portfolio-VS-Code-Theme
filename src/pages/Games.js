import React, { useState } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import "../styles/games.css"
import { FiArrowLeft } from 'react-icons/fi';

function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
}

const demos = {
    Fr00pyLand: {
      iframe: '<iframe frameborder="0" src="https://itch.io/embed-upload/6783751?color=64ee40" allowfullscreen="" width="800" height="400"><a href="https://bankkrolleth.itch.io/fr00pyland">Play Fr00pyLand on itch.io</a></iframe>',
      img: 'froopy.gif'
    },
    GalacticJungle: {
      iframe: '<iframe frameborder="0" src="https://itch.io/embed-upload/5900406?color=34ef45" allowfullscreen="" width="800" height="400"><a href="https://bankkrolleth.itch.io/budlist">Play Budlist on itch.io</a></iframe>',
      img: 'galacticjungle.png'
    },
    FrootiezShootiez: {
      iframe: '<iframe frameborder="0" src="https://itch.io/embed-upload/6275644?color=333333" allowfullscreen="" width="500" height="820"><a href="https://bankkrolleth.itch.io/play">Play Frootiez Shootiez on itch.io</a></iframe>',
      img: 'frootiezshootiez.png'
    },
};

function Games() {
  const [loadedGame, setLoadedGame] = useState(null);

  const handleLoadGame = (game) => {
    setLoadedGame(game);
  }

  const handleBack = () => {
    setLoadedGame(null);
  }

  return (
    <body>
    <TitleBar />
    <section className="flex-container">
      <section className="main-container">
        <Header />
        <MenuMobile />
        <main className="main-wrapper projects">
          <h1 className="title-page-projects">
            {loadedGame ? `${loadedGame}` : "My Custom Games"}
          </h1>
          <div className="projects-container1">
            {loadedGame ? (
                <div>
                  <Iframe iframe={demos[loadedGame].iframe}/>
                  <button className="back-button" onClick={handleBack}><FiArrowLeft /> Back</button>
                </div>
              ) : (
                <>
                  {Object.keys(demos).map(game => (
                    <div className="game-container">
                      <button className="game-button" onClick={() => handleLoadGame(game)}>
                        {`PLAY ${game}`}
                      </button>
                      <img className="game-image" src={demos[game].img} alt={`${game} thumbnail`} />
                    </div>
                  ))}
                </>
              )
            }
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
