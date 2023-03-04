
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Course.css';

const Course = ({ course }) => {

    return (

        <div className='card course shadow' >
            <img alt="img" src={course.picture} />
            <button className='mt-2 btn btn-secondary btn-sl fs-6 fw-semibold'>Start Course
                <FontAwesomeIcon className='ms-3' icon={faCode}></FontAwesomeIcon>
            </button>

        </div >



    );
};

export default Course;