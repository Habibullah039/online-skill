import React from 'react';
import { useEffect, useState } from "react";
import Course from './Course';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://online-skill-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div  className='bg-[#0D062E] pt-[80px] pb-[120px]'>

            <h2 className='md:text-5xl text-3xl  text-white  text-center font-bold capitalize mb-[70px]'>Popular in Courses</h2>
            <div className=' grid grid-cols-2 lg:grid-cols-3 gap-10 md:px-[120px] px-[20px]'>


                {
                    courses?.map(course => <Course
                        key={course._id}
                        course={course}
                    ></Course>)
                }


            </div>
            
        </div>
    );
};

export default Courses;