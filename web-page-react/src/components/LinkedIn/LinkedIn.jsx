import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const LinkedIn = () => {
    const data = useLoaderData()
    // const [data, setCount] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/anuup22').then(response => response.json())
    //     .then(data => setCount(data))
    // }, [])

    return (
        <div className='hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-2'>
            <div >
                <img src={data?.avatar_url} alt='profile-photo' className='size-14 mt-1.5 ms-4 rounded-full' />
            </div>
            <div className='font-medium text-gray-600 rounded-xl text-center m-4 bg-yellow-300 p-4 text-xl'>
                LinkedIn Followers: {data?.followers}
            </div>
        </div>
    );
};

export default LinkedIn;

export const linkedinInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/anuup22')
    return response.json();
}