import React, { useState } from 'react';
import Option from './Option';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';


const Question = ({ quiz, serial }) => {
    const [disableButton, setDisable] = useState(false);
    const [toggleAnswer, setToggleAnswer] = useState(true)
    const { options, question, correctAnswer } = quiz;
    const [clicked, setClicked] = useState()

    const handleDisable = () => {
        setDisable(true)
    }

    const handleToggleAnswer = () => {
        setToggleAnswer(!toggleAnswer)
    }


    const handleClick = (option) => {
        setClicked(option)
    }

    const handleAnswer = (option) => {
        if (clicked === option && clicked === correctAnswer) return "bg-green-500";
        else if (clicked === option && clicked !== correctAnswer) return "bg-red-500";
        else if (option === correctAnswer) return "bg-green-500";
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
                        option={option}
                        handleDisable={handleDisable}
                        disableButton={disableButton}
                        correctAnswer={correctAnswer}
                        handleClick={handleClick}
                        handleAnswer={handleAnswer}
                        clicked={clicked}
                    ></Option>)
            }
        </div>
    );
};

export default Question;