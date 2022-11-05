import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import '../styles/About.css';
import IconCloud from '../components/IconCloud';

function About() {
  return ( 
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper about">
            <div className="about-container">
              <span className="span-tag html">{'<html>'}</span>
              <br/>
              <span className="span-tag body">{'<body>'}</span>
              <br/>
              <span className="span-tag content">{'<h1>'}</span>
                <h1 className="title-about">Hello,</h1>
              <span className="span-tag content">{'</h1>'}</span>
              <br/>
              <span className="span-tag content">{'<p>'}</span>
                <p className="text-about">
                  My name is <span className="span-highlight">Bankkroll</span> and I love solving problems through code. Currently growing to be a <span className="span-highlight">Full Stack Developer.</span>
                </p>
                <p className="text-about">
                  My focus is to help improve WEB3 & WEB2, by developing applications/products that are <span className="span-highlight">accessible and easily functional</span> to everyone.
                </p>
                <p className="text-about last">
                Relevant skills include: <span className="span-highlight">HTML, CSS, Python, Typescript, Javascript, Next, React, Node, Tailwind, Java, Bootstrap, Jquery, Solidity, Rust, Vercel, Netlify, Ethereum, Solana, Twitter, Discord, Web3.</span>
                </p>
              <span className="span-tag content">{'</p>'}</span>
              <br/>
              <span className="span-tag body">{'</body>'}</span>
              <br/>
              <span className="span-tag html">{'</html>'}</span>
            </div>
            <IconCloud />
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </body>
  );
}

export default About;