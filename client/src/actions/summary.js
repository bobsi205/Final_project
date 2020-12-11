import { ADD_SUMMARY, SUMMARY_ERROR, GET_SUMMARY } from './types';
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

export const getSummary = (id) => async (dispatch) => {
  try {
    // await api.get(`/summary/view/${id}`);
    const res = await api.get(`/summary/${id}`);

    dispatch({
      type: GET_SUMMARY,
      payload: res.data,
    });
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

// export const addView = (id) => async (dispatch) => {
//   try {
//     const res = await api.get(`/summary/view/${id}`);

//     dispatch({
//       type: ADD_VIEW,
//       payload: res.data,
//     });
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
//     }

//     dispatch({
//       type: SUMMARY_ERROR,
//     });
//   }
// };
