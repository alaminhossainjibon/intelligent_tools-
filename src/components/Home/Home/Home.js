import React from 'react';
import ProductsBanner from '../../ProductsBanner/ProductsBanner';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MyTools from '../MyTools/MyTools';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductsBanner></ProductsBanner>
            <Contact></Contact>
        </div>
    );
};

export default Home;