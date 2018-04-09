import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as burgerMenu } from 'redux-burger-menu';
import { reducer as formReducer } from 'redux-form';
import { reducer as fetchReducer } from 'react-redux-fetch';

import { SET_HASHKEY } from '../actions/actions';

// Reducer for private hash key
const hash = (state = null, action) => {
  switch (action.type) {
    case SET_HASHKEY:
      return action.hash;
    default:
      return state;
  }
};

// Reducer Combiner
const reducers = {
  // custom private hash
  hash,
  // Sidemenu
  burgerMenu,
  // Routing
  routerReducer,
  // Form
  form: formReducer,
  // REST-API
  repository: fetchReducer,
};

const reducer = combineReducers(reducers);

export default reducer;
