import { hash } from '../src/reducers/reducers';
import { SET_HASHKEY } from '../src/actions/actions';

const expectedHash = 'hashvalue';

const action = {
  type: SET_HASHKEY,
  hash: expectedHash,
};

describe('hash reducer', () => {
  it('should return the initial state', () => {
    expect(hash(undefined, {})).toBeNull();
  });
  it('should handle SET_HASKEY', () => {
    expect(hash(null, action)).toEqual(expectedHash);
  });
});
