import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { reducer as burgerMenu } from "redux-burger-menu";

const reducers = {
  burgerMenu,
  routerReducer,
};

export const reducer = combineReducers(reducers);
