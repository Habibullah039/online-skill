import React from 'react';
import useOrders from '../../hooks/useOrders';
import { TrashIcon } from '@heroicons/react/24/solid';

const CheckOut = () => {

    const [orders, setOrders] = useOrders();


    const handleDelete = id => {
        const proceed = window.confirm('are you sure you want to delete');

        if (proceed) {
            fetch(`http://localhost:5000/order/${id}`, {
                method: 'DELETE'
            })

                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== id);

                    setOrders(remaining);
                })
        }
    }



    return (
        <div className='py-[60px]'>

            <h2 className=" text-center font-bold text-[#090423] font-serif md:text-xl text-lg my-10 ">Please Enroll Your Course Payment </h2>
            <div className="overflow-x-auto md:px-[60px] mt-[80px]">

                <table className="table table-zebra">

                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Course Name</th>
                            <th>Phone</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Payment</th>
                        </tr>
                    </thead>

                    <tbody>

                        {

                            orders.map(order => <tr>

                                <td>{order.userName}</td>
                                <td>{order.courseName}</td>
                                <td>{order.phone}</td>
                                <td>{order.coursePrice}</td>
                                <td>
                                    <button onClick={() => handleDelete(order._id)}>
                                        <TrashIcon className="md:h-6 h-4 md:w-6 w-4 md:ml-[20px]" />
                                    </button>
                                </td>
                                <td>
                                    <button className="btn bg-[#0E1D55] text-white">Pay</button>
                                </td>

                            </tr>)
                        }

                    </tbody>


                </table>

            </div>


        </div>
    );
};

export default CheckOut;