import React from "react";
import Footer from "./components/Footer";
import Repo from "./components/Repo";
import Sobre from "./components/Sobre";
import Btns from "./components/btns";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="app-container" id="grid-areas">
      <section className="home">
        <Home />
      </section>

      <section className="sobre">
        <Sobre />
      </section>

      <section className="card">
        <Repo />
      </section>

      <div className="btn">
        <Btns />
      </div>

      <section className="footer-s">
        <Footer />
      </section>
    </div>
  );
}

export default App;
