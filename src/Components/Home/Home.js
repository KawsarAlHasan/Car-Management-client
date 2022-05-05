import React from 'react';
import Banner from './Banner/Banner';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = (props) => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
        </div>
    );
};

export default Home;