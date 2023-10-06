import React from 'react';
import banner from '../../images/banner.jpg';

const Banner = () => {
    return (
        <div style={{ background: `url(${banner})` }} className='h-[700px] bg-cover text-white mt-[-150px] pt-[160px]'> 

            <h1 className='md:text-7xl text-3xl font-serif text-center mt-[100px]'>Seven Agency</h1>
            <h4 className='text-2xl mt-5 mb-[40px] text-[#CCA471] text-center'>Smart digital solutions</h4>
            <div className='flex justify-center items-center'>
                <button className='bg-[#090423] mr-2  px-7 py-[14px]  uppercase rounded md:text-md hover:bg-[#21BDA1] font-medium'>Read More</button>
                <button className='bg-[#21BDA1] ml-2 px-7 py-[14px] uppercase rounded md:text-md hover:bg-[#090423] font-medium'>Read More</button>
            </div>

        </div>
    );
};

export default Banner;