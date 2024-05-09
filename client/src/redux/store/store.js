import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Importa la función thunk directamente

import rootReducer from '../reducer/reducer'; // Importa tu reducer principal

const middleware = [thunk]; // Crea un array de middleware con la función thunk

const store = createStore(rootReducer, applyMiddleware(...middleware)); // Aplica el middleware al createStore

export default store;
