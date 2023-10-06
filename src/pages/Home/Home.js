import React from 'react';
import Banner from './Banner';
import Services from './Services';
import Blog from './Blog';
import Testimonial from './Testimonial';
import Discuss from './Discuss';
import Courses from './Courses';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <Blog></Blog>
            <Courses></Courses>
            <Testimonial></Testimonial>
            <Discuss></Discuss>
        </div>
    );
};

export default Home;