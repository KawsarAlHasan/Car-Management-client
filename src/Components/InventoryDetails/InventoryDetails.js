import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const InventoryDetails = (props) => {
    
    const { invetoryId } = useParams();

    const [inventory, setInventory] = useState({});

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/inventorie/${invetoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                window.location.reload(false);
                toast('Quantity Added Successfully!');
            })
    };

    useEffect(() => {
        const url = `http://localhost:5000/inventorie/${invetoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [])
    return (
        <div className='row container  text-center gx-5'>
            <div className='col-md-8 inventry text-center my-3 pb-3'>
                <h2>{inventory.name}</h2>
                <img className='img-fluid imgc' src={inventory.img} alt="" />
                <h6>Price: $ {inventory.price}</h6>
                <h6>Quantity: {inventory.quantity}</h6>
                <h6>Supplier Name: {inventory.supplierName}</h6>
                <p>{inventory.description}</p>
                <button className='btn btn-danger'>Delivered</button>
            </div>

            <div className='col-md-4 container my-3'>
                <h1>Restock <span className='text-danger'>the Items </span></h1>

                <form className='d-flex flex-column mb-3' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Added Quantity' type="number" {...register("quantity", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className='btn btn-primary' value="Add Inventory" type="submit" />
                </form>

                <a href='/manageInventories' className='text-primary text-decoration-none'>Manage Inventories</a>
            </div>
            <ToastContainer />
        </div>
    );
};

export default InventoryDetails;


