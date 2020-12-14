import {
  ADD_SUMMARY,
  SUMMARY_ERROR,
  GET_SUMMARY,
  GET_USER_SUMMARIES,
  ADD_COMMENT,
  UPDATE_RATING,
  UPDATE_BOOKMARK,
  UPDATE_VIEW,
  CHECK_OWN,
} from './types';
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
    console.log(err);
    dispatch(setAlert('There was an error', 'danger'));

    dispatch({
      type: SUMMARY_ERROR,
    });
  }
};

export const getSummary = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/summary/${id}`);

    dispatch({
      type: GET_SUMMARY,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch(setAlert('There was an error', 'danger'));
    dispatch({
      type: SUMMARY_ERROR,
    });
  }
};

export const getUserSummaries = () => async (dispatch) => {
  try {
    const res = await api.get('users/me');
    dispatch({
      type: GET_USER_SUMMARIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch(setAlert('There was an error', 'danger'));

    dispatch({
      type: SUMMARY_ERROR,
    });
  }
};

export const addComment = (id, comment) => async (dispatch) => {
  try {
    let text = { text: comment };
    const res = await api.post(`/summary/comment/${id}`, text);
    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch(setAlert('There was an error', 'danger'));

    dispatch({
      type: SUMMARY_ERROR,
    });
  }
};

export const addRating = (id, rating) => async (dispatch) => {
  try {
    let data = { rate: rating };
    const res = await api.put(`/summary/rate/${id}`, data);

    dispatch({
      type: UPDATE_RATING,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch(setAlert('There was an error', 'danger'));

    dispatch({
      type: SUMMARY_ERROR,
    });
  }
};

export const updateView = (id) => async (dispatch) => {
  try {
    const res = await api.put(`/summary/view/${id}`);

    dispatch({
      type: UPDATE_VIEW,
      payload: res.data,
    });
  } catch (err) {}
};

export const CheckOwn = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/summary/owned/${id}`);

    dispatch({
      type: CHECK_OWN,
      payload: res.data.owned,
    });
  } catch (err) {}
};
