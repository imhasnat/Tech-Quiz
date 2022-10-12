import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

export const RightAnswerContext = createContext()
export const WrongAnswerContext = createContext()

const Quiz = () => {
    const quizFetched = useLoaderData()
    const { name, questions } = quizFetched.data;
    const [rightAnswer, setRightAnswer] = useState(0)
    const [wrongAnswer, setWrongAnswer] = useState(0)

    let serial = 1;
    return (
        <RightAnswerContext.Provider value={[rightAnswer, setRightAnswer]}>
            <WrongAnswerContext.Provider value={[wrongAnswer, setWrongAnswer]}>
                <h1 className='mt-32 md:mt-16 text-center font-bold text-3xl '>{name} Quiz </h1>
                <div className='my-4 md:flex '>
                    <div className='w-4/12 md:w-2/12 mx-auto md:fixed bg-gray-800 text-white font-semibold grid justify-center items-center border border-gray-300 p-4 my-6 rounded-md shadow-md h-32'>
                        <p className='text-green-400'>Correct: {rightAnswer}</p>
                        <p className='text-red-400'>Wrong: {wrongAnswer}</p>
                    </div>
                    <div className='w-10/12 md:w-7/12 mx-auto'>
                        {
                            questions.map(quiz => <Question
                                key={quiz.id}
                                quiz={quiz}
                                serial={serial++}
                            ></Question>)
                        }
                    </div>
                </div>
            </WrongAnswerContext.Provider>
        </RightAnswerContext.Provider>
    );
};

export default Quiz;