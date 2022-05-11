import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = (props) => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

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
        navigate('/blogs');
    }

    return (
        <div className='container w-50 mx-auto mt-3'>
            <h2 className='text-center'>Please <span className='text-danger'>Login</span>  with your credentials.</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter Password" required />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Don't have any account?<Link to="/signup" className='text-danger text-decoration-none' onClick={navigateSignup}> Sign up here</Link></p>
            <div className='py-3'>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;