import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Landing.css";
import * as actionTypes from "../../redux/actions/actions";
import { handleRegister } from "../../services/auth";

export default function Landing() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { data } = useSelector((state) => {
    return state.register;
  });

  const loginData = useSelector((state) => {
    return state.register;
  });

  useEffect(() => {
    Object.values(loginData)[0].access_token && history.push("/ImagesInput");
  }, [history, loginData]);

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
        <div
          onClick={() => {
            handleRegister({
              email: data.email,
              first_name: data.first_name,
              last_name: data.last_name,
              tel: data.tel,
              password: data.password,
              re_password: data.re_password,
              endereco: data.endereco,
              quero_doar: true,
              dispatch,
            });
          }}
          className="lan-direction-button"
          id="lan-provider-button"
        >
          <span className="lan-button-label">Quero doar</span>
        </div>
        <div
          onClick={() => {
            dispatch({
              type: actionTypes.REGISTER_REQUEST,
              payload: { quero_doar: false },
            });
            history.push("/login");
          }}
          className="lan-direction-button"
          id="lan-receiver-button"
        >
          <span className="lan-button-label">Preciso receber</span>
        </div>
      </div>
    </div>
  );
}
