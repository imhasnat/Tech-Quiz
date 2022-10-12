import React, { useContext, useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RightAnswerContext, WrongAnswerContext } from './Quiz';

const Option = ({ option, handleDisable, disableButton, correctAnswer }) => {

    const [color, setColor] = useState('bg-slate-200')
    const [rightAnswer, setRightAnswer] = useContext(RightAnswerContext)
    const [wrongAnswer, setWrongAnswer] = useContext(WrongAnswerContext)

    const handleCorrectAnswer = (e) => {

        setColor('bg-slate-400');
        handleDisable();
        setRightAnswer(rightAnswer + 1);
        toast.success('Correct Answer!', {
            position: toast.POSITION.TOP_CENTER, autoClose: 500
        });
    }
    const handleWrongAnswer = (e) => {
        setColor('bg-slate-400');
        handleDisable();
        setWrongAnswer(wrongAnswer + 1);
        toast.error('Wrong Answer!', { position: toast.POSITION.TOP_CENTER, autoClose: 500 })
    }


    return (
        <div>
            <div className='m-1'>
                <button disabled={disableButton}
                    value={option}
                    onClick={(e) => {
                        e.target.value === correctAnswer ? handleCorrectAnswer(e) : handleWrongAnswer(e)

                    }}
                    className={`w-full text-gray-900 hover:bg-slate-400 font-semibold py-2 px-4 rounded ${color}`} >{option}
                </button>
            </div>
        </div>
    );
};

export default Option;