import React from "react";
import { useHistory } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  const history = useHistory();

  const handleReceiverPage = () => {
    history.push("/receiver");
  };

  return (
    <div id="lan-main-div">
      <h2>Seja Bem-Vindo(a)!</h2>
      <span id="lan-info-span">
        <b>Vamos começar? </b>clique em um dos botões para prosseguir com o
        cadastro, seja você responsável por uma criança matriculada na rede
        pública de educação do estado Rio de Janeiro ou se você quer ofereçer
        uma alimentação saudável voluntariamente para aqueles que precisam.
      </span>
      <div id="lan-buttons-div">
        <div className="lan-direction-button" id="lan-provider-button">
          <span className="lan-button-label">Quero doar</span>
        </div>
        <div
          onClick={() => handleReceiverPage()}
          className="lan-direction-button"
          id="lan-receiver-button"
        >
          <span className="lan-button-label">Preciso receber</span>
        </div>
      </div>
    </div>
  );
}
