import React, { useState } from 'react';
import Option from './Option';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';


const Question = ({ quiz, serial, handleRightAnswer }) => {
    const [disableButton, setDisable] = useState(false);
    const [toggleAnswer, setToggleAnswer] = useState(true)

    // let [wrongAnswer, setWrongAnswer] = useState(0)
    const { options, question, correctAnswer } = quiz;

    const handleDisable = () => {
        setDisable(true)
    }

    const handleToggleAnswer = () => {
        setToggleAnswer(!toggleAnswer)
    }



    return (
        <div className='border border-gray-300 p-3 my-6 rounded-md shadow-md'>
            <div className='flex justify-between items-center p-2'>
                <p className='font-bold'>Question {serial}: {question}</p>
                <button onClick={handleToggleAnswer} className='rounded-sm m-2 '><FontAwesomeIcon icon={faEye} /></button>
            </div>
            <p className={`font-bold mb-6 text-center text-green-700 ${toggleAnswer ? 'hidden' : 'block'}`}>Correct Answer: {correctAnswer}</p>
            <ToastContainer />
            {
                options.map((option, index) =>
                    <Option
                        key={index}
                        index={index}
                        option={option}
                        handleDisable={handleDisable}
                        disableButton={disableButton}
                        correctAnswer={correctAnswer}
                        handleRightAnswer={handleRightAnswer}
                    ></Option>)
            }
        </div>
    );
};

export default Question;