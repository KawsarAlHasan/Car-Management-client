import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {
    const emailRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let erroElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        erroElement = <div>
            <p className='text-danger'>Error: {error?.message} </p>
        </div>
    }

    const handleSubmit = even => {
        even.preventDefault();
        const email = even.target.email.value;
        const password = even.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateSignup = () => {
        navigate('/signup');
    }

    if (user) {
        navigate(from, {replace: true});
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div className='container w-50 mx-auto mt-3'>
            <h2 className='text-center'>Please <span className='text-danger'>Login</span>  with your credentials.</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {erroElement}
            <p>Don't have any account?<Link to="/signup" className='text-primary text-decoration-none' onClick={navigateSignup}> Sign up here</Link></p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <ToastContainer />
            <div className='py-3'>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;