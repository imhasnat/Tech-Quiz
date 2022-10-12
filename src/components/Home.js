import React, { useContext } from 'react';
import { TopicsContext } from './Root'
import Topic from './Topic';
import man from '../images/man.jpg'

const Home = () => {
    const topics = useContext(TopicsContext);

    const myStyle = {
        backgroundImage:
            `url(${man})`,
        height: '300px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };


    return (
        <div className=''>
            <div >
                <div className=" my-10 text-gray-50">
                    <div className="w-10/12 h-full grid grid-cols-12 mx-auto bg-gray-900">


                        <div className="bg-no-repeat h-full bg-cover bg-gray-700 col-span-full lg:col-span-4" style={myStyle}></div>

                        <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10 order-2">
                            <h1 className="text-3xl font-semibold">Lorem ipsum dolor sit.</h1>
                            <p className="flex-1 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reprehenderit adipisci tempore voluptas laborum quod.</p>

                        </div>
                    </div>
                </div>
            </div>
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

export default Home;