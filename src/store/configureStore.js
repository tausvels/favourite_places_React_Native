import {createStore, combineReducers, compose} from 'redux';
// ---- import all the reducers in this file ------ //
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
  places: placesReducer,
});

// ---- All middlewares are enhancers ----------------- //
// ---- window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ is an enhancer ------- //
let composeEnhancers = compose;
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  // for multiple middleware, put those as args for the composeEnhancers
  return createStore(rootReducer, composeEnhancers());
};

export default configureStore;
