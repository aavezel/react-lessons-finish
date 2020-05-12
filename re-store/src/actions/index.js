const booksRequested = () => {
    return {
        type: "FETCH_BOOKS_REQUEST",
    }
}

const booksLoaded = (newBooks) => {
    return {
        type: "FETCH_BOOKS_SUCCESS",
        payload: newBooks
    }
}

const booksError = (error) => ({
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
})

export const bookAddedToCart = (bookId) => ({
    type: "BOOK_ADDED_TO_CART",
    payload: bookId,
})

export const bookRemoveFromCart = (bookId) => ({
    type: "BOOK_REMOVE_FROM_CART",
    payload: bookId,
})

export const bookDecreaseFromCart = (bookId) => ({
    type: "BOOK_DECREASE_FROM_CART",
    payload: bookId,
});

export const fetchBooksOld = (dispatch, getBooks) => () => {
    dispatch(booksRequested());
    getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
}

export const fetchBooks = (getBooks) => () => (dispatch) => {
    dispatch(booksRequested());
    getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
}