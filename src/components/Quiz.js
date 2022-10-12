import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Quiz = () => {
    const quizFetched = useLoaderData()
    const { name, questions } = quizFetched.data;
    const [rightAnswer, setRightAnswer] = useState(0)
    console.log(rightAnswer);
    const handleRightAnswer = (r) => {

        setRightAnswer(r + rightAnswer)
    }
    let serial = 1;
    return (
        <div className='my-16'>
            <h1 className='text-center font-bold text-3xl '>{name} Quiz </h1>
            <div className='w-10/12 md:w-8/12 mx-auto'>
                {
                    questions.map(quiz => <Question
                        key={quiz.id}
                        quiz={quiz}
                        serial={serial++}
                        handleRightAnswer={handleRightAnswer}
                    ></Question>)
                }
            </div>
            <div>
            </div>
        </div>
    );
};

export default Quiz;