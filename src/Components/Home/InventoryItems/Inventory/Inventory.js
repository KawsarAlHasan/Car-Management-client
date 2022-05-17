import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventry = ({ inventory }) => {
    const {_id, name, img, description, price, quantity, supplierName, email } = inventory;

    const navigate = useNavigate();

    const stockUpdate = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='inventry text-center pb-3'>
            <h2>{name}</h2>
            <img className='img-fluid imgc' src={img} alt="" />
            <h6>Price: $ {price}</h6>
            <h6>Quantity: {quantity}</h6>
            <h6>Supplier Name: {supplierName}</h6>
            <p>{description}</p>
            <button className='btn btn-primary' onClick={() => stockUpdate(_id)}>Stock Update</button>
        </div>
    );
};

export default Inventry;