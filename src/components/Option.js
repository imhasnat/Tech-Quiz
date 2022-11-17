import React, { useContext, useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RightAnswerContext, WrongAnswerContext } from './Quiz';

const Option = ({ clicked, option, handleDisable, disableButton, correctAnswer, handleAnswer, handleClick }) => {
    // console.log(index);
    const [color, setColor] = useState('bg-slate-200')

    // console.log(clicked);
    // const [rightAnswer, setRightAnswer] = useContext(RightAnswerContext)
    // const [wrongAnswer, setWrongAnswer] = useContext(WrongAnswerContext)

    // const handleCorrectAnswer = (e) => {

    //     setColor('bg-slate-400');
    //     handleDisable();
    //     setRightAnswer(rightAnswer + 1);
    //     toast.success('Correct Answer!', {
    //         position: toast.POSITION.TOP_CENTER, autoClose: 500
    //     });
    // }
    // const handleWrongAnswer = (e) => {
    //     setColor('bg-slate-400');
    //     handleDisable();
    //     setWrongAnswer(wrongAnswer + 1);
    //     toast.error('Wrong Answer!', { position: toast.POSITION.TOP_CENTER, autoClose: 500 })
    // }



    return (
        <div>
            <div className='m-1'>
                <button disabled={clicked}
                    value={option}
                    // onClick={(e) => {
                    //     e.target.value === correctAnswer ? handleCorrectAnswer(e) : handleWrongAnswer(e)

                    // }}
                    onClick={(e) => { handleClick(e.target.value) }}
                    className={`w-full text-gray-900 border border-1 font-semibold py-2 px-4 rounded ${clicked && handleAnswer(option)}`} >{option}
                </button>
            </div>
        </div>
    );
};

export default Option;