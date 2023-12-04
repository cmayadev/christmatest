const Question = ({ data, onAnswer }) => {
  const shuffleAnswers = (answers) => {
    return [...answers].sort(() => Math.random() - 0.5);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <h2>{data.question}</h2>
      {data.answers &&
        shuffleAnswers(data.answers).map((option, index) => (
          <button key={index} onClick={() => onAnswer(option)}>
            {option.answer}
          </button>
        ))}
    </div>
  );
};

export default Question;
