import React from 'react';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebookF, faGooglePlay, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {

    const toDay = new Date();
    const year = toDay.getFullYear();


    return (
        <div className=' bg-[#0D062E] pt-[60px] pb-[30px] '>



            <div className='grid grid-cols-2 lg:grid-cols-4 md:gap-10 md:px-[50px] px-[10px] '>
                <div className="md:ml-0  ml-5">
                    <img src={logo} className="h-[20px] w-[100px] md:h-[30px] md:w-[200px] mt-3" alt="" />
                    <p className='md:text-md  text-sm text-white mt-[40px] mb-10'>Tristique et egestas quis ipsum. Libero the volutpat sed cras ornare. Nam aliquamtortor.</p>

                    <div className="mb-10">

                        <FontAwesomeIcon icon={faFacebookF} className=' md:h-5 md:w-5 h-3 w-3 p-2 bg-[#282244] text-white rounded mx-2' />
                        <FontAwesomeIcon icon={faTwitter} className='md:h-5 md:w-5 h-3 w-3 p-2 bg-[#282244] text-white rounded mx-2' />
                        <FontAwesomeIcon icon={faInstagram} className='md:h-5 md:w-5 h-3 w-3 p-2 bg-[#282244] text-white rounded mx-2' />
                        <FontAwesomeIcon icon={faYoutube} className='md:h-5 md:w-5 h-3 w-3 p-2 bg-[#282244] text-white rounded mx-2' />

                    </div>


                </div>

                <div className='text-white block mx-auto'>

                    <h2 className='md:text-3xl text-xl font-bold mb-10'>Services</h2>

                    <ul className='text-lg'>

                        <li className='mx-3 my-2'><Link to="/">Home</Link></li>
                        <li className='mx-3 my-2'><Link to='/services'>Services</Link></li>
                        <li className='mx-3 my-2'><Link to='/blog'>Blog</Link></li>
                        <li className='mx-3 my-2'><Link to='/cart'>Cart</Link></li>


                    </ul>

                </div>


                <div className='text-white block mx-auto'>

                    <h2 className='md:text-3xl text-xl font-bold mb-10'>Resources</h2>

                    <ul className='text-lg'>

                        <li className='mx-3 my-2'><Link to="/">Testimonial</Link></li>
                        <li className='mx-3 my-2'><Link to='/services'>Shop</Link></li>
                        <li className='mx-3 my-2'><Link to='/blog'>Pricing</Link></li>
                        <li className='mx-3 my-2'><Link to='/cart'>Contact</Link></li>


                    </ul>

                </div>


                <div className='text-white block mx-auto'>

                    <h2 className='md:text-3xl text-xl font-bold mb-10'>Get apps On!</h2>

                    <div>
                        <button className=' bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 px-7 py-[14px] mb-3 rounded capitalize md:text-lg  font-medium'>
                            <FontAwesomeIcon icon={faApple} className='mr-2'></FontAwesomeIcon>
                            Apps Store
                        </button>
                        <button className='bg-gradient-to-r from-red-500 to-[#4B38C5] hover:from-[#4B38C5] hover:to-red-500  px-8 py-[14px] mt-3 rounded capitalize md:text-lg  font-medium'>
                            <FontAwesomeIcon icon={faGooglePlay} className='mr-2'></FontAwesomeIcon>
                            Play Store
                        </button>
                    </div>



                </div>

                

            </div>

            <div className="divider h-[2px] mt-[50px] mb-10 bg-[#282244]"></div>

            <div className='flex justify-between items-center md:px-[100px] px-[20px]'>
                
                <p className=' py-10 text-white text-2xl font-semibold'> <small> Copyright @ {year} </small> </p>
                <p className=' py-10 text-white text-2xl font-semibold'> <small>Privacy Policy </small> </p>

            </div>

        </div>
    );
};

export default Footer;