const getReadsBook = () => {
    const storeBookString = localStorage.getItem('readList');

    if (storeBookString) {
        const storeBookData = JSON.parse(storeBookString);
        return storeBookData;
    }
    else {
        return [];
    }
}

const addToReadsBookDB = (id) => {
    const storeBookData = getReadsBook();

    if (storeBookData.includes(id)) {
        alert('already exist')
    }
    else {
        storeBookData.push(id);
        const data = JSON.stringify(storeBookData);
        localStorage.setItem('readList', data);
    }
}

const getWishListBook = () => {
    const storeBookString = localStorage.getItem('wishList');

    if (storeBookString) {
        const storeBookData = JSON.parse(storeBookString);
        return storeBookData;
    }
    else {
        return [];
    }
}

const addToWishListBookDB = (id) => {
    const storeBookData = getWishListBook();

    if (storeBookData.includes(id)) {
        alert('already exist')
    }
    else {
        storeBookData.push(id);
        const data = JSON.stringify(storeBookData);
        localStorage.setItem('wishList', data);
    }
}

export {getReadsBook, addToReadsBookDB, addToWishListBookDB }