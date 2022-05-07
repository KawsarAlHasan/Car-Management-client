import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return (
        <div className="bg-dark text-center text-white">

            <section
                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >
                <div className="m-6 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div className='ms-5'>
                    <a href="https://web.facebook.com/kawsar.alhasan.58/" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/kawsaralhasan2" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://app.netlify.com/teams/kawsaralhasan/overview" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="https://www.instagram.com/kawsar.alhasan.58/" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kawsar-al-hasan-1b985420a/" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/KawsarAlHasan" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Company name
                            </h6>
                            <p>
                                Programming Hero <br/>
                                Complete Web Development Course with Jhankar Mahbub
                            </p>
                        </div>

                        <div className="col-6 col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">Mercedez Benz</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">Tata Motors</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">BMW</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">Jeep Gladiator</a>
                            </p>
                        </div>

                        <div className="col-6 col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="/home" className="text-reset text-decoration-none">Home</a>
                            </p>
                            <p>
                                <a href="/blogs" className="text-reset text-decoration-none">Blogs</a>
                            </p>
                            <p>
                                <a href="/items" className="text-reset text-decoration-none">Items</a>
                            </p>
                            <p>
                                <a href="/login" className="text-reset text-decoration-none">Login</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i className="fas fa-home me-3"></i> Dhaka, Bangladesh</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                kawsaralhasan.420@gmail.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4 c-bg">
                © 2022 Copyright:
                <a className="text-reset fw-bold text-decoration-none" href="https://web.facebook.com/kawsar.alhasan.58/"> Kawsar Al Hasan</a>
            </div>
        </div>
    );
};

export default Footer;