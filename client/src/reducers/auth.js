import {
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_BOOKMARK,
  UPDATE_RECENT,
  BUY_SUMMARY,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
    case UPDATE_BOOKMARK:
    case UPDATE_RECENT:
    case BUY_SUMMARY:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}
