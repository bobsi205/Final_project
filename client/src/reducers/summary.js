import {
  ADD_SUMMARY,
  GET_SUMMARY,
  SUMMARY_ERROR,
  GET_USER_SUMMARIES,
  ADD_COMMENT,
  UPDATE_RATING,
  UPDATE_BOOKMARK,
  UPDATE_VIEW,
} from '../actions/types';

const initialState = {
  summary: null,
  users: [],
  summaries: [],
  loadingSummary: true,
  loadingSummaries: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SUMMARY:
      return {
        ...state,
        summary: payload,
        users: [],
        loadingSummary: false,
      };
    case ADD_SUMMARY:
    case ADD_COMMENT:
    case UPDATE_RATING:
    case UPDATE_VIEW:
      return {
        ...state,
        summary: payload,
        users: [],
        loadingSummary: true,
      };
    case GET_USER_SUMMARIES:
      return {
        ...state,
        summaries: payload,
        loadingSummaries: false,
      };
    case SUMMARY_ERROR:
      return {
        ...state,
        error: payload,
        loadingSummaries: true,
        loadingSummary: true,
        summary: null,
      };
    default:
      return state;
  }
}
