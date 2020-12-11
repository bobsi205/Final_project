import {
  ADD_SUMMARY,
  GET_SUMMARY,
  SUMMARY_ERROR,
  GET_USER,
} from '../actions/types';

const initialState = {
  summary: null,
  users: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SUMMARY:
    case ADD_SUMMARY:
      return {
        ...state,
        summary: payload,
        users: [],
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        users: users.push(payload),
        loading: false,
      };
    case SUMMARY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        summary: null,
      };
    default:
      return state;
  }
}
