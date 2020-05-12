const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1),
        ];
    }
    if (idx === -1) {
        return [...cartItems, item];
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1),
    ];
};
const updateCartItem = (book, item = {}, quantity) => {
    const { id = book.id, title = book.title, author = book.author, price = book.price, count = 0 } = item;
    return {
        id, title, author, price,
        count: count + quantity
    };
};
const updateOrder = (state, bookId, quantity) => {
    const { booksList: { books }, shopingCart: { cartItems, orderTotal, orderCount } } = state;
    const book = books.find(({ id }) => id === bookId);
    const cartItemsIndex = cartItems.findIndex(({ id }) => id === bookId);
    const item = cartItems[cartItemsIndex];
    const newItem = updateCartItem(book, item, quantity);
    return {
        cartItems: updateCartItems(cartItems, newItem, cartItemsIndex),
        orderTotal: orderTotal + newItem.price * quantity,
        orderCount: orderCount + quantity
    };
};
const clearBookOrder = (state, bookId) => {
    const item = state.shopingCart.cartItems.find(book => book.id === bookId);
    return updateOrder(state, bookId, -item.count);
};
const updateShopingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderCount: 0,
            orderTotal: 0,
        };
    }
    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        case 'BOOK_DECREASE_FROM_CART':
            return updateOrder(state, action.payload, -1);
        case 'BOOK_REMOVE_FROM_CART':
            return clearBookOrder(state, action.payload);
        default:
            return state.shopingCart;
    }
};

export default updateShopingCart;