import React from 'react';
import man from '../images/man.jpg'
import Topics from './Topics';

const Home = () => {
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
                            <h1 className="text-3xl font-semibold">YOU KNOW ,YOU GROW!!</h1>
                            <p className="flex-1 pt-2">Unlocking knowledge at the speed of thought. Give some quiz and determine how much effort you have to give to pierce through your target</p>

                        </div>
                    </div>
                </div>
            </div>
            <Topics></Topics>
        </div>
    );
};

export default Home;