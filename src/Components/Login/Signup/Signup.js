import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Signup = (props) => {

    const navigate = useNavigate();

    const handleSubmit = even => {
        even.preventDefault();
        const name = even.target.name.value;
        const email = even.target.email.value;
        const password = even.target.password.value;
        console.log(name, email, password);
    }
    
    const navigateLogin = even => {
        navigate('/login');
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
                    Submit
                </Button>
            </Form>
            <p>Already have an  account? <Link to="/login" className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Signup;