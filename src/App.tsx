import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions } from './API';
import {QuestionState, Difficulty } from './API';
import { type } from '@testing-library/user-event/dist/type';


type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App = () => {

  const [Loading, setLoading] = useState(false);
  const [question, setQuestion] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS))

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(true);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
    );
    
    setQuestion(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  return (
    <div className="App">
        <h1>Quiz</h1>
        <button className='start' onClick={startTrivia}> Start </button>
        <p className='score'> Score :</p>
        <p>Loading Questions ...</p>
        {/* <QuestionCard
          questionNr = {number + 1}
          totalQuestions = {TOTAL_QUESTIONS}
          question = {questions[number].question}
          answer = {questions[number].answer}
          userAnswer = {userAnswers ? userAnswers[number]: undefined}
          callback = {checkAnswer}
        /> */}
        <button className='next'> Next question </button>
    </div>
  );
}

export default App;
