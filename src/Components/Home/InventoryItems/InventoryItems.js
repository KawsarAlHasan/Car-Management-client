import React, { useEffect, useState } from 'react';
import Inventry from './Inventory/Inventory';
import './InventoryItems.css';

const InventoryItems = (props) => {

    const [inventorys, setInventorys] = useState([]);

    useEffect(() => {
        fetch('unpermanent.json')
            .then(res => res.json())
            .then(data => setInventorys(data));
    }, [])
    return (
        <div>
            <h1 className='text-center py-4'>Inventory <span className='text-danger'>Items</span></h1>

            <div className="inventorys-container container">
                {
                    inventorys.slice(0, 6).map(inventory => <Inventry
                        key={inventory.id}
                        inventory={inventory}
                    ></Inventry>)
                }
            </div>
        </div>
    );
};

export default InventoryItems;