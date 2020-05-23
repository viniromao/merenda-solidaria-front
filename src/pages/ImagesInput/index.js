import React from "react";
import { useHistory } from "react-router-dom";
import "./ImagesInput.css";

export default function ImagesInput() {
  const history = useHistory();

  const loginHandle = () => {
    history.push("/receiver");
  };

  return (
    <div id="reg-main-div">
      <h5>Agora analizaremos sua identificação</h5>
      <p>Foto do rosto</p>
      <input
        accept="image/png, image/jpeg"
        type="file"
        className="img-input"
        placeholder="Email"
      ></input>
      <p>Foto da frente da carteirinha:</p>
      <input
        accept="image/png, image/jpeg"
        type="file"
        className="img-input"
        placeholder="Primeiro Nome"
      ></input>
      <p>Foto de trás da carteirinha:</p>
      <input
        accept="image/png, image/jpeg"
        type="file"
        className="img-input"
        placeholder="Sobrenome"
      ></input>
      <button onClick={() => loginHandle()} id="reg-bottom-div-buttom">
        CONTINUAR
      </button>
    </div>
  );
}
