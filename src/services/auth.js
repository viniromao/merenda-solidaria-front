import axios from "axios";

import * as keys from "../constants/localstorageKeys";
import * as actionTypes from "../redux/actions/actions";

const baseUri = "https://appmerenda.herokuapp.com/";
// const refreshUri = "";

// const app_id = "";
// const client_secret = "";

export function handleLogin({ email, password, keepConnected, dispatch }) {
  dispatch({ type: actionTypes.LOGIN_REQUEST, payload: { loading: true } });
  axios
    .post(`${baseUri}auth/token/login/`, {
      email: email,
      password: password,
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
  console.log(email);
  console.log(first_name);
  console.log(last_name);
  console.log(tel);
  console.log(password);
  console.log(re_password);
  console.log(endereco);
  console.log(quero_doar);
  axios.post(`${baseUri}auth/users/`).then((response) => {
    console.log(response.data);
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: { access_token: response.data.auth_token },
    });
  });
}

// export function isAuthenticated({ dispatch }) {
//   dispatch({ type: actionTypes.LOGIN_REQUEST, payload: { loading: true } });
//   localStorage.getItem(keys.REFRESH_TOKEN).then((item) =>
//     item
//       ? axios
//           .post(
//             `${refreshUri}client_id=${app_id}&client_secret=${client_secret}&refresh_token=${item}`
//           )
//           .then((response) => {
//             dispatch({
//               type: actionTypes.LOGIN_SUCCESS,
//               payload: {
//                 access_token: response.data.access_token,
//                 refresh_token: response.data.refresh_token,
//                 loading: false,
//               },
//             });
//           })
//       : dispatch({
//           type: actionTypes.LOGIN_FAILURE,
//           payload: {
//             loading: false,
//           },
//         })
//   );
// }

// export function handleLogout({ dispatch }) {
//   localStorage.removeItem(keys.REFRESH_TOKEN);
//   dispatch({ type: actionTypes.LOG_OUT });
// }
