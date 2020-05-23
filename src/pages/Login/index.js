import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const history = useHistory();

  const handleReceiverPage = () => {
    history.push("/receiver");
  };

  return (
    <div id="login-main-div">
      <div id="login-header"></div>
      <h2>Seja Bem-Vindo(a)!</h2>
      <div className="login-input-div"></div>
      <div className="login-input-div"></div>
    </div>
  );
}
