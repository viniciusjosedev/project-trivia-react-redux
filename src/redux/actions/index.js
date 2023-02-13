export const submitLogin = (payload) => ({
  type: 'SUBMIT_LOGIN',
  payload,
});

export const attScore = (payload) => ({
  type: 'ATT_SCORE',
  payload,
});

export const clearStore = () => ({
  type: 'CLEAR_STORE',
});
