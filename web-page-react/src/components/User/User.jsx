import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {userId} = useParams()

    return (
        <div className='rounded-md w-50 text-center bg-yellow-500 text-xl p-4'>
            User: {userId}
        </div> 
    );
};

export default User;