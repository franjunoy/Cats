import axios from 'axios';
import { GET_CATS, SET_LOADING, UNSET_LOADING, ADD_CAT } from './actions_types';

export const getCats = () => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const { data } = await axios.get('http://localhost:3001/');
      dispatch({
        type: GET_CATS,
        payload: data
      });
    } catch (error) {
      console.error('Error al cargar gatos:', error);
    }
    dispatch(unsetLoading());
  };
};

export const addCat = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:3001');
      dispatch({
        type: ADD_CAT,
        payload: data
      });
    } catch (error) {
      console.error('Error al agregar un nuevo gato:', error);
    }
  };
};

export const setLoading = () => ({
  type: SET_LOADING
});

export const unsetLoading = () => ({
  type: UNSET_LOADING
});
