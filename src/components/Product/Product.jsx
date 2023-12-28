import React, { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner'
const Product = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    const fetchProductList = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products");
            const result = await response.json();
            setData(result.products);
        } catch (error) {
            console.error("Error fetching product list:", error);
        }
    }

    useEffect(() => {
        fetchProductList();

        setTimeout(() => {
            setIsLoading(false);
        }, [1000])

    }, []);

    const hendleSearch = () => {
        const fliterProduct = data.filter((product) => {
            return product.title.toLowerCase().includes(searchTerm.toLowerCase());
        })
        setData(fliterProduct);

    }
    return (
        <>
            <div className='container justify-end items-center flex p-4'>
                <input value={searchTerm} type="search" onChange={(e) => setSearchTerm(e.target.value)} className='w-1/3 py-1 px-4  border-2 border-gray-400  rounded-lg' type="search" placeholder='Search...' />
                <button onClick={() => { hendleSearch(); setSearchTerm("") }} className='bg-red-500  text-white px-2 py-1 rounded-lg ml-4'>Search</button>
            </div>
            {isLoading ? (<div className='flex justify-center items-center'><RotatingLines /></div>) : (<div className='container mx-auto p-4  bg-gray-100'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                    {Array.isArray(data) && data.length > 0 ? (
                        data.map((item) => (
                            <div key={item.id} className=" bg-white p-4 rounded-lg shadow-xl cursor-pointer">
                                <span class="inline-block px-2 mb-4 py-1 bg-red-500 text-white font-bold rounded-md">
                                    {item.discountPercentage}% OFF
                                </span>
                                <img src={item.images[0]} alt={item.title} className="w-full h-40 object-cover mb-4 rounded-md" />
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-800 mb-2">Price: ${item.price}</p>
                                <p className="text-gray-800 mb-2">Stock: {item.stock}</p>
                                <p className="text-gray-800 mb-2">Rating: {item.rating}</p>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))
                    ) : (
                        <p>No products found</p>
                    )}
                </div>
            </div>)}
        </>
    );
}

export default Product;
