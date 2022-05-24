import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MyTools from '../MyTools/MyTools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyTools></MyTools>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;