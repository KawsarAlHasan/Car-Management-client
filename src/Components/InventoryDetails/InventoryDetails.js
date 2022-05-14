import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const InventoryDetails = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/inventorie`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    };

    const { invetoryId } = useParams();

    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventorie/${invetoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [])
    return (
        <div className='row container  text-center gx-5'>
            <div className='col-md-6 inventry text-center my-3 pb-3'>
                <h2>{inventory.name}</h2>
                <img className='img-fluid imgc' src={inventory.img} alt="" />
                <h6>Price: $ {inventory.price}</h6>
                <h6>Quantity: {inventory.quantity}</h6>
                <h6>Supplier Name: {inventory.supplierName}</h6>
                <p>{inventory.description}</p>
                <button className='btn btn-primary'>Delivered</button>
            </div>
            <div className='col-md-6 container my-3'>
                <h1>Restock <span className='text-danger'>the Items </span></h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                    <input className='mb-2' placeholder='Car Name' {...register("name", { required: true, maxLength: 20})} />
                    <input className='mb-2' placeholder='Image url' {...register("img", { required: true})} />
                    <input className='mb-2' placeholder='Supplier Name' {...register("supplierName", { required: true})} />
                    <input className='mb-2' placeholder='Price' type="number" {...register("price", { required: true})} />
                    <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity", { required: true})} />
                    <textarea className='mb-2' placeholder='Description' {...register("description", { required: true})} />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className='btn btn-primary' value="Add Inventory" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default InventoryDetails;


