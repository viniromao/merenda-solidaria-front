import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const history = useHistory();

  const handleReceiverPage = () => {
    history.push("/receiver");
  };

  return (
    <div id="lan-main-div">
      <h2>Seja Bem-Vindo(a)!</h2>
      <div clasName="login-input-div"></div>
      <div clasName="login-input-div"></div>
      <div id="lan-buttons-div">
        <div
          onClick={() => history.push("/provider")}
          className="lan-direction-button"
          id="lan-provider-button"
        >
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
