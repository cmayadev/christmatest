export const randomQuestions = (questions, numQuestions) => {
  const shuffleQuestions = [...questions].sort(() => 0.5 - Math.random());
  return shuffleQuestions.slice(0, numQuestions);
};
