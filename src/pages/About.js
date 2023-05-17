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
    <div>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper about">
            <div className="about-container">
            <span className="span-tag import">{'import { '} 
            <span className="span-highlight">
            HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Bootstrap, jQuery, Node.js, Python, Solidity, Ethereum, Solana, Web3.js, Vercel, Netlify, Twitter, Discord
            </span>
              {' } from '}
            <span className="span-highlight">
              "Relevant Skills"
              </span>
              {';'}
            </span>
            <br/>
            <br/>
            <span className="span-tag code">
              {'function '}
              <span className="span-highlight">
                About
              </span>
              {'() {'}
            </span>

              <br/>
              <br/>
              <span className="span-tag body">{'<main>'}</span>
              <br/>
              <span className="span-tag content">{'<h1>'}</span>
              <h1 className="title-about">Hello,</h1>
              <span className="span-tag content">{'</h1>'}</span>
              <br/>
              <span className="span-tag content1">{'<p>'}</span>
              <p className="text-about">
                Hello! I'm <span className="span-highlight">Bankkroll</span> and I love solving problems through code. Currently growing to be a <span className="span-highlight">Full Stack Developer.</span>
              </p>
              <p className="text-about last">
                My focus is to help improve WEB3 & WEB2, by developing applications/products that are accessible and easily functional to everyone.
              </p>
              <span className="span-tag content1">{'</p>'}</span>
              <br/>
              <span className="span-tag body">{'</main>'}</span>
              <br/>
              <br/>
              <span className="span-tag code">{`export default `}</span>
              <span className="span-highlight">
                About
              </span>
              <span className="span-tag code">{`;`}</span>

            </div>
            <IconCloud />
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </div>
  );
}

export default About;
