import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/dev-img.png';
const Home = () => {
    return (
        <div className="card lg:card-side shadow-xl flex-col-reverse lg:flex-row-reverse">
            <figure>
                <img className='w-[550px] lg:mr-20' src={image} alt="images" />
            </figure>
            <div className="card-body md:ml-16 lg:ml-20 pr-0 lg:mt-10 min-h-[200px] container">
                <div className='border-2 h-24 lg:h-44 px-4 border-t-0 border-r-0 border-b-0 border-l-pink-500'>
                    <h1 className='text-sm lg:text-4xl font-extrabold py-3 font-serif'><span className='text-pink-500 font-serif'>Hello,</span> This is</h1>
                    <h2 className='text-sm lg:text-5xl font-extrabold bg-clip-text font-sans'>MD SAJEDUL ISLAM</h2>
                    <h2 className='text-sm lg:text-4xl font-extrabold bg-clip-text tracking-wider font-sans'>Frontend Web <span className='text-pink-500'>D</span>eveloper</h2>
                    <div className='flex lg:justify-center py-8 lg:py-20'>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"><Link className='font-extrabold text-pink-500 transition ease-in-out delay-150 hover:translate-x-1 hover:text-white hover:scale-100 duration-300' to="">Download Resume</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;