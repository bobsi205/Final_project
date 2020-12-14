import {
  UPDATE_PROFILE,
  PROFILE_NOTUPDATED,
  GET_PROFILE,
  PROFILE_ERROR,
} from './types';
import api from '../utils/api';
import { setAlert } from './alert';
import { useHistory } from 'react-router-dom';

// update profile
export const updateProfile = (profile) => async (dispatch) => {
  try {
    const history = useHistory();
    const res = await api.put('/profile/update', profile);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    let path = `/profile`;
    history.push(path);
    dispatch(setAlert('Profile Updated', 'success'));
  } catch (err) {
    dispatch(setAlert('Profile Not Updated', 'danger'));
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
    if (err.response)
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.data, status: err.response.status },
      });
  }
};
