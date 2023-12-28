import {useState} from 'react'
import Product from './Product';
const ProductSearch = ({setData}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const hendleSearch = () => {
        const fliterProduct = data.filter((product) => {
            return product.title.toLowerCase().includes(searchTerm.toLowerCase());
        })
        setData(fliterProduct);

    }
    return (
        <div className='container justify-end items-center flex p-4'>
            <input value={searchTerm} type="search" onChange={(e) => setSearchTerm(e.target.value)} className='w-1/3 py-1 px-4  border-2 border-gray-400  rounded-lg' type="search" placeholder='Search...' />
            <button onClick={() => { hendleSearch(); setSearchTerm("") }} className='bg-red-500  text-white px-2 py-1 rounded-lg ml-4'>Search</button>
        </div>
    )
}

export default ProductSearch;