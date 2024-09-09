import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/productReducer';
import rootReducer from './reducers/rootReducer';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devTools)
);

export default store;
