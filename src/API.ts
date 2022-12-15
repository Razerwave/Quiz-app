import { type } from 'os';
import React from 'react'
import QuestionCard from './components/QuestionCard';
import { shuffleArray } from './utils';


export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answer: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[] };



export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard',
}

export const fetchQuizQuestions =async (amount: number, difficulty= Difficulty) => {
    const endpoint = 'https://opentdb.com/api.php?amount={amount}&difficulty={difficulty}&type=multiple'
    const data = await (await fetch(endpoint)).json();
    console.log(data);
    return data.result.map((questions: Question) => (
        {
            ...questions,
            answer: shuffleArray([...questions.incorrect_answer, questions.correct_answer]),
        }
    ))
}