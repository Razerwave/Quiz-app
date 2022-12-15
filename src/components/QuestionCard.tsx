import React from 'react'

type Props = {
    question: string;
    answer: string[];
    callback: any;
    userAnswer: boolean;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question, answer, callback, userAnswer, questionNr, totalQuestions}) => (
    <div className='number'> 
        <p>
            Question {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}}/>
        <div>
            {answer.map(answer => (
                <div>
                    <button disabled={userAnswer} onClick={callback} />
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                </div>
            ))}
        </div>
    </div>
);

export default QuestionCard;