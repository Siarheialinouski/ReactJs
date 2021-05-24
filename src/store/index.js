import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './user/reducer.js';
import coursesReducer from './courses/reducer';
import authorsReducer from './authors/reducer.js';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    authors: authorsReducer,
    courses: coursesReducer,
    user: userReducer,
});

const middleWares = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleWares));
const store = createStore(rootReducer, enhancer);

export default store;