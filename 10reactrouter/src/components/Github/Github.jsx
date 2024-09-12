import React from 'react';
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function GitHub() {
    const data = useLoaderData()
    // const [data, setdata] = useState(0);
    // useEffect( () => {
    //     fetch('https://api.github.com/users/shravankumarpatell')
    //     .then(res => res.json())
    //     .then(data => setdata(data))
    // }, [])
    return ( 
        <>
        <h1 className='text-center bg-gray-700 m-3 p-3 border text-white'>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git profile" width={300}/>
        </h1>
        
        </>
     );
}

export default GitHub;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/shravankumarpatell')
    return response.json
}