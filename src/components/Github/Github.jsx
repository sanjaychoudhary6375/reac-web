import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/sanjaychoudhary6375")
            .then((res) => res.json()).then((data) => {
                setData(data)
                console.log(data)
            })
    }, [])
    return (

        <>
        <div class="container mx-auto p-8 bg-gray-200 rounded-lg shadow-md">
        <h3 class="text-2xl font-bold mb-4">UserId: {data.id}</h3>
        <p class="text-lg mb-2">User Name: {data.name}</p>
        <p class="text-lg mb-2">GitHub Followers: {data.followers}</p>
        
        <div class="mb-4">
            <img class="w-32 h-32 object-cover rounded-full" src={data.avatar_url} alt="GitHub picture" />
        </div>
        
        <span class="text-blue-500">GitHub Profile: {data.html_url}</span>
    </div>
    </>
    )
}

export default Github