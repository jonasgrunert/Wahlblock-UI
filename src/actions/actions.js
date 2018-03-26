export const SET_HASHKEY = 'SET_HASHKEY';
export const SET_LOGIN = 'SET_LOGIN';

export const setKey = hash => ({
  type: SET_HASHKEY,
  hash,
});
