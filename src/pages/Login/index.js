import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const history = useHistory();

  const loginHandle = () => {
    history.push("/receiver");
  };

  return (
    <div id="login-main-div">
      <div id="login-header"></div>
      <h3>Entre ou registre-se</h3>
      <input placeholder="Email" className="login-input-div"></input>
      <input placeholder="Senha" className="login-input-div"></input>
      <div id="login-bottom-div">
        <div onClick={() => loginHandle()} id="login-bottom-div-buttom">
          FAZER LOGIN
        </div>
        <span id="login-bottom-div-register-span">
          Não possui uma conta?<span>Cadastre-se</span>
        </span>
      </div>
    </div>
  );
}
