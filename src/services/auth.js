import api from "./api";

import * as keys from "../constants/localstorageKeys";
import * as actionTypes from "../redux/actions/actions";

export function handleLogin({ email, password, keepConnected, dispatch }) {
  dispatch({ type: actionTypes.LOGIN_REQUEST, payload: { loading: true } });
  api
    .post(`auth/token/login/`, {
      email,
      password,
    })
    .then((response) => {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
          access_token: response.data.auth_token,
          refresh_token: keepConnected ? null : null,
          loading: false,
        },
      });
      keepConnected && localStorage.setItem(keys.REFRESH_TOKEN, null);
    })
    .catch((e) => {
      console.log(e);
    });
}

export function handleRegister({
  email,
  first_name,
  last_name,
  tel,
  password,
  re_password,
  endereco,
  quero_doar,
  foto_frente,
  foto_tras,
  foto_rosto,
  dispatch,
}) {
  api
    .post(`auth/users/`, {
      email,
      first_name,
      last_name,
      tel,
      password,
      re_password,
      endereco,
      quero_doar,
      foto_frente,
      foto_rosto,
      foto_tras,
    })
    .then((response) => {
      response.data.email &&
        api
          .post(`auth/token/login/`, {
            email,
            password,
          })
          .then((response) =>
            dispatch({
              type: actionTypes.LOGIN_SUCCESS,
              payload: {
                access_token: response.data.auth_token,
              },
            })
          );
    });
}
