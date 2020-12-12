import {
  PROFILE_NOTUPDATED,
  UPDATE_PROFILE,
  GET_PROFILE,
  PROFILE_ERROR,
} from '../actions/types';

const initialState = {
  profile: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      };
    // case CLEAR_PROFILE:
    //   return {
    //     ...state,
    //     profile: null,
    //     repos: [],
    //   };
    // case GET_REPOS:
    //   return {
    //     ...state,
    //     repos: payload,
    //     loading: false,
    //   };
    // case NO_REPOS:
    //   return {
    //     ...state,
    //     repos: [],
    //   };
    default:
      return state;
  }
}
