import {
  GET_CATS,
  SET_LOADING,
  UNSET_LOADING,
  ADD_CAT
} from '../actions/actions_types';

const initialState = {
  cats: [],
  pageActual: 1,
  isLoading: false
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CATS:
      return {
        ...state,
        cats: payload
      };
    case ADD_CAT:
      return {
        ...state,
        cats: [...state.cats, payload]
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case UNSET_LOADING:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
export default rootReducer;
