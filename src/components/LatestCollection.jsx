import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './productitem'

function LatestCollection() {
    const { products } = useContext(ShopContext)
    const [Latestproducts, setLatestproducts] = useState([])

    useEffect(() => {
        const latest = products.slice(0, 10)
        setLatestproducts(latest)
        console.log('Loaded latest products:', latest)
    }, [products])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi cum vitae esse provident, velit accusantium aliquid obcaecati neque nobis ex aut eligendi molestiae in autem rem magnam cupiditate nulla sit!
                </p>
            </div>

            {/* Rendering Products */}
            <div className='grid grid-cols-2 ms:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {Latestproducts.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    )
}

export default LatestCollection
