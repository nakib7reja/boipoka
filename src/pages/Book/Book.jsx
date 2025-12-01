import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { use } from 'react';
import ratingIcon from '../../assets/star-regular-full.svg'
import { Link } from 'react-router';

const Book = ({ SingleBook }) => {

    // console.log(bookPromise)
    // const books = use(bookPromise)
    // console.log(books)

    const { bookId, bookName, author, image, review, rating, category, tags, publisher, yearOfPublishing } = SingleBook
    // console.log(bookName, author)


    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border-2 border-gray-200  mx-auto">
                <div className='bg-gray-200 p-5 m-5 rounded-xl '>
                    <img
                        className='h-[300px] w-[300px] object-contain mx-auto'
                        src={image}
                        alt="books" />
                </div>
                <div className='h-[200px] m-5 border-b border-dashed'>
                    {
                        tags.map(tag => <span className='bg-green-100 text-green-600 text-xl font-medium py-1 px-5 mr-4 rounded-2xl'>{tag}</span>)
                    }
                    <h1 className='text-4xl font-semibold my-5'>{bookName}</h1>
                    <p className='text-2xl font-normal my-5'>By: {author}</p>
                </div>
                <div className='m-5 flex justify-between'>
                    <p className='text-xl font-normal'>{category}</p>
                    <p className='text-xl font-normal flex gap mr-5'>{rating} <img src={ratingIcon} /> </p>
                </div>
            </div>
        </Link>
    );
};

export default Book;