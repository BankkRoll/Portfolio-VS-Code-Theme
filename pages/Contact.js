import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import "../styles/Contact.css"
import contacts from "../data/contacts";

function Contact() {
  return ( 
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper contact">
            <div className="title-container">
              <h1 className="title-contact">🤙 Hey! Looking to get in touch?</h1>
              <h2 className="message-contact">Contact me by one of the ways provided!</h2>
            </div>
            <div className="list-contact">
              <p className="class-name line">.contact_me<span className="element">{' {'}</span></p>
              {
                contacts.map(({social, href, text}) => (
                  <p className="key-name line" key={social}>{social}: 
                    <a href={href} target="_blank" rel="noreferrer">{text}</a>;
                  </p>
                ))
              }
              <p className="element line">{'}'}</p>
            </div>
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </body>
  );
}

export default Contact;