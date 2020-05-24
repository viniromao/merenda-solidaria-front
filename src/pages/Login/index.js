import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { handleLogin } from "../../services/auth";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const { data } = useSelector((state) => {
    return state.auth;
  });

  const [email, setEmail] = useState("char_lec@gmail.com");
  const [password, setPassword] = useState("abelha123");

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    data.access_token && history.push("/receiver");
  }, [data, history]);

  return (
    <div id="login-main-div">
      <div id="login-header"></div>
      <h3> </h3>
      <input
        placeholder="Email"
        className="login-input-div"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Senha"
        className="login-input-div"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <div id="login-bottom-div">
        <button
          onClick={() =>
            handleLogin({ email, password, keepConnected: false, dispatch })
          }
          id="login-bottom-div-buttom"
        >
          FAZER LOGIN
        </button>
        <span id="login-bottom-div-register-span">
          Não possui uma conta?
          <span onClick={() => history.push("/register")}>
            {" "}
            <b>Cadastre-se</b>
          </span>
        </span>
      </div>
    </div>
  );
}
