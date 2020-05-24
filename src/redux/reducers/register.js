import * as actionTypes from "../actions/actions";

const initialState = {
  data: {
    email: null,
    first_name: null,
    last_name: null,
    tel: null,
    password: null,
    re_password: null,
    endereco: null,
    quero_doar: null,
    foto_rosto: null,
    foto_frente: null,
    foto_tras: null,
    loading: false,
  },
};

export function registerReducer(state = initialState, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.REGISTER_FAILURE:
      return {
        ...state,
        data: action.payload,
      };
  }
  return state;
}
