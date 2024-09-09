import axios from 'axios';
import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
} from '../actionTypes';

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS,
  });
  try {
    const {data} = await axios.get('/product/get_products');
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: error.response.data,
    });
  }
};
