import api from '../utils/api';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  UPDATE_BOOKMARK,
  UPDATE_RECENT,
  LOGOUT,
  BUY_SUMMARY,
} from './types';
import S3 from 'react-aws-s3';

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = (formData, profileImage) => async (dispatch) => {
  try {
    let res = await api.post('/users', formData);

    const config = {
      bucketName: 'summary-project',
      dirName: 'profileImages',
      region: 'eu-central-1',
      accessKeyId: 'AKIAIPQFO32532YL6AEA',
      secretAccessKey: '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',
    };
    const ReactS3Client = new S3(config);
    ReactS3Client.uploadFile(profileImage, res.data._id).then(async (data) => {
      let obj = { picture: data.location };
      res = await api.put('/users/picture', obj);
    });
    await Promise.all([
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      }),
      dispatch(loadUser()),
    ]);
  } catch (err) {
    console.log(err);
    dispatch(setAlert('There was an error', 'danger'));

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post('/auth', body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    console.log(err);
    dispatch(setAlert('There was an error', 'danger'));

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });

export const updateBookmark = (id) => async (dispatch) => {
  try {
    const res = await api.put(`/summary/bookmark/${id}`);

    dispatch({
      type: UPDATE_BOOKMARK,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch(setAlert('There was an error', 'danger'));

    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const updateRecent = (id) => async (dispatch) => {
  try {
    const res = await api.put(`/summary/recent/${id}`);

    dispatch({
      type: UPDATE_RECENT,
      payload: res.data,
    });
  } catch (err) {}
};

export const buySummary = (id) => async (dispatch) => {
  try {
    const res = await api.put(`/summary/buy/${id}`);
    console.log('here');
    dispatch({
      type: BUY_SUMMARY,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert('Unable to buy summary', 'danger'));
  }
};


