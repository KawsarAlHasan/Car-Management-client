import React, { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';
import Inventry from './Inventory/Inventory';
import './InventoryItems.css';

const InventoryItems = (props) => {

    const [isLoading, setIsLoading] = useState(false);

    const [inventorys, setInventorys] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/inventorie')
            .then(res => res.json())
            .then(data => {
                setInventorys(data)
                setIsLoading(false)
            });
    }, [])
    return (
        <div>
            <h1 className='text-center py-4'>Inventory <span className='text-danger'>Items</span></h1>

            <div className="inventorys-container container">
            {isLoading ? <Loading></Loading> : 
                inventorys.slice(0, 6).map(inventory => <Inventry
                    key={inventory._id}
                    inventory={inventory}
                ></Inventry>)
            }
            </div>
            <div className='container text-center my-2'>                
            <a href='/manageInventories' className='text-primary text-decoration-none'>Manage Inventories</a>
            </div>
        </div>
    );
};

export default InventoryItems;