import * as actionTypes from "../actions/actions";

const initialState = {
  data: {
    access_token: null,
    refresh_token: null,
    loading: false,
    keepConnected: false,
  },
};

export function authReducer(state = initialState, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.LOG_OUT:
      return {
        ...state,
        data: {
          access_token: null,
          refresh_token: null,
          loading: false,
          keepConnected: false,
        },
      };
  }
  return state;
}
