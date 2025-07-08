import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className="px-5 sm:px-10">
            <div className='flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="Logo" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo omnis autem ad fugiat ipsam alias cum veritatis magnam quae libero, labore minus voluptate enim officia, dolor ipsa perspiciatis quibusdam at!
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>DELIVERY</li>
                        <li>PRIVACY POLICY</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+92 3412775393</li>
                        <li>Contact@forever.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr className="border-t border-gray-200" />
                <p className='py-5 text-sm text-center'>
                    © 2024 forever.com - All Rights Reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer
