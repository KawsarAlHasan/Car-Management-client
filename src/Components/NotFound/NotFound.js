import React from 'react';
import img404 from '../images/404.png';

const NotFound = (props) => {
    return (
        <div className='text-center'>
            <img className='w-50 mt-5' src={img404} alt=''/>
            <h1 className='mt-5'>OOPS! THIS PAGE CAN'T BE FOUND.</h1>
            <h4 className='fw-light'>It's looks like nothing was found at this location.</h4>
        </div>
    );
};

export default NotFound;