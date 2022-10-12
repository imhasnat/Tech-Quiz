import React, { useContext } from 'react';
import { TopicsContext } from './Root';
import Topic from './Topic';

const Topics = () => {
    const topics = useContext(TopicsContext);

    return (
        <div>
            <div className='w-10/12 md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-6 my-10 '>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;