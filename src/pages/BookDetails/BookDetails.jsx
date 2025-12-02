import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToReadsBookDB, addToWishListBookDB } from '../../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';
const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { id } = useParams()
    // console.log(id)
    const booksData = useLoaderData()
    // console.log(bookData)

    const singleBook = booksData.find(book => book.bookId === parseInt(id))
    // console.log(singleBook)

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook

    const handleMarkAsRead = id => {

        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
        // toast("Wow so easy!");

        addToReadsBookDB(id)
    }
    const handleMarkAsWishList = id => {
        addToWishListBookDB(id)
    }

    return (
        <div className='flex my-10 gap-10'>
            {/* left */}
            <div className='bg-gray-200 w-[50%] p-30 rounded-2xl text-center items-center'>
                <img className='w-[99%] mx-auto' src={image} alt="BookImg" />
            </div>
            {/* right */}
            <div className='w-[50%] '>
                <div>
                    <h1 className='font-bold text-5xl my-5'>{bookName}</h1>
                    <p className='border-b border-gray-300 text-xl font-normal pb-5'>By : {author}</p>
                    <p className='border-b border-gray-300 text-xl font-normal py-5'>{category}</p>
                    <p className='text-sm font-normal my-5'><span className='font-bold text-lg'>Review : </span>{review}</p>
                </div>
                <div className='border-b border-gray-300 py-5'>
                    <span className='text-xl font-medium mr-5'>Tag</span>
                    {
                        tags.map(tag => <span className='bg-green-100 text-green-600 text-xl font-medium py-1 px-5 mr-4 rounded-2xl'>#{tag}</span>)
                    }
                </div>
                <div className='flex gap-20 my-7'>
                    <div className="space-y-3">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="font-bold space-y-3">
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleMarkAsRead(id)} className='btn mr-5 p-7 bg-white text-black text-xl font-semibold rounded-xl'>Read</button>
                    <button onClick={() => handleMarkAsWishList(id)} className='btn mr-5 p-7 bg-[#50B1C9] text-white text-xl font-semibold rounded-xl'>Wishlist</button>
                </div>


            </div>
             <ToastContainer />
        </div>
    );
};

export default BookDetails;