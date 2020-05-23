import React from "react";
/* import { useHistory } from "react-router-dom"; */
import "./Receiver.css";

export default function Receiver() {
  return (
    <div id="rec-main-div">
      <h2>Seja Bem-Vindo(a)!</h2>
      <span id="rec-info-span">
        <b>Vamos começar? </b>TESTE
      </span>
      <div id="rec-buttons-div">
        <div className="rec-direction-button" id="rec-provider-button">
          <span className="rec-button-label">Quero doar</span>
        </div>
        <div className="rec-direction-button" id="rec-receiver-button">
          <span className="rec-button-label">Preciso receber</span>
        </div>
      </div>
    </div>
  );
}
