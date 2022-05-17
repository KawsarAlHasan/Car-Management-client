import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItem from "./MyItem/MyItem";

const MyItems = (props) => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        const getMyItems = async() => {
            const email = user.email;
            const url = `http://localhost:5000/myitems?email=${email}`;
            const {data} = await axios.get(url);
            setMyItems(data);
        };
        getMyItems();

    }, [user]);

    return (
        <div>
            <h1 className='my-4 text-center'>My <span className='text-danger'> Items </span></h1>
            <h4 className='mb-3 text-center'>My <span className='text-primary'>{myItems.length}</span> Items:</h4>
            <div className="inventorys-container container">
                {
                     myItems.map(myItem => <MyItem 
                        key={myItem._id}
                        myItem={myItem}
                     ></MyItem>
                )}
            </div>
        </div>
    );
};

export default MyItems;