import React from 'react';
import tabs from '../../images/tabs.jpg'

const Blog = () => {
    return (
        
        <div className='bg-[#090423] text-white  py-[50px] '>
            <h2 className='text-center md:text-5xl font-bold text-xl mt-[20px] mb-[70px] my-10 '>Popular In Services</h2>
            <div className="lg:flex justify-around reverse  mx-4 ">


                <div>

                    <h2 className='md:text-2xl text-xl text-white mt-10 font-bold md:w-96 w-80 ml-4 mb-[30px]'>We provide you an comportable work space for you</h2>
                    <p className="ml-4 md:w-96 w-80 ">Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Gravida neque convallis a semper</p>
                    <details className="collapse collapse-plus">
                        
                        <summary className="collapse-title text-xl md:mr-[100px] font-medium">
                            Reserve conference rooms
                        </summary>
                        <div className="collapse-content">
                            <p className="md:w-96 w-80">Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Gravida neque convallis a semper</p>
                        </div>
                    </details>
                    <details className="collapse collapse-plus">
                        
                        <summary className="collapse-title text-xl mr-[100px] font-medium">
                            Post or respond to job listing
                        </summary>
                        <div className="collapse-content">
                            <p className="md:w-96 w-80">Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Gravida neque convallis a semper</p>
                        </div>
                    </details>
                    <details className="collapse collapse-plus">
                       
                        <summary className="collapse-title text-xl mr-[100px] font-medium">
                            Flexibility of monthly terms
                        </summary>
                        <div className="collapse-content">
                            <p className="md:w-96 w-80">Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Gravida neque convallis a semper</p>
                        </div>
                    </details>

                </div>

                <img src={tabs} className="md:max-w-lg w-[300px] md:h-[400px] mt-10 ml-4 rounded-lg shadow-2xl" alt="tabs" />

            </div>

        </div>


    );
};

export default Blog;