import React from 'react';
import './Course.css';

const Course = ({ course }) => {
    console.log(course);
    return (
        <div className='courses'>
            <img alt='courses' src={course.picture}></img>
            <button>Start Course </button>
        </div>
    );
};

export default Course;