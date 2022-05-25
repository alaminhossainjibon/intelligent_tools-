import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProducts = () => {

    const [service, setService] = useState([]);
    const [user] = useAuthState(auth)

    useEffect(() => {
        fetch(`http://localhost:5000/buying?buyer=${user.email}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [user]);

    return (
        <div>
            <h2>My Products: {service.length}</h2>
        </div>
    );
};

export default MyProducts;