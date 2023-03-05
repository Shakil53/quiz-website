import React from 'react';


const Quiz = () => {
    return (
        <div className='container'>
            <div className='question-container'>
                <div className='question-1'>
                    {/* Question--1 */}
                    <div className='qus'>
                        <p>1. Which of the following is the correct name of React.js?</p>
                    </div>
                    {/* Answer Options */}
                    <div className='form-check'>
                        {/* single option */}
                        <input className='form-check-input' type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                        <label className='form-check-label' for="flexRadioDefault1">React</label>
                    </div>
                    {/* single option */}
                    <div className='form-check'>
                        {/* single option */}
                        <input className='form-check-input' type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                        <label className='form-check-label' for="flexRadioDefault1">React.js</label>
                    </div>
                    {/* single option */}
                    <div className='form-check'>
                        {/* single option */}
                        <input className='form-check-input' type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                        <label className='form-check-label' for="flexRadioDefault1">ReactJS</label>
                    </div>
                    {/* single option */}
                    <div className='form-check'>
                        {/* single option */}
                        <input className='form-check-input' type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                        <label className='form-check-label' for="flexRadioDefault1">All of the above</label>
                    </div>
                </div>
                {/* Question-2 */}
                <div className='question-2'>
                    {/* Question--1 */}
                    <div className='qus'>
                        <p>2.  Which of the following are the advantages of React.js?</p>
                    </div>
                    {/* Answer Options */}
                    <div className='form-check'>
                        {/* single option */}
                        <input className='form-check-input' type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                        <label className='form-check-label' for="flexRadioDefault1">React.js can increase the application's performance with Virtual DOM.</label>
                    </div>
                    {/* single option */}
                    <div className='form-check'>
                        {/* single option */}
                        <input className='form-check-input' type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                        <label className='form-check-label' for="flexRadioDefault1">React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.</label>
                    </div>
                    {/* single option */}
                    <div className='form-check'>
                        {/* single option */}
                        <input className='form-check-input' type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                        <label className='form-check-label' for="flexRadioDefault1">React.js can render both on client and server side.</label>
                    </div>
                    {/* single option */}
                    <div className='form-check'>
                        {/* single option */}
                        <input className='form-check-input' type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                        <label className='form-check-label' for="flexRadioDefault1">All of the above</label>
                    </div>
                </div>
                {/* question-3 */}
                <div className='question-3'>
                    {/* Question--1 */}
                    <div className='qus'>
                        <p>3.  What of the following is used in React.js to increase performance?</p>
                    </div>
                    {/* Answer Options */}
                    <div className='form-check'>
                        {/* single option */}
                        <input className='form-check-input' type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                        <label className='form-check-label' for="flexRadioDefault1">Original DOM</label>
                    </div>
                    {/* single option */}
                    <div className='form-check'>
                        {/* single option */}
                        <input className='form-check-input' type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                        <label className='form-check-label' for="flexRadioDefault1">Virtual DOM</label>
                    </div>
                    {/* single option */}
                    <div className='form-check'>
                        {/* single option */}
                        <input className='form-check-input' type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                        <label className='form-check-label' for="flexRadioDefault1">Both A and B.</label>
                    </div>
                    {/* single option */}
                    <div className='form-check'>
                        {/* single option */}
                        <input className='form-check-input' type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                        <label className='form-check-label' for="flexRadioDefault1">None of the above.</label>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Quiz;