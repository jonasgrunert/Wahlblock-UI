import * as actions from '../src/actions/actions';

const expectedText = 'hashvalue';

const expectedAction = {
  type: actions.SET_HASHKEY,
  hash: expectedText,
};

describe('actions', () => {
  it('Creates valid add hashkey action', () => {
    expect(actions.setKey(expectedText)).toEqual(expectedAction);
  });
});
