import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/images/banner/banner.gif'
import Stats from '../../Stats/Stats';

const Banner = () => {
    return (
        <div>
            <div

                style={{
                    background: `url(${banner})`,
                    backgroundSize: 'cover'
                }}
                class="hero min-h-screen md:w-50 lg:w-full">

                <div className=' justify-center'>
                    <h2 className='text-white text-6xl font-bold uppercase'>Intelligent Tools</h2>
                    <p className='text-white'>This is Intelligent tools website. All sorts of robotics gadgets are available here all the time</p>

                    <Link to='/myTools' class="btn btn-primary font-bold my-6 text-white">Show Tools</Link>
                </div>
            </div>
            <div>
                <Stats></Stats>
            </div>
        </div>
    );
};

export default Banner;