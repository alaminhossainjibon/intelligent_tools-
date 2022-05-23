import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'
const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className=''>
            <div className='bg-neutral'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            service={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;