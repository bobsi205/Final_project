import {
  UPDATE_PROFILE,
  PROFILE_NOTUPDATED,
  GET_PROFILE,
  PROFILE_ERROR,
} from './types';
import api from '../utils/api';
import { setAlert } from './alert';

// update profile
export const updateProfile = (profile) => async (dispatch) => {
  try {
    const res = await api.put('/profile/update', profile);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert('Profile Updated', 'success'));
    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_NOTUPDATED,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  try {
    const res = await api.get('/profile/me');
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
