import React from 'react';
import banner from '../../../assets/images/banner/banner.gif'

const Banner = () => {
    return (
        <div>
            <div className=''>
                <img src={banner} className='w-full h-80' />
            </div>
        </div>
    );
};

export default Banner;