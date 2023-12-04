"use client";
import styles from "./page.module.css";

import data from "./api/questions.json";
import { useEffect, useState } from "react";
import { NUM_QUESTIONS } from "./constants";
import { randomQuestions } from "./utils";
import Question from "./components/Question";
import Result from "./components/Result";

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestionIndex < NUM_QUESTIONS) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  useEffect(() => {
    setQuestions(randomQuestions(data, NUM_QUESTIONS));
    setIsLoaded(true);
  }, []);

  return (
    <main className={styles.main}>
      {isLoaded &&
        (currentQuestionIndex < questions.length ? (
          <Question
            data={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        ) : (
          <Result answers={answers} />
        ))}
    </main>
  );
}
