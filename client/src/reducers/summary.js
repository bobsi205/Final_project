import {
  ADD_SUMMARY,
  GET_SUMMARY,
  SUMMARY_ERROR,
  GET_USER_SUMMARIES,
  ADD_COMMENT,
  UPDATE_RATING,
  UPDATE_BOOKMARK,
} from '../actions/types';

const initialState = {
  summary: null,
  users: [],
  summaries: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SUMMARY:
    case ADD_SUMMARY:
    case ADD_COMMENT:
    case UPDATE_RATING:
    case UPDATE_BOOKMARK:
      return {
        ...state,
        summary: payload,
        users: [],
        loading: false,
      };
    case GET_USER_SUMMARIES:
      return {
        ...state,
        summaries: payload,
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
