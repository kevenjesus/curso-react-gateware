import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import loginReducer from "Login/reducer";

const reducers = combineReducers({
  login: loginReducer
});

const store = createStore(reducers, applyMiddleware(reduxThunk));

export default store;
