import React, { useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ index, option, handleDisable, disableButton, correctAnswer, handleRightAnswer }) => {

    const [color, setColor] = useState('bg-gray-400')


    const handleCorrectAnswer = (e) => {

        setColor('bg-green-600');
        handleDisable();
        handleRightAnswer(1);
        toast.success('Correct Answer!', {
            position: toast.POSITION.TOP_CENTER, autoClose: 500
        });
    }
    const handleWrongAnswer = (e) => {
        setColor('bg-red-600');
        handleDisable();
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
                    className={`w-full text-white font-semibold py-2 px-4 rounded ${color}`} >{option}
                </button>
            </div>
        </div>
    );
};

export default Option;