const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
  case 'SUBMIT_LOGIN':
    return {
      ...state,
      ...actions.payload,
    };
  case 'ATT_SCORE':
    return ({ ...state, score: state.score + actions.payload });
  default:
    return state;
  }
};
export default player;
