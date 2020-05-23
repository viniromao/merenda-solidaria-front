import axios from "axios";

import * as keys from "../constants/asyncstorageKeys";
import * as actionTypes from "../redux/actions/actions";

const baseUri = "https://appmerenda.herokuapp.com/auth/token/login";
const refreshUri = "";

const app_id = "";
const client_secret = "";

export function handleLogin({ email, password, keepConnected, dispatch }) {
  dispatch({ type: actionTypes.LOGIN_REQUEST, payload: { loading: true } });
  axios
    .post(`${baseUri}/auth/`, {
      email: email,
      password: password,
    })
    .then((response) => {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
          access_token: response.data.access_token,
          refresh_token: keepConnected ? response.data.refresh_token : null,
          loading: false,
        },
      });
      keepConnected &&
        localStorage.setItem(keys.REFRESH_TOKEN, response.data.refresh_token);
    })
    .catch((e) => {
      console.log(e);
    });
}

export function isAuthenticated({ dispatch }) {
  dispatch({ type: actionTypes.LOGIN_REQUEST, payload: { loading: true } });
  localStorage.getItem(keys.REFRESH_TOKEN).then((item) =>
    item
      ? axios
          .post(
            `${refreshUri}client_id=${app_id}&client_secret=${client_secret}&refresh_token=${item}`
          )
          .then((response) => {
            dispatch({
              type: actionTypes.LOGIN_SUCCESS,
              payload: {
                access_token: response.data.access_token,
                refresh_token: response.data.refresh_token,
                loading: false,
              },
            });
          })
      : dispatch({
          type: actionTypes.LOGIN_FAILURE,
          payload: {
            loading: false,
          },
        })
  );
}

export function handleLogout({ dispatch }) {
  localStorage.removeItem(keys.REFRESH_TOKEN);
  dispatch({ type: actionTypes.LOG_OUT });
}
