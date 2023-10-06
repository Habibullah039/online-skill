import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router';

const CourseDetail = () => {

    const { courseId } = useParams();

    const [courseDetail, setCourseDetail] = useState([]);

    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/courses/${courseId}`)
            .then(res => res.json())
            .then(data => setCourseDetail(data))
    }, [courseId]);


    const handleSubmit = event => {
        event.preventDefault();
        const proceed = window.confirm('Are you sure you want to Enroll');

        const courseEnroll = {
            courseId: courseId,
            userName: user.displayName,
            email: user.email,
            courseName: courseDetail.name,
            coursePrice: courseDetail.price,
            address: event.target.address.value,
            phone: event.target.phone.value,
            date: new Date()

        }


        if (proceed) {


            fetch('http://localhost:5000/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },

                body: JSON.stringify(courseEnroll)

            })


            .then(res => res.json())
            .then(data => {

                console.log(data);
                navigate('/checkOut')

            })

        }




    }

    return (

        <div className='flex h-screen justify-center items-center' >

            <div className="card md:w-96 w-72  bg-[#511849]">
                <div className="card-body">

                    <h2 className=" text-center font-bold  font-serif md:text-xl text-md my-5 text-white">Please Enroll Your Course </h2>

                    <form onSubmit={handleSubmit}>

                        <input type="text" className="input input-ghost w-full max-w-xs  my-3" value={user.displayName} readOnly disabled />
                        <input type="email" className="input input-ghost w-full max-w-xs my-3 " value={user.email} readOnly disabled />
                        <input type="text" className="input input-ghost w-full max-w-xs  my-3" value={courseDetail.name} readOnly disabled />
                        <input type="text" className="input input-ghost w-full max-w-xs  my-3 " placeholder='Your-address' name='address' required />
                        <input type="number" className="input input-ghost w-full max-w-xs my-3 " placeholder='Your-phone' name='phone' required />
                        <input type="submit" value='Please Enroll' class="input input-ghost w-full max-w-xs btn btn-primary text-white" />
                    </form>

                </div>

            </div>

        </div>

    );

};

export default CourseDetail;