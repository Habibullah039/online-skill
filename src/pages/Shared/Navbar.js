import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navbar = () => {

    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('token');

    }


    return (
        <div className='navbar text-white bg-[#0E1D55] py-6  md:px-[100px] px-[20px]'>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden bg-[#0E1D55]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu nabs  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='mx-3 '><Link to="/">Home</Link></li>
                        <li className='mx-3'><Link to='/shop'>Shop</Link></li>
                        <li className='mx-3'><Link to='/cart'>Cart</Link></li>
                        <li className='mx-3'><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <img src={logo} className="h-[30px] w-[70px] md:h-[45px] md:w-[140px]" alt="Logo" />
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu nabs menu-horizontal  px-1">
                    <li className='mx-3'><Link to="/">Home</Link></li>
                    <li className='mx-3'><Link to='/services'>Services</Link></li>
                    <li className='mx-3'><Link to='/blog'>Blog</Link></li>
                    <li className='mx-3'><Link to='/course'>Courses</Link></li>
                    <li className='mx-3'><Link to='/checkOut'>CheckOut</Link></li>
                </ul>
            </div>
            <div className="navbar-end">



                {
                    user ?
                        <div className='flex item-center justify-between'>
                            <button className='btn bg-[#0E1D55] md:text-md text-sm text-white mr-3' onClick={handleSignOut}> Log out</button>
                            <p className='text-white md:text-lg text-sm  mt-3 ml-2'>{user?.displayName}</p>
                        </div>

                        :
                        <button className="btn bg-[#0E1D55] text-white">
                            <Link to='/login'>Login</Link>
                        </button>
                }


            </div>
        </div>
    );
};

export default Navbar;