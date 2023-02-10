const funcOrderList = (questions) => {
  let lista = [];
  const NUMBER_FOR_RANDOM_FUNC = 0.5;
  if (questions[0].type === 'multiple') {
    lista = questions.length > 0
      ? [[questions[0].correct_answer, 'correct-answer'],
        [questions[0].incorrect_answers[0], 'wrong-answer-0'],
        [questions[0].incorrect_answers[1], 'wrong-answer-1'],
        [questions[0].incorrect_answers[2], 'wrong-answer-2'],
      ] : null;
  } else {
    lista = questions.length > 0
      ? [[questions[0].correct_answer, 'correct-answer'],
        [questions[0].incorrect_answers[0], 'wrong-answer-0'],
      ] : null;
  }
  return lista
    ? lista.sort(() => Math.random() - NUMBER_FOR_RANDOM_FUNC) : null;
};

export default funcOrderList;
