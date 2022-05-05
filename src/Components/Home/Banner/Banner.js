import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';
import banner4 from '../../images/banner4.jpg';

const Banner = (props) => {
    return (
        <Carousel variant="light">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h4>Mercedez Benz Super Mclaren</h4>
                    <p>Mercedes-Benz, commonly referred to as Mercedes, is a German luxury automotive brand.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h4>Tata Motors</h4>
                    <p>Tata Motors Limited is an Indian multinational automotive manufacturing company, <br/> headquartered in the city of Mumbai, India which is part of Tata Group</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h4>Mercedez Benz Super Mclaren</h4>
                    <p>We've tested each of them to determine which is best.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner4}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h4>BMW M135i xDrive</h4>
                    <p>Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporate manufacturer</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;