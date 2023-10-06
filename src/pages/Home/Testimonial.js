import React from 'react';
import testimonial from "../../images/testimonial.png";
import man from "../../images/man.jpg";
import man2 from "../../images/man2.jpg";
import man3 from "../../images/man3.jpg";


const Testimonial = () => {
    return (
        <div className='bg-[#634BF8]  p-10'>

            
            <h4 className='text-lg mt-[40px] mb-[20px] text-white font-semibold uppercase text-center'>testimonial</h4>
            <h2 className='md:text-5xl text-3xl  text-white  text-center font-bold capitalize mb-[70px]'>what saying our clients</h2>


            <div className='grid  grid-cols-1 lg:grid-cols-3 gap-10 md:px-10  pb-10 mt-10'>
                <div>

                    <div className="card card-compact md:w-96 w-72 bg-[#4B38C5] shadow-xl">
                        <figure> <img src={testimonial} className="md:h-[70px] md:w-[70px] h-[40px] w-[40px] md:mb-10 mb-3 mt-10" alt="" /></figure>
                        <div className="card-body text-white">

                            <p className='text-center text-lg  px-2 mt-2 mb-[70px]'>Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Gravida neque convallis a semper
                                If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>


                    <div className="avatar md:ml-[145px] ml-[100px]" style={{ position: 'relative', top: '-40px', zIndex: '1' }}>
                        <div className="w-24 rounded-full">
                            <img src={man2}  alt="" />
                        </div>
                        
                    </div>

                    <h4 className='text-lg mt-[-25px] md:ml-[30px] ml-[10px] text-white font-semibold uppercase text-center'>tanjil khan</h4>
                    <p className='text-center text-md text-[#E4E0FE] capitalize md:ml-8 ml-5'>product designer</p>
                                

                </div>

                <div>

                    <div className="card card-compact md:w-96 w-72 bg-[#4B38C5] shadow-xl">
                        <figure> <img src={testimonial} className="md:h-[70px] md:w-[70px] h-[40px] w-[40px] md:mb-10 mb-3 mt-10 " alt="" /></figure>
                        <div className="card-body text-white">

                            <p className='text-center text-lg px-2 mt-2 mb-[70px]'>Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Gravida neque convallis a semper
                                If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>


                    <div className="avatar md:ml-[145px] ml-[100px] " style={{ position: 'relative', top: '-40px', zIndex: '1' }}>
                        <div className="w-24 rounded-full">
                            <img src={man3} alt="" />
                        </div>
                    </div>

                    <h4 className='text-lg mt-[-25px] md:ml-[30px] ml-[10px] text-white font-semibold uppercase text-center'>habibullah bahar</h4>
                    <p className='text-center text-md text-[#E4E0FE] capitalize md:ml-8 ml-5'>web designer</p>


                </div>

                <div>

                    <div className="card card-compact md:w-96 w-72 bg-[#4B38C5] shadow-xl">
                        <figure> <img src={testimonial} className="md:h-[70px] md:w-[70px] h-[40px] w-[40px] md:mb-10 mb-3 mt-10" alt="" /></figure>
                        <div className="card-body text-white">

                            <p className='text-center text-lg px-2 mt-2 mb-[70px]'>Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Gravida neque convallis a semper
                                If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>


                    <div className="avatar md:ml-[145px] ml-[100px] " style={{ position: 'relative',  top: '-40px', zIndex: '1' }}>
                        <div className="w-24 rounded-full">
                            <img src={man} alt="" />
                        </div>
                    </div>

                    <h4 className='text-lg mt-[-25px] md:ml-[30px] ml-[10px] text-white font-semibold uppercase text-center'>tanjil ahmed</h4>
                    <p className='text-center text-md text-[#E4E0FE] capitalize md:ml-8 ml-5'>web designer</p>


                </div>
            </div>


        </div>
    );
};

export default Testimonial;