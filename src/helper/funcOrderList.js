const funcOrderList = (questions) => {
  let lista = [];
  const NUMBER_FOR_RANDOM_FUNC = 0.5;
  if (questions.type === 'multiple') {
    lista = [[questions.correct_answer, 'correct-answer'],
      [questions.incorrect_answers[0], 'wrong-answer-0'],
      [questions.incorrect_answers[1], 'wrong-answer-1'],
      [questions.incorrect_answers[2], 'wrong-answer-2'],
    ];
  } else {
    lista = [[questions.correct_answer, 'correct-answer'],
      [questions.incorrect_answers[0], 'wrong-answer-0'],
    ];
  }
  return lista
    ? lista.sort(() => Math.random() - NUMBER_FOR_RANDOM_FUNC) : null;
};

export default funcOrderList;
