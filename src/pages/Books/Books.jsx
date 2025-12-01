import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ bookData }) => {
    // const [allBooks, setAllBooks] = useState([]);

    // useEffect(()=>{
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllBooks(data)
    //     })
    // }, [])

    // const bookPromise = fetch('./booksData.json').then(res => res.json())

    return (
        <div>
            <h1 className='text-4xl font-semibold text-center m-5'>Books</h1>
            <Suspense fallback={<span>loading.....</span>}>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 my-10'>
                    {
                        bookData.map(SingleBook => <Book key={SingleBook.bookId} SingleBook={SingleBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;