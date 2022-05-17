import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItem = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/myitems`;
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
                window.location.reload(false);
                toast('Inventorie Item Added Successfully!');
            })
    };
    
    const [user] = useAuthState(auth);

    return (
        <div>
            <div className='text-center container w-50 my-3'>
                <h1>Add <span className='text-danger'>the Items </span></h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                    <input className='mb-2' placeholder='Car Name' {...register("name", { required: true})} />
                    <input className='mb-2' defaultValue={user.email} {...register("email", { required: true, readonly: true})} />
                    <input className='mb-2' placeholder='Image url' {...register("img", { required: true })} />
                    <input className='mb-2' placeholder='Supplier Name' {...register("supplierName", { required: true })} />
                    <input className='mb-2' placeholder='Price' type="number" {...register("price", { required: true })} />
                    <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                    <textarea className='mb-2' placeholder='Description' {...register("description", { required: true })} />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className='btn btn-primary' value="Add Inventory" type="submit" />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddItem;