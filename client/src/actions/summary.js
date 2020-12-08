import { ADD_SUMMARY, SUMMARY_ERROR } from './types';
import api from '../utils/api';
import { setAlert } from './alert';

export const addSummary = (summary) => async (dispatch) => {
  try {
    const res = await api.post('/summary', summary);

    dispatch({
      type: ADD_SUMMARY,
      payload: res.data,
    });
    dispatch(setAlert('Summary Uploaded', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: SUMMARY_ERROR,
    });
  }
};
