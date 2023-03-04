import React from 'react';
import { useLoaderData } from 'react-router';
import Course from '../components/Header/Course/Course';

const Home = () => {
    const courses = useLoaderData();


    return (
        <div className='container '>
            {
                courses.map(course => <Course course={course}></Course>)
            }

        </div>
    );
};

export default Home;