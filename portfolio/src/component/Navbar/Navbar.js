import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-gray-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Project</Link></li>
                        <li><Link to="/my">My projects</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-sm lg:text-xl text-white font-bold font-serif"><span className='text-pink-500'>MD SAJEDUL ISLAM</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex h-20">
                <ul className="menu menu-horizontal p-0">
                    <li className='text-sm lg:text-lg text-white font-bold font-sans hover:underline underline-offset-[10px]'><Link to="/">Home</Link></li>
                    <li className='text-sm lg:text-lg text-white font-bold font-sans hover:underline underline-offset-[10px]'><Link to="projects">Project</Link></li>
                    <li className='text-sm lg:text-lg text-white font-bold font-sans hover:underline underline-offset-[10px]'><Link to="my">My projects</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className='border border-orange-300 p-2 hidden lg:block lg:text-lg font-sans text-pink-500 hover:text-slate-50 lg:mr-10 font-extrabold' to="/">Contact me</Link>
            </div>
        </div>
    );
};

export default Navbar;