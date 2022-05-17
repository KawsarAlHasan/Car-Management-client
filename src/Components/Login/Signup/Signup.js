import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = (props) => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const navigate = useNavigate();
    
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleSubmit = even => {
        even.preventDefault();
        const name = even.target.name.value;
        const email = even.target.email.value;
        const password = even.target.password.value;

        createUserWithEmailAndPassword( email, password);
    }
    
    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, {replace: true});
    }
    
    return (
        <div className='container w-50 mx-auto mt-3'>
            <h2 className='text-center'>Please <span className='text-danger'>Sign up</span> a new account.</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name:</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='me-6'>Email address:</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter Email Address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter 6 Digit Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            <p>Already have an  account? <Link to="/login" className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <div className='py-3'>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Signup;