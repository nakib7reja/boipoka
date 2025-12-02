import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-between p-10 my-10 bg-gray-100 rounded-2xl'>
            <div className='w-[45%] my-auto'>
                <h1 className='text-5xl font-bold'>Books to freshen up your bookshelf</h1>
                <button className='btn bg-[#23BE0A] text-white my-5 px-5 py-2 rounded-l text-l'>View The List</button>
            </div>
            <div className='w-[50%]'>
                <img className='rounded-3xl w-[90%] mx-auto' src={bannerImg} alt="Img not found" />
            </div>
        </div>
    );
};

export default Banner;