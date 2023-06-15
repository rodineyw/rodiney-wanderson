import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import "./styles/Btns.scss";

function Btns() {
  return (
    <div className="btn-container">
      <p className="contato">Contato</p>
      <div className="btns">
        <a
          href="https://github.com/rodineyw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rodineyw/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin />
        </a>
        <a href="mailto:rodineyw@yahoo.com.br">
          <FiMail />
        </a>
      </div>
    </div>
  );
}

export default Btns;
