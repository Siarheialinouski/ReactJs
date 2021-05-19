import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './user/reducer.js';
import coursesReducer from './courses/reducer';
import authorsReducer from './authors/reducer.js';

const rootReducer = combineReducers({
    authors: authorsReducer,
    courses: coursesReducer,
    user: userReducer,
});

const enhancer = composeWithDevTools();

const store = createStore(rootReducer, enhancer);
export default store;
