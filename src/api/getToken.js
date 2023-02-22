const getToken = async (history) => {
  const requisicao = await (await fetch('https://opentdb.com/api_token.php?command=request')).json();
  // const data = await requisicao.json();
  localStorage.setItem('token', requisicao.token);
  history.push('/game');
};

export const getQuestions = async (token) => {
  const getStorage = JSON.parse(localStorage.getItem('settings'));
  // console.log(getStorage);
  if (getStorage !== null) {
    const category = getStorage.category > 0 ? `category=${getStorage.category}` : null;
    const difficulty = getStorage.difficulty
    !== 'any' ? `difficulty=${getStorage.difficulty}` : null;
    const type = getStorage.type
    !== 'any' ? `type=${getStorage.type}` : null;
    const requisicao = await (await fetch(`https://opentdb.com/api.php?amount=5&token=${token}&${category}&${difficulty}&${type}`)).json();
    return requisicao;
  }
  const requisicao = await (await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)).json();
  return requisicao;
};

export default getToken;
