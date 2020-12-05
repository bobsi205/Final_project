import { UPDATE_PROFILE, PROFILE_NOTUPDATED } from './types';
import api from '../utils/api';
import { setAlert } from './alert';

// update profile
export const updateProfile = (profile) => async (dispatch) => {
  console.log('updating');
  try {
    const res = await api.put('/profile/update', profile);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
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
