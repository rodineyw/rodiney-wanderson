import React from "react";
import "./styles/Repo.scss";
import { FiGitBranch } from "react-icons/fi";

function Repo() {
  return (
    <div className="card">
      <h1 className="title-projeto">Projetos</h1>
      <div className="container-card">
        <div className="bg">
          <a
            className="board1"
            href="https://top-filme-series.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="repo">Top Filmes e Séries</h1>
            <FiGitBranch className="Git" />
          </a>
        </div>

        <div className="bg">
          <a
            className="board2"
            href="https://blog-artec0der-v2.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="repo">Blog artec0der</h1>
            <FiGitBranch className="Git" />
          </a>
        </div>

        <div className="bg">
          <a
            className="board3"
            href="https://fake-chat-app-zeta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="repo">Fake Chat app</h1>
            <FiGitBranch className="Git" />
          </a>
        </div>

        <div className="bg">
          <a
            className="board4"
            href="https://projeto-login-swart.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="repo">Projeto Login</h1>
            <FiGitBranch className="Git" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Repo;
