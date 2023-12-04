import resultMessages from "../api/messages";

const Result = ({ answers }) => {
  const countResults = () => {
    const counts = { A: 0, B: 0, C: 0 };
    answers.forEach((answer) => {
      counts[answer.result]++;
    });
    return counts;
  };

  const determineMessage = () => {
    const counts = countResults();
    const maxResult = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );
    return resultMessages[maxResult];
  };

  const resultMessage = determineMessage();

  return (
    <div>
      <h1>Fin del Cuestionario</h1>
      <p>Tus respuestas:</p>
      <ul>
        {answers &&
          answers.map((option, index) => <li key={index}>{option.answer}</li>)}
      </ul>
      <p>Resultado:</p>
      <p>{resultMessage}</p>
    </div>
  );
};

export default Result;
