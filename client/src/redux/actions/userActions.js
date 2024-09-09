import axios from 'axios';
import {
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from '../actionTypes';

export const register = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER,
  });
  try {
    let res = await axios.post('/user/register', newUser);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};

export const login = (user) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  });
  try {
    let res = await axios.post('/user/login', user);
    localStorage.setItem('token', res.data.token);
    console.log(res);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};
