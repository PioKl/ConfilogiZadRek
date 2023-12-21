import React, { useState, useEffect } from "react";
import "../styles/App.scss";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Extensions from "./Extensions";
import Questions from "./Questions";
import Footer from "./Footer";
import Modal from "./Modal";

function App() {
  //Obsługa modala
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Otwieranie modala po 30 sekundach
    const modalOpentimeout = setTimeout(() => {
      openModal();
    }, 30000);

    return () => clearTimeout(modalOpentimeout);
  }, []); //useEffect zostanie uruchomiony tylko raz po zamontowaniu komponentu

  const handleHover = () => {
    // Otwieranie modala po najechaniu na określony element
    openModal();
  };

  return (
    <div className="App">
      {isModalOpen && <Modal closeModal={closeModal} />}
      <Header handleHover={handleHover} />
      <main>
        <Hero />
        <Features />
        <Extensions />
        <Questions />
      </main>
      <Footer />
    </div>
  );
}

export default App;
