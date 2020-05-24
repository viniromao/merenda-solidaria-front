import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Register.css";
import * as actionTypes from "../../redux/actions/actions";

export default function Register() {
  const [email, setEmail] = useState();
  const [first_name, setFirst_name] = useState();
  const [last_name, setLast_name] = useState();
  const [tel, setTel] = useState();
  const [password, setPassword] = useState();
  const [re_password, setRepassword] = useState();
  const [endereco, setEndereco] = useState();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/landing");
    dispatch({
      type: actionTypes.REGISTER_REQUEST,
      payload: {
        email: email,
        first_name,
        last_name,
        tel,
        password,
        re_password,
        endereco,
      },
    });
  };

  return (
    <div id="reg-main-div">
      <h5>Nos dê algumas informações importantes</h5>
      <input
        className="reg-input"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        className="reg-input"
        placeholder="Primeiro Nome"
        value={first_name}
        onChange={(e) => {
          setFirst_name(e.target.value);
        }}
      ></input>
      <input
        className="reg-input"
        placeholder="Sobrenome"
        value={last_name}
        onChange={(e) => {
          setLast_name(e.target.value);
        }}
      ></input>
      <input
        className="reg-input"
        placeholder="Telefone"
        value={tel}
        onChange={(e) => {
          setTel(e.target.value);
        }}
      ></input>
      <input
        type="password"
        className="reg-input"
        placeholder="Senha"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <input
        type="password"
        className="reg-input"
        placeholder="Confirmação da senha"
        value={re_password}
        onChange={(e) => {
          setRepassword(e.target.value);
        }}
      ></input>
      <input
        className="reg-input"
        placeholder="Endereço residencial"
        value={endereco}
        onChange={(e) => {
          setEndereco(e.target.value);
        }}
      ></input>
      <button
        onClick={() =>
          email &&
          first_name &&
          last_name &&
          tel &&
          password &&
          re_password &&
          endereco
            ? handleSubmit()
            : alert(
                "Todos os campos devem ser preeenchidos antes de prosseguirmos com o cadastro!"
              )
        }
        id="reg-bottom-div-buttom"
      >
        CONTINUAR
      </button>
    </div>
  );
}
