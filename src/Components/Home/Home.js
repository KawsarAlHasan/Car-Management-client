import React from 'react';
import Banner from './Banner/Banner';
import ClientsSays from './ClientsSays/ClientsSays';
import Faqs from './Faqs/Faqs';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = (props) => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <ClientsSays></ClientsSays>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;
