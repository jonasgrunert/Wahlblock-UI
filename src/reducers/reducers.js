import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as burgerMenu } from 'redux-burger-menu';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  burgerMenu,
  routerReducer,
  form: formReducer,
};

const reducer = combineReducers(reducers);

export default reducer;
