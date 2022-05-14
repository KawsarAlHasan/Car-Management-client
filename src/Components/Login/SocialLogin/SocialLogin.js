import React from 'react';
import googleImg from '../../images/google.png';
import githubImg from '../../images/github.svg';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const SocialLogin = (props) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);

    const navigate = useNavigate();

    let erroElement;

    if(loading || loading2){
        return <Loading></Loading>
    }

    if (error || error2) {
        erroElement = <div>
            <p className='text-danger'>Error: {error?.message} {error2?.message} </p>
        </div>
    }

    if (user || user2) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='bg-primary w-50' style={{ height: '1px' }}></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {erroElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{ width: '50px' }} className='img-fluid px-2' src={googleImg} alt="" />
                    Google sign In
                </button>
            </div>
            <div className='mt-4'>
                <button onClick={() => signInWithGithub()} className='btn btn-success w-50 d-block mx-auto'>
                    <img style={{ width: '50px' }} className='img-fluid px-2' src={githubImg} alt="" />
                    Github sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;