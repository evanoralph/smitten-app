// This config file has all the reducers used across all modules
import { combineReducers, createStore } from 'redux';

// Reducers
import * as modalReducer from '/imports/startup/configs/reducers/modal-reducer';

const reducer = combineReducers({
  ...modalReducer,
});
const Store = createStore(reducer);

export default Store;
