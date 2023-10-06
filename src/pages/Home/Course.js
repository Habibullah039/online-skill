import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router';

const Course = ( { course } ) => {

    const { img, name, price, _id } = course;
    const navigate = useNavigate();

    const handleClick = id => {
        navigate(`/course/${id}`)
    }



    return (
        <section className='mt-[60px]'>

        <div>
            <img src={img} className='md:h-[350px] h-[200px] md:w-[350px] w-[150px] text-white' alt={name} />
        </div>

        <div className='text-white ml-4'>

            <h3 className='md:text-xl text-lg font-medium capitalize mt-5 mb-3 font-serif'> {name} </h3>
            <div className='flex'>
                <StarIcon className="h-5 w-5 text-[#00c3ff]" />
                <StarIcon className="h-5 w-5 text-[#00c3ff]" />
                <StarIcon className="h-5 w-5 text-[#00c3ff]" />
                <StarIcon className="h-5 w-5 text-[#00c3ff]" />
                <StarIcon className="h-5 w-5 text-[#00c3ff]" />
            </div>
            <p className='text-lg mt-3 mb-5 font-medium'>  Tk {price} </p>

        </div>

        <div className='text-white ml-3'>

            <button className='bg-gradient-to-r from-red-500 to-[#4B38C5] hover:from-[#4B38C5] hover:to-red-500  uppercase md:text-md text-sm font-semibold rounded md:px-12 px-6 md:py-4 py-3 ' onClick={() => handleClick(_id)}>Add cart</button>
            
        </div>




    </section>
    );
};

export default Course;