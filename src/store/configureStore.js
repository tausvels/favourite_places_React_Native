import {createStore, combineReducers} from 'redux';
// ---- import all the reducers in this file ------ //
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
  places: placesReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
