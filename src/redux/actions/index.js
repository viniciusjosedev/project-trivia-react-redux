// const funcGetApplyMidware = (type) => (async (dispatch) => {
//   if (type === 'GET_TOKEN') {
//     const requisicao = await (await fetch('https://opentdb.com/api_token.php?command=request')).json();
//     // const data = await requisicao.json();
//     localStorage.setItem('token', requisicao.token);
//   }
// });

// export default funcGetApplyMidware;
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export const submitLogin = (payload) => ({
  type: SUBMIT_LOGIN,
  payload,
});
