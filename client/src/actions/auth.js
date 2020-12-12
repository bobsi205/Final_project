import api from '../utils/api';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
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
    const config = {
      bucketName: 'summary-project',
      dirName: 'profileImages',
      region: 'eu-central-1',
      accessKeyId: 'AKIAIPQFO32532YL6AEA',
      secretAccessKey: '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',
    };
    const ReactS3Client = new S3(config);

    ReactS3Client.uploadFile(
      profileImage,
      formData.firstName.concat(formData.lastName)
    )
      .then(async (data) => {
        console.log(data);
        let newFormData = { ...formData, picture: data.location };
        const res = await api.post('/users', newFormData);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        dispatch(loadUser());
      })
      .catch((err) => console.error(err));
    // const res = await api.post('/users', formData);
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

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
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
