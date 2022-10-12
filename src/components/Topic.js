import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;

    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md bg-gray-100">
                <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-600" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-wide">{name}</h2>
                        <p className="dark:text-gray-100 font-semibold">{total} Questions</p>
                    </div>
                    <Link to={`/topics/quiz/${id}`}>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-slate-400 text-gray-900">Start Quiz</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;