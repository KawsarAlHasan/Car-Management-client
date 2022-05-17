import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const MyItem = ({ myItem }) => {
    const { _id, name, img, description, price, quantity, supplierName } = myItem;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://sheltered-scrubland-04701.herokuapp.com/inventorie/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    
                    window.location.reload(false);
                    toast('Inventorie Item Delete Successfully!');
                })
        }
    }

    return (
        <div className='inventry text-center pb-3'>
            <h2>{name}</h2>
            <img className='img-fluid imgc' src={img} alt="" />
            <h6>Price: $ {price}</h6>
            <h6>Quantity: {quantity}</h6>
            <h6>Supplier Name: {supplierName}</h6>
            <p>{description}</p>
            <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Stock Delete</button>
            <ToastContainer />
        </div>
    );
};

export default MyItem;