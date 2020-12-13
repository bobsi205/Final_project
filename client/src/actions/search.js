import { GET_SEARCH, SEARCH_ERROR } from './types';
import api from '../utils/api';

export const getSearch = (field, searchQuery) => async (dispatch) => {
  try {
    const res = await api.get(`/search/${field}/${searchQuery}`);
    dispatch({
      type: GET_SEARCH,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
