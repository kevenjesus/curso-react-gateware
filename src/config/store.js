import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import loginReducer from "Pages/Login/reducer";
import usersReducer from "Pages/Users/reducer";

const reducers = combineReducers({
  login: loginReducer,
  users: usersReducer
});

const store = createStore(reducers, applyMiddleware(reduxThunk));

export default store;
