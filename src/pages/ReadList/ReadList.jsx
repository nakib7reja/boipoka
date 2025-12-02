import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getReadsBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState('')
    const booksData = useLoaderData();
    // console.log(booksData)

    useEffect(() => {
        const storedBookData = getReadsBook()
        // console.log(storedBookData)
        const convertedStoredBooks = storedBookData.map(id => parseInt(id))
        console.log(convertedStoredBooks)
        const myReadList = booksData.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);

    }, [booksData]);

    const handleSort = (type) => {
        setSort(type)
        if(type === 'pages'){
            const sortedByPages = [...readList].sort((a,b)=> a.totalPages - b.totalPages)
            setReadList(sortedByPages)
        }
        if(type === "ratings"){
            const sortByPages = [...readList].sort((a, b)=> a.rating - b.rating)
            setReadList(sortByPages)
        }
    }

    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">short by: {sort ? sort : ''}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort("pages")}>pages</a></li>
                    <li><a onClick={() => handleSort("ratings")}>ratings</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Read List</h2>
                    {
                        readList.map(book => <Book key={book.bookId} singleBook={book} ></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;