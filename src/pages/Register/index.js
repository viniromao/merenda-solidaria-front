import React from "react";
import { useHistory } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const history = useHistory();
  const loginHandle = () => {
    history.push("/landing");
  };
  return (
    <div id="reg-main-div">
      <h5>Nos dê algumas informações importantes</h5>
      <input className="reg-input" placeholder="Email"></input>
      <input className="reg-input" placeholder="Primeiro Nome"></input>
      <input className="reg-input" placeholder="Sobrenome"></input>
      <input className="reg-input" placeholder="Telefone"></input>
      <input type="password" className="reg-input" placeholder="Senha"></input>
      <input
        type="password"
        className="reg-input"
        placeholder="Confirmação da senha"
      ></input>
      <input className="reg-input" placeholder="Endereço residencial"></input>
      <button onClick={() => loginHandle()} id="reg-bottom-div-buttom">
        CONTINUAR
      </button>
    </div>
  );
}
