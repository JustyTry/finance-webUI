import React from 'react'
import Laptop from '../assets/laptop.jpg'
const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p>We offer centralized data analytics solutions to help businesses manage and analyze their data efficiently. With a centralized system, you can store all your data in one place, standardize its format, and provide access to multiple teams and departments. Our team of experts can design and implement a system that meets your unique business needs, providing you with the insights you need to make informed decisions. Contact us today to learn more about how we can help you manage your data analytics centrally.</p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics