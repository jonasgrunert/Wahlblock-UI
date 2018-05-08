import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainContainer from '../src/components/main/hoc/main';
import { Main } from '../src/components/main/base/Main';
import reducer from '../src/reducers/reducers';

let store = null;

beforeEach(() => {
  store = createStore(reducer);
});

const pendingAction = {
  type: 'react-redux-fetch/POST_REQUEST',
  resource: {
    name: 'Login',
  },
  method: 'post',
  request: {
    url: 'http://localhost:8080/api/v1/voter/login',
    method: 'post',
    body: {
      idCardNumber: 'RL9LFV9TH',
      voterKey: '36176105',
      publicKey: 'ef84d9f2a3cba9c40cadd8f9a45a77a86cf33d1b37ed93b56b330d51b54cf47b',
    },
    meta: {
      response: {},
    },
  },
  value: {
    hash: '3c244957f248ceac77e87aa252b69550eda46907f9e092d04878383200ea5968',
  },
};

describe('Integration: Info', () => {
  it('Should render Rejected or Pending', () => {
    store.dispatch(pendingAction);
    const info = mount(<Provider store={store}>
      <MainContainer />
                       </Provider>);
    expect(info
      .find(Main)
      .first()
      .props().login).toEqual(false);
  });
});
