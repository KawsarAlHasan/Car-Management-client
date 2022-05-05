import React from 'react';
import Banner from './Banner/Banner';
import ClientsSays from './ClientsSays/ClientsSays';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = (props) => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <ClientsSays></ClientsSays>
        </div>
    );
};

export default Home;
