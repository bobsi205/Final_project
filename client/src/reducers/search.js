import { GET_SEARCH, SEARCH_ERROR } from '../actions/types';

const initialState = {
  search: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SEARCH:
      return {
        ...state,
        search: payload,
        loading: false,
      };

    case SEARCH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        search: null,
      };

    default:
      return state;
  }
}
