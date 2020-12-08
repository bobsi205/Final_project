import { ADD_SUMMARY, SUMMARY_ERROR } from '../actions/types';

const initialState = {
  summary: null,
  summaries: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_SUMMARY:
      return {
        ...state,
        summary: payload,
        loading: false,
      };
    case SUMMARY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        summary: null,
        summaries: [],
      };
    default:
      return state;
  }
}
