import React from 'react';
import googleImg from '../../images/google.png';
import githubImg from '../../images/github.png';

const SocialLogin = (props) => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div>
                <button className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{ width: '50px' }} className='img-fluid px-2' src={googleImg} alt="" />
                    Google sign In
                </button>
            </div>
            <div className='mt-4'>
                <button className='btn btn-success w-50 d-block mx-auto'>
                    <img style={{ width: '50px' }} className='img-fluid px-2' src={githubImg} alt="" />
                    Github sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;