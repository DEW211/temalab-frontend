import { createStore } from 'redux';
import stateReducer from './reducers/hassState'
import tabReducer from './reducers/tabSelect'
import { combineReducers } from "redux";
const rootReducer = combineReducers({stateReducer, tabReducer})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());