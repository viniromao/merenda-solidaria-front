import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./ImagesInput.css";
import { handleRegister } from "../../services/auth";
import { useSelector, useDispatch } from "react-redux";

export default function ImagesInput() {
  const [foto_frente, setFoto_frente] = useState();
  const [foto_tras, setFoto_tras] = useState();
  const [foto_rosto, setFoto_rosto] = useState();

  const dispatch = useDispatch();
  const history = useHistory();
  const { data } = useSelector((state) => {
    return state.register;
  });
  const loginData = useSelector((state) => {
    return state.auth;
  });

  const handleSubmit = () => {
    handleRegister({
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      tel: data.tel,
      password: data.password,
      re_password: data.re_password,
      endereco: data.endereco,
      quero_doar: data.quero_doar,
      foto_frente,
      foto_rosto,
      foto_tras,
      dispatch,
    });
  };

  useEffect(() => {
    Object.values(loginData)[0].access_token && history.push("/receiver");
  }, [history, loginData]);

  return (
    <div id="reg-main-div">
      <h5>Agora analizaremos sua identificação</h5>
      <p>Foto do rosto</p>
      <input
        accept="image/png, image/jpeg"
        type="file"
        className="img-input"
        placeholder="Email"
        value={foto_rosto}
        onChange={(e) => setFoto_rosto(e.target.value)}
      ></input>
      <p>Foto da frente da carteirinha:</p>
      <input
        accept="image/png, image/jpeg"
        type="file"
        className="img-input"
        placeholder="Primeiro Nome"
        value={foto_frente}
        onChange={(e) => setFoto_frente(e.target.value)}
      ></input>
      <p>Foto de trás da carteirinha:</p>
      <input
        accept="image/png, image/jpeg"
        type="file"
        className="img-input"
        placeholder="Sobrenome"
        value={foto_tras}
        onChange={(e) => setFoto_tras(e.target.value)}
      ></input>
      <button onClick={() => handleSubmit()} id="reg-bottom-div-buttom">
        CONTINUAR
      </button>
    </div>
  );
}
