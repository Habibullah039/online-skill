import React from 'react';
import './Services.css';
import { ArrowTrendingUpIcon, UsersIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';

const Services = () => {
    return (
        <section>
            <h2 className='text-center md:text-3xl font-bold text-xl mt-[80px] my-10 '>Popular In Services</h2>
            <div className="grid  grid-cols-1 lg:grid-cols-3 gap-5 md:px-20 px-[40px] pb-10 mb-[80px] cards">

                <div className="card md:w-96 w-72  bg-base-100 shadow-xl ">
                    <figure className="px-10 pt-10 ">
                        <ArrowTrendingUpIcon className="h-[70px] w-[70px] px-2 bg-[#0E1D55] text-white rounded-lg hover:bg-[#21BDA1]"></ArrowTrendingUpIcon>
                    </figure>
                    <div className="card-body bg-[#0E1D55] text-white rounded-lg hover:bg-[#21BDA1] items-center text-center">
                        <h2 className="card-title">Popular In Store</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn bg-[#21BDA1]">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card md:w-96 w-72  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <UsersIcon className="h-[70px] w-[70px] px-2 bg-[#0E1D55] text-white rounded-lg hover:bg-[#21BDA1]"></UsersIcon>
                    </figure>
                    <div className="card-body items-center text-center bg-[#0E1D55] text-white rounded-lg hover:bg-[#21BDA1]">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn bg-[#21BDA1]">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card md:w-96 w-72  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <RocketLaunchIcon className="h-[70px] w-[70px] px-2 bg-[#0E1D55] text-white rounded-lg hover:bg-[#21BDA1]"></RocketLaunchIcon>
                    </figure>
                    <div className="card-body items-center text-center bg-[#0E1D55] text-white rounded-lg hover:bg-[#21BDA1]">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn bg-[#21BDA1]">Buy Now</button>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    );
};

export default Services;