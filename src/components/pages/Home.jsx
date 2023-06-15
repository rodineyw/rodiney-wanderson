import React from "react";
import Animation from "../animação/TypeAnimation";
import style from "../styles/Home.scss";

function Home() {
  return (
    <section className="home">
      <div className="line1">
        <h2>Olá, Eu sou 👋</h2>
        <h2 className="subTitle">Ródiney Wanderson</h2>
        <Animation />
      </div>
    </section>
  );
}

export default Home;
