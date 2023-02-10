const getToken = async (history) => {
  const requisicao = await (await fetch('https://opentdb.com/api_token.php?command=request')).json();
  // const data = await requisicao.json();
  localStorage.setItem('token', requisicao.token);
  history.push('/game');
};

export default getToken;
