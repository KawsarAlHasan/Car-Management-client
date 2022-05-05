import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventry = ({ inventory }) => {
    const { name, img, description, price, quantity, supplierName } = inventory;

    const navigate = useNavigate();

    const navigateyyyy = evant => {
        navigate('/xxxxxx');
    }
    return (
        <div className='inventry text-center pb-3'>
            <h2>{name}</h2>
            <img className='img-fluid imgc' src={img} alt="" />
            <h6>Price: $ {price}</h6>
            <h6>Quantity: {quantity}</h6>
            <h6>Supplier Name: {supplierName}</h6>
            <p>{description}</p>
            <button className='btn btn-primary'><Link to="/xxxxxxx" className='text-light text-decoration-none' onClick={navigateyyyy}>xxxxxxxxxxx {name}</Link></button>
        </div>
    );
};

export default Inventry;