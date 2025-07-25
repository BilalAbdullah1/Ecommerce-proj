import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './productitem'

const BestSeller = () => {
    const { products } = useContext(ShopContext)
    const [BestSeller, setBestSeller] = useState([])

    useEffect(() => {
        const latest = products.slice(0, 10)
        setBestSeller(latest)
        console.log('Loaded latest products:', latest)
    }, [products])

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ex maiores tenetur nostrum vitae, illo dolorum exercitationem officia aspernatur cumque optio blanditiis quaerat molestias facilis assumenda dolor itaque dicta inventore?
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    BestSeller.map((item, index) => (
                        <ProductItem
                            key={index}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller
